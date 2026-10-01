// FormulaX backend — Node 22.5+, no npm dependencies.
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { DatabaseSync } = require("node:sqlite");

const PORT = process.env.PORT || 3000;
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, "data");
const PUBLIC_DIR = path.join(__dirname, "public");
fs.mkdirSync(DATA_DIR, { recursive: true });

// ---------- Database ----------
const db = new DatabaseSync(process.env.DB_PATH || path.join(__dirname, "formulax.db"));
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    pass_hash TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS user_data (
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    key TEXT NOT NULL,
    value TEXT NOT NULL,
    PRIMARY KEY (user_id, key)
  );
`);

// Browser-storage keys the frontend is allowed to sync to the server
const ALLOWED_KEYS = new Set([
  "savedFormulas", "formulaUserLibrary", "formulaPracticeStats",
  "formulaWeakTopics", "formulaLabNotebook", "formulaChallengeSolved",
]);

// ---------- Passwords & sessions ----------
function hashPassword(password) {
  const salt = crypto.randomBytes(16);
  return salt.toString("hex") + ":" + crypto.scryptSync(password, salt, 64).toString("hex");
}
function verifyPassword(password, stored) {
  const [saltHex, hashHex] = stored.split(":");
  const expected = Buffer.from(hashHex, "hex");
  const actual = crypto.scryptSync(password, Buffer.from(saltHex, "hex"), 64);
  return expected.length === actual.length && crypto.timingSafeEqual(expected, actual);
}

const secretFile = path.join(DATA_DIR, ".session-secret");
const SECRET = process.env.SESSION_SECRET ||
  (fs.existsSync(secretFile)
    ? fs.readFileSync(secretFile, "utf8")
    : (() => { const s = crypto.randomBytes(32).toString("hex"); fs.writeFileSync(secretFile, s, { mode: 0o600 }); return s; })());
const SESSION_MS = 7 * 24 * 3600 * 1000;

function sign(value) { return crypto.createHmac("sha256", SECRET).update(value).digest("base64url"); }
function makeToken(userId) {
  const payload = Buffer.from(JSON.stringify({ uid: userId, exp: Date.now() + SESSION_MS })).toString("base64url");
  return payload + "." + sign(payload);
}
function readToken(token) {
  if (!token) return null;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return null;
  const good = Buffer.from(sign(payload)), given = Buffer.from(sig);
  if (good.length !== given.length || !crypto.timingSafeEqual(good, given)) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString());
    return data.exp > Date.now() ? data.uid : null;
  } catch { return null; }
}
function getCookie(req, name) {
  const match = (req.headers.cookie || "").split(";").map(c => c.trim()).find(c => c.startsWith(name + "="));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : null;
}
function setSession(req, res, userId) {
  const secure = req.headers["x-forwarded-proto"] === "https" ? "; Secure" : "";
  res.setHeader("Set-Cookie", `fx_session=${makeToken(userId)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${SESSION_MS / 1000}${secure}`);
}
function clearSession(res) {
  res.setHeader("Set-Cookie", "fx_session=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0");
}

// Simple login throttle: 10 failed attempts per 15 min per IP
const failures = new Map();
function tooManyFailures(ip) {
  const f = failures.get(ip);
  return f && f.until > Date.now() && f.count >= 10;
}
function recordFailure(ip) {
  const f = failures.get(ip);
  if (!f || f.until < Date.now()) failures.set(ip, { count: 1, until: Date.now() + 15 * 60 * 1000 });
  else f.count++;
}

// ---------- Helpers ----------
function send(res, status, body) {
  res.writeHead(status, { "Content-Type": "application/json", "Cache-Control": "no-store" });
  res.end(JSON.stringify(body));
}
function readJson(req) {
  return new Promise((resolve, reject) => {
    let size = 0; const chunks = [];
    req.on("data", c => { size += c.length; if (size > 1_000_000) { reject(new Error("Too large")); req.destroy(); } else chunks.push(c); });
    req.on("end", () => { try { resolve(JSON.parse(Buffer.concat(chunks).toString() || "{}")); } catch { reject(new Error("Bad JSON")); } });
  });
}
const publicUser = u => ({ id: u.id, name: u.name, email: u.email });

// ---------- API ----------
async function handleApi(req, res, pathname) {
  const ip = req.headers["x-forwarded-for"]?.split(",")[0].trim() || req.socket.remoteAddress;
  const userId = readToken(getCookie(req, "fx_session"));
  const currentUser = userId ? db.prepare("SELECT id,name,email FROM users WHERE id=?").get(userId) : null;

  if (req.method === "GET" && pathname === "/api/me") return send(res, 200, { user: currentUser ? publicUser(currentUser) : null });

  if (req.method === "POST" && pathname === "/api/register") {
    const { name = "", email = "", password = "" } = await readJson(req);
    const cleanName = String(name).trim().slice(0, 60), cleanEmail = String(email).trim().toLowerCase();
    if (!cleanName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) return send(res, 400, { error: "Enter a name and a valid email." });
    if (String(password).length < 6 || String(password).length > 200) return send(res, 400, { error: "Password must contain at least 6 characters." });
    if (db.prepare("SELECT 1 FROM users WHERE email=?").get(cleanEmail)) return send(res, 409, { error: "An account with this email already exists." });
    const result = db.prepare("INSERT INTO users (name,email,pass_hash) VALUES (?,?,?)").run(cleanName, cleanEmail, hashPassword(String(password)));
    setSession(req, res, Number(result.lastInsertRowid));
    return send(res, 201, { user: { id: Number(result.lastInsertRowid), name: cleanName, email: cleanEmail } });
  }

  if (req.method === "POST" && pathname === "/api/login") {
    if (tooManyFailures(ip)) return send(res, 429, { error: "Too many attempts. Try again in 15 minutes." });
    const { email = "", password = "" } = await readJson(req);
    const user = db.prepare("SELECT * FROM users WHERE email=?").get(String(email).trim().toLowerCase());
    if (!user || !verifyPassword(String(password), user.pass_hash)) { recordFailure(ip); return send(res, 401, { error: "Invalid email or password." }); }
    setSession(req, res, user.id);
    return send(res, 200, { user: publicUser(user) });
  }

  if (req.method === "POST" && pathname === "/api/logout") { clearSession(res); return send(res, 200, { ok: true }); }

  // Everything below requires a signed-in user
  if (!currentUser) return send(res, 401, { error: "Please sign in." });

  if (req.method === "GET" && pathname === "/api/data") {
    const rows = db.prepare("SELECT key,value FROM user_data WHERE user_id=?").all(currentUser.id);
    return send(res, 200, { data: Object.fromEntries(rows.map(r => [r.key, r.value])) });
  }

  if (req.method === "PUT" && pathname === "/api/data") {
    const body = await readJson(req);
    const upsert = db.prepare("INSERT INTO user_data (user_id,key,value) VALUES (?,?,?) ON CONFLICT(user_id,key) DO UPDATE SET value=excluded.value");
    const remove = db.prepare("DELETE FROM user_data WHERE user_id=? AND key=?");
    for (const [key, value] of Object.entries(body)) {
      if (!ALLOWED_KEYS.has(key)) continue;
      if (value === null) remove.run(currentUser.id, key);
      else if (typeof value === "string" && value.length <= 500_000) upsert.run(currentUser.id, key, value);
    }
    return send(res, 200, { ok: true });
  }

  return send(res, 404, { error: "Not found" });
}

// ---------- Static files ----------
const MIME = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png", ".ico": "image/x-icon", ".json": "application/json" };
function serveStatic(req, res, pathname) {
  const requested = pathname === "/" ? "/index.html" : decodeURIComponent(pathname);
  const file = path.normalize(path.join(PUBLIC_DIR, requested));
  if (!file.startsWith(PUBLIC_DIR + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
    res.writeHead(404, { "Content-Type": "text/plain" }); return res.end("Not found");
  }
  res.writeHead(200, { "Content-Type": MIME[path.extname(file)] || "application/octet-stream", "X-Content-Type-Options": "nosniff" });
  fs.createReadStream(file).pipe(res);
}

http.createServer(async (req, res) => {
  const { pathname } = new URL(req.url, "http://localhost");
  try {
    if (pathname.startsWith("/api/")) await handleApi(req, res, pathname);
    else if (req.method === "GET" || req.method === "HEAD") serveStatic(req, res, pathname);
    else { res.writeHead(405); res.end(); }
  } catch (error) {
    if (!res.headersSent) send(res, error.message === "Too large" ? 413 : 400, { error: error.message === "Too large" ? "Request too large." : "Bad request." });
  }
}).listen(PORT, "0.0.0.0", () => {
  console.log(`FormulaX running at http://localhost:${PORT}`);
  for (const list of Object.values(require("node:os").networkInterfaces()))
    for (const i of list || []) if (i.family === "IPv4" && !i.internal) console.log(`On your phone (same Wi-Fi): http://${i.address}:${PORT}`);
});
