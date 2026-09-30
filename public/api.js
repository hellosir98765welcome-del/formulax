/* FormulaX server connection — loaded after script.js.
   Replaces the localStorage-only login with real accounts, and syncs each
   user's saved data (cheat sheet, custom formulas, practice stats, lab notebook)
   to the server automatically. */
(() => {
    const SYNC_KEYS = ["savedFormulas", "formulaUserLibrary", "formulaPracticeStats",
        "formulaWeakTopics", "formulaLabNotebook", "formulaChallengeSolved"];
    const rawSet = Storage.prototype.setItem;
    const rawRemove = Storage.prototype.removeItem;
    let signedIn = false, pending = {}, timer;

    async function api(method, url, body, keepalive = false) {
        const res = await fetch(url, {
            method, credentials: "same-origin", keepalive,
            headers: { "Content-Type": "application/json" },
            body: body ? JSON.stringify(body) : undefined
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) { const error = new Error(data.error || "Request failed"); error.status = res.status; throw error; }
        return data;
    }

    // Any write to a synced key is sent to the server shortly afterwards
    function queue(key, value) {
        if (!signedIn) return;
        pending[key] = value;
        clearTimeout(timer);
        timer = setTimeout(flush, 400);
    }
    Storage.prototype.setItem = function (key, value) {
        rawSet.call(this, key, value);
        if (this === localStorage && SYNC_KEYS.includes(key)) queue(key, String(value));
    };
    Storage.prototype.removeItem = function (key) {
        rawRemove.call(this, key);
        if (this === localStorage && SYNC_KEYS.includes(key)) queue(key, null);
    };

    async function flush(keepalive = false) {
        clearTimeout(timer);
        if (!signedIn || !Object.keys(pending).length) return;
        const body = pending;
        pending = {};
        try { await api("PUT", "/api/data", body, keepalive === true); }
        catch (error) {
            if (error.status === 401) { location.reload(); return; }
            pending = { ...body, ...pending };
            showToast("Could not save to the server. Retrying on your next change.");
        }
    }
    window.addEventListener("pagehide", () => flush(true));

    async function loadUserData(user) {
        SYNC_KEYS.forEach(key => rawRemove.call(localStorage, key));
        const { data } = await api("GET", "/api/data");
        Object.entries(data).forEach(([key, value]) => rawSet.call(localStorage, key, value));
        signedIn = true;
        try { savedFormulas = JSON.parse(localStorage.getItem("savedFormulas") || "[]"); } catch { savedFormulas = []; }
        challengeSolvedCount = Number(localStorage.getItem("formulaChallengeSolved") || 0);
        for (let i = formulas.length - 1; i >= 0; i--) if (formulas[i].isCustom) formulas.splice(i, 1);
        loadCustomFormulas();
        setupUser(user);
        showApp();
        updateFormulaCount(); renderFormulas(); renderCheatSheet(); initializePractice(); renderLabNotebook();
    }

    window.checkAuthentication = async function () {
        ["formulaUser", "formulaLoggedIn"].forEach(key => localStorage.removeItem(key)); // old plain-text login
        const authScreen = document.getElementById("authScreen");
        authScreen.classList.add("hidden");
        try {
            const { user } = await api("GET", "/api/me");
            if (user) { await loadUserData(user); return; }
        } catch { }
        authScreen.classList.remove("hidden");
        document.getElementById("app").classList.add("hidden");
    };

    window.register = async function () {
        const name = document.getElementById("registerName").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const password = document.getElementById("registerPassword").value;
        if (!name || !email || !password) return showToast("Please fill all fields.");
        if (password.length < 6) return showToast("Password must contain at least 6 characters.");
        try {
            const { user } = await api("POST", "/api/register", { name, email, password });
            await loadUserData(user);
            showToast(`Welcome, ${user.name}!`);
        } catch (error) { showToast(error.message); }
    };

    window.login = async function () {
        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;
        if (!email || !password) return showToast("Enter your email and password.");
        try {
            const { user } = await api("POST", "/api/login", { email, password });
            await loadUserData(user);
            showToast(`Welcome back, ${user.name}!`);
        } catch (error) { showToast(error.message); }
    };

    window.logout = async function () {
        await flush();
        try { await api("POST", "/api/logout"); } catch { }
        SYNC_KEYS.forEach(key => rawRemove.call(localStorage, key));
        signedIn = false;
        location.reload();
    };
})();
