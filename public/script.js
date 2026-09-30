/* =========================================
   FORMULA DATA
========================================= */

const formulas = [

    {
        id: 1,
        name: "Power Rule",
        category: "Calculus",
        description: "Derivative of a power function.",
        latex: "\\frac{d}{dx}(x^n)=nx^{n-1}"
    },

    {
        id: 2,
        name: "Product Rule",
        category: "Calculus",
        description: "Derivative of a product of two functions.",
        latex: "\\frac{d}{dx}(uv)=u'v+uv'"
    },

    {
        id: 3,
        name: "Chain Rule",
        category: "Calculus",
        description: "Derivative of a composite function.",
        latex: "\\frac{d}{dx}f(g(x))=f'(g(x))g'(x)"
    },

    {
        id: 4,
        name: "Quadratic Formula",
        category: "Calculus",
        description: "Solutions of a quadratic equation.",
        latex: "x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}"
    },

    {
        id: 5,
        name: "Matrix Determinant",
        category: "Linear Algebra",
        description: "Determinant of a 2 × 2 matrix.",
        latex: "\\begin{vmatrix}a&b\\\\c&d\\end{vmatrix}=ad-bc"
    },

    {
        id: 6,
        name: "Ohm's Law",
        category: "Electrical",
        description: "Relationship between voltage, current and resistance.",
        latex: "V=IR"
    },

    {
        id: 7,
        name: "Electrical Power",
        category: "Electrical",
        description: "Electrical power formula.",
        latex: "P=VI=I^2R=\\frac{V^2}{R}"
    },

    {
        id: 8,
        name: "Resonant Frequency",
        category: "Electrical",
        description: "Frequency of an LC circuit.",
        latex: "f=\\frac{1}{2\\pi\\sqrt{LC}}"
    },

    {
        id: 9,
        name: "Newton's Second Law",
        category: "Physics",
        description: "Force equals mass times acceleration.",
        latex: "F=ma"
    },

    {
        id: 10,
        name: "Kinetic Energy",
        category: "Physics",
        description: "Energy due to motion.",
        latex: "KE=\\frac{1}{2}mv^2"
    },

    {
        id: 11,
        name: "Potential Energy",
        category: "Physics",
        description: "Gravitational potential energy.",
        latex: "PE=mgh"
    },

    {
        id: 12,
        name: "Momentum",
        category: "Physics",
        description: "Linear momentum.",
        latex: "p=mv"
    },

    {
        id: 13,
        name: "Ideal Gas Law",
        category: "Thermodynamics",
        description: "Pressure-volume-temperature relationship.",
        latex: "PV=nRT"
    },

    {
        id: 14,
        name: "Heat Equation",
        category: "Thermodynamics",
        description: "Heat transferred due to temperature change.",
        latex: "Q=mc\\Delta T"
    },

    {
        id: 15,
        name: "Efficiency",
        category: "Thermodynamics",
        description: "Ratio of useful output to input.",
        latex: "\\eta=\\frac{W_{out}}{W_{in}}\\times100"
    }

];

const interactiveFormulas = [
    { name: "Ohm's Law", category: "Electrical", latex: "V=IR", description: "Voltage, current, and resistance.", vars: { V: "Voltage (V)", I: "Current (A)", R: "Resistance (Ω)" }, solve: { V: v => v.I * v.R, I: v => v.V / v.R, R: v => v.V / v.I } },
    { name: "Electrical Power (P = VI)", category: "Electrical", latex: "P=VI", description: "Electrical power from voltage and current.", vars: { P: "Power (W)", V: "Voltage (V)", I: "Current (A)" }, solve: { P: v => v.V * v.I, V: v => v.P / v.I, I: v => v.P / v.V } },
    { name: "Electrical Power (P = I²R)", category: "Electrical", latex: "P=I^2R", description: "Electrical power from current and resistance.", vars: { P: "Power (W)", I: "Current (A)", R: "Resistance (Ω)" }, solve: { P: v => v.I ** 2 * v.R, I: v => Math.sqrt(v.P / v.R), R: v => v.P / (v.I ** 2) } },
    { name: "Electrical Power (P = V²/R)", category: "Electrical", latex: "P=\\frac{V^2}{R}", description: "Electrical power from voltage and resistance.", vars: { P: "Power (W)", V: "Voltage (V)", R: "Resistance (Ω)" }, solve: { P: v => v.V ** 2 / v.R, V: v => Math.sqrt(v.P * v.R), R: v => v.V ** 2 / v.P } },
    { name: "Newton's Second Law", category: "Physics", latex: "F=ma", description: "Force, mass, and acceleration.", vars: { F: "Force (N)", m: "Mass (kg)", a: "Acceleration (m/s²)" }, solve: { F: v => v.m * v.a, m: v => v.F / v.a, a: v => v.F / v.m } },
    { name: "Kinetic Energy", category: "Physics", latex: "KE=\\frac{1}{2}mv^2", description: "Energy of a moving object.", vars: { KE: "Kinetic energy (J)", m: "Mass (kg)", v: "Velocity (m/s)" }, solve: { KE: v => 0.5 * v.m * v.v ** 2, m: v => 2 * v.KE / v.v ** 2, v: v => Math.sqrt(2 * v.KE / v.m) } },
    { name: "Potential Energy", category: "Physics", latex: "PE=mgh", description: "Gravitational potential energy near Earth.", vars: { PE: "Potential energy (J)", m: "Mass (kg)", g: "Gravity (m/s²)", h: "Height (m)" }, solve: { PE: v => v.m * v.g * v.h, m: v => v.PE / (v.g * v.h), g: v => v.PE / (v.m * v.h), h: v => v.PE / (v.m * v.g) } },
    { name: "Momentum", category: "Physics", latex: "p=mv", description: "Linear momentum.", vars: { p: "Momentum (kg·m/s)", m: "Mass (kg)", v: "Velocity (m/s)" }, solve: { p: v => v.m * v.v, m: v => v.p / v.v, v: v => v.p / v.m } },
    { name: "Weight", category: "Physics", latex: "W=mg", description: "Weight from mass and gravitational acceleration.", vars: { W: "Weight (N)", m: "Mass (kg)", g: "Gravity (m/s²)" }, solve: { W: v => v.m * v.g, m: v => v.W / v.g, g: v => v.W / v.m } },
    { name: "Speed", category: "Motion", latex: "v=\\frac{d}{t}", description: "Average speed over a distance and time.", vars: { v: "Speed (m/s)", d: "Distance (m)", t: "Time (s)" }, solve: { v: v => v.d / v.t, d: v => v.v * v.t, t: v => v.d / v.v } },
    { name: "Acceleration", category: "Motion", latex: "a=\\frac{v-u}{t}", description: "Constant acceleration from initial and final velocity.", vars: { a: "Acceleration (m/s²)", v: "Final velocity (m/s)", u: "Initial velocity (m/s)", t: "Time (s)" }, solve: { a: v => (v.v - v.u) / v.t, v: v => v.u + v.a * v.t, u: v => v.v - v.a * v.t, t: v => (v.v - v.u) / v.a } },
    { name: "Distance with Constant Acceleration", category: "Motion", latex: "s=ut+\\frac{1}{2}at^2", description: "Displacement for constant acceleration.", vars: { s: "Displacement (m)", u: "Initial velocity (m/s)", a: "Acceleration (m/s²)", t: "Time (s)" }, solve: { s: v => v.u * v.t + 0.5 * v.a * v.t ** 2, u: v => (v.s - 0.5 * v.a * v.t ** 2) / v.t, a: v => 2 * (v.s - v.u * v.t) / v.t ** 2, t: v => (-v.u + Math.sqrt(v.u ** 2 + 2 * v.a * v.s)) / v.a } },
    { name: "Density", category: "Engineering", latex: "\\rho=\\frac{m}{V}", description: "Mass per unit volume.", vars: { rho: "Density (kg/m³)", m: "Mass (kg)", V: "Volume (m³)" }, solve: { rho: v => v.m / v.V, m: v => v.rho * v.V, V: v => v.m / v.rho } },
    { name: "Pressure", category: "Physics", latex: "P=\\frac{F}{A}", description: "Force per unit area.", vars: { P: "Pressure (Pa)", F: "Force (N)", A: "Area (m²)" }, solve: { P: v => v.F / v.A, F: v => v.P * v.A, A: v => v.F / v.P } },
    { name: "Work", category: "Physics", latex: "W=Fd", description: "Work by a constant force parallel to displacement.", vars: { W: "Work (J)", F: "Force (N)", d: "Distance (m)" }, solve: { W: v => v.F * v.d, F: v => v.W / v.d, d: v => v.W / v.F } },
    { name: "Ideal Gas Law", category: "Thermodynamics", latex: "PV=nRT", description: "Ideal gas pressure, volume, amount, and temperature. Use R = 8.314 J/(mol·K).", vars: { P: "Pressure (Pa)", V: "Volume (m³)", n: "Amount (mol)", R: "Gas constant (J/(mol·K))", T: "Temperature (K)" }, solve: { P: v => v.n * v.R * v.T / v.V, V: v => v.n * v.R * v.T / v.P, n: v => v.P * v.V / (v.R * v.T), R: v => v.P * v.V / (v.n * v.T), T: v => v.P * v.V / (v.n * v.R) } },
    { name: "Heat Transfer", category: "Thermodynamics", latex: "Q=mc\\Delta T", description: "Heat transferred during a temperature change.", vars: { Q: "Heat (J)", m: "Mass (kg)", c: "Specific heat (J/(kg·K))", dT: "Temperature change (K)" }, solve: { Q: v => v.m * v.c * v.dT, m: v => v.Q / (v.c * v.dT), c: v => v.Q / (v.m * v.dT), dT: v => v.Q / (v.m * v.c) } },
    { name: "Efficiency", category: "Thermodynamics", latex: "\\eta=\\frac{W_{out}}{W_{in}}\\times100", description: "Efficiency as a percentage.", vars: { eta: "Efficiency (%)", Wout: "Useful output", Win: "Total input" }, solve: { eta: v => v.Wout / v.Win * 100, Wout: v => v.eta * v.Win / 100, Win: v => v.Wout * 100 / v.eta } },
    { name: "Resonant Frequency", category: "Electrical", latex: "f=\\frac{1}{2\\pi\\sqrt{LC}}", description: "LC circuit resonant frequency. Enter L in henries and C in farads.", vars: { f: "Frequency (Hz)", L: "Inductance (H)", C: "Capacitance (F)" }, solve: { f: v => 1 / (2 * Math.PI * Math.sqrt(v.L * v.C)), L: v => 1 / ((2 * Math.PI * v.f) ** 2 * v.C), C: v => 1 / ((2 * Math.PI * v.f) ** 2 * v.L) } },
    { name: "Circle Area", category: "Geometry", latex: "A=\\pi r^2", description: "Area of a circle.", vars: { A: "Area", r: "Radius" }, solve: { A: v => Math.PI * v.r ** 2, r: v => Math.sqrt(v.A / Math.PI) } },
    { name: "Circle Circumference", category: "Geometry", latex: "C=2\\pi r", description: "Circumference of a circle.", vars: { C: "Circumference", r: "Radius" }, solve: { C: v => 2 * Math.PI * v.r, r: v => v.C / (2 * Math.PI) } },
    { name: "Rectangle Area", category: "Geometry", latex: "A=lw", description: "Area of a rectangle.", vars: { A: "Area", l: "Length", w: "Width" }, solve: { A: v => v.l * v.w, l: v => v.A / v.w, w: v => v.A / v.l } },
    { name: "Quadratic Equation", category: "Algebra", latex: "x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}", description: "Find both real roots of ax² + bx + c = 0.", vars: { x: "Root x", a: "Coefficient a", b: "Coefficient b", c: "Coefficient c" }, solve: { x: v => { const d = v.b ** 2 - 4 * v.a * v.c; return d < 0 ? NaN : [(-v.b + Math.sqrt(d)) / (2 * v.a), (-v.b - Math.sqrt(d)) / (2 * v.a)]; } } },
    { name: "Kinematic Equation", category: "Motion", latex: "v^2=u^2+2as", description: "Velocity, acceleration, and displacement without time.", vars: { v: "Final velocity (m/s)", u: "Initial velocity (m/s)", a: "Acceleration (m/s²)", s: "Displacement (m)" }, solve: { v: x => Math.sqrt(x.u ** 2 + 2 * x.a * x.s), u: x => Math.sqrt(x.v ** 2 - 2 * x.a * x.s), a: x => (x.v ** 2 - x.u ** 2) / (2 * x.s), s: x => (x.v ** 2 - x.u ** 2) / (2 * x.a) } },
    { name: "Electric Charge", category: "Electrical", latex: "Q=It", description: "Charge transferred by a current over time.", vars: { Q: "Charge (C)", I: "Current (A)", t: "Time (s)" }, solve: { Q: x => x.I * x.t, I: x => x.Q / x.t, t: x => x.Q / x.I } },
    { name: "Pythagorean Theorem", category: "Geometry", latex: "c=\\sqrt{a^2+b^2}", description: "Right triangle side lengths. Solving a or b assumes c is the hypotenuse.", vars: { c: "Hypotenuse", a: "Side a", b: "Side b" }, solve: { c: v => Math.sqrt(v.a ** 2 + v.b ** 2), a: v => Math.sqrt(v.c ** 2 - v.b ** 2), b: v => Math.sqrt(v.c ** 2 - v.a ** 2) } }
];

function loadCustomFormulas() {
    let stored = [];
    try { stored = JSON.parse(localStorage.getItem("formulaUserLibrary") || "[]"); } catch { stored = []; }
    if (!Array.isArray(stored)) return;
    const seen = new Set(formulas.map(formula => formula.id));
    stored.filter(item => item && Number.isFinite(item.id) && !seen.has(item.id) && item.isCustom && item.name && item.latex)
        .forEach(item => formulas.push({
            id: item.id,
            name: String(item.name).slice(0, 70),
            category: ["Calculus", "Linear Algebra", "Physics", "Electrical", "Thermodynamics"].includes(item.category) ? item.category : "Physics",
            latex: String(item.latex).slice(0, 180),
            description: String(item.description || "Personal formula added by you.").slice(0, 180),
            referenceUrl: safeReferenceUrl(item.referenceUrl || ""),
            isCustom: true
        }));
}

function safeReferenceUrl(value) {
    if (!value) return "";
    try {
        const url = new URL(value);
        return ["https:", "http:"].includes(url.protocol) ? url.href : "";
    } catch { return ""; }
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function addCustomFormula() {
    const name = document.getElementById("customFormulaName").value.trim();
    const latex = document.getElementById("customFormulaLatex").value.trim();
    const description = document.getElementById("customFormulaDescription").value.trim();
    const category = document.getElementById("customFormulaCategory").value;
    const referenceInput = document.getElementById("customFormulaReference").value.trim();
    if (!name || !latex || !description) {
        showToast("Add a name, formula, and short explanation.");
        return;
    }
    const referenceUrl = safeReferenceUrl(referenceInput);
    if (referenceInput && !referenceUrl) {
        showToast("Enter a valid http or https reference link.");
        return;
    }
    const nextId = Math.max(Date.now(), ...formulas.map(formula => Number(formula.id) + 1));
    const formula = { id: nextId, name, latex, description, category, referenceUrl, isCustom: true };
    formulas.push(formula);
    try {
        localStorage.setItem("formulaUserLibrary", JSON.stringify(formulas.filter(item => item.isCustom)));
    } catch {
        formulas.pop();
        showToast("Could not save this formula. Check browser storage space.");
        return;
    }
    ["customFormulaName", "customFormulaLatex", "customFormulaDescription", "customFormulaReference"].forEach(id => document.getElementById(id).value = "");
    renderFormulas();
    renderCheatSheet();
    updateFormulaCount();
    showToast("Your formula was added to the Formula Vault.");
}

function deleteCustomFormula(id) {
    const index = formulas.findIndex(formula => formula.id === id && formula.isCustom);
    if (index < 0) return;
    formulas.splice(index, 1);
    savedFormulas = savedFormulas.filter(savedId => savedId !== id);
    try {
        localStorage.setItem("formulaUserLibrary", JSON.stringify(formulas.filter(formula => formula.isCustom)));
        localStorage.setItem("savedFormulas", JSON.stringify(savedFormulas));
    } catch { }
    renderFormulas();
    renderCheatSheet();
    updateFormulaCount();
    showToast("Personal formula removed.");
}


/* =========================================
   APPLICATION STATE
========================================= */

let currentPracticeQuestion = null;
let practiceHintUsed = false;
let practiceStreak = 0;

function readPracticeStats() {
    try { return JSON.parse(localStorage.getItem("formulaPracticeStats") || '{"correct":0,"attempts":0}'); }
    catch { return { correct: 0, attempts: 0 }; }
}

function initializePractice() {
    updatePracticeProgress();
    renderWeakTopicResources();
}

function updatePracticeProgress() {
    const stats = readPracticeStats();
    document.getElementById("practiceCorrect").textContent = stats.correct || 0;
    document.getElementById("practiceAttempts").textContent = stats.attempts || 0;
    document.getElementById("practiceAccuracy").textContent = `${stats.attempts ? Math.round(stats.correct / stats.attempts * 100) : 0}%`;
    document.getElementById("practiceStreak").textContent = `🔥 ${practiceStreak} streak`;
}

function startFormulaPractice() {
    const available = formulas.filter(formula => !formula.isCustom && formula.latex && formula.description);
    const target = available[Math.floor(Math.random() * available.length)];
    const distractors = available.filter(formula => formula.id !== target.id && formula.latex !== target.latex)
        .sort(() => Math.random() - .5).slice(0, 3);
    const choices = [...distractors, target].sort(() => Math.random() - .5);
    currentPracticeQuestion = { target, choices };
    practiceHintUsed = false;
    document.getElementById("practiceRound").textContent = "Choose the matching formula";
    document.getElementById("practicePrompt").innerHTML = `<span class="formula-category">${target.category}</span><h3>${target.name}</h3><p>${target.description}</p>`;
    document.getElementById("practiceChoices").innerHTML = choices.map((formula, index) => `<button class="practice-choice" type="button" onclick="checkPracticeAnswer(${index})"><span class="choice-letter">${String.fromCharCode(65 + index)}</span><span class="choice-math">$$${formula.latex}$$</span></button>`).join("");
    document.getElementById("practiceFeedback").textContent = "";
    document.getElementById("practiceStartButton").classList.add("hidden");
    document.getElementById("practiceNextButton").classList.add("hidden");
    document.getElementById("practiceHintButton").classList.remove("hidden");
    if (window.MathJax?.typesetPromise) MathJax.typesetPromise([document.getElementById("practiceChoices")]);
}

function showPracticeHint() {
    if (!currentPracticeQuestion) {
        document.getElementById("practiceFeedback").textContent = "Start a round first, then use a hint if you need one.";
        return;
    }
    practiceHintUsed = true;
    document.getElementById("practiceFeedback").innerHTML = `<div class="hint-box">Hint: look for <strong>${currentPracticeQuestion.target.category}</strong> and identify what each symbol in the description represents.</div>`;
}

function checkPracticeAnswer(index) {
    if (!currentPracticeQuestion) return;
    const chosen = currentPracticeQuestion.choices[index];
    const correct = chosen.id === currentPracticeQuestion.target.id;
    if (!correct) recordWeakTopic(currentPracticeQuestion.target.category, currentPracticeQuestion.target.name);
    document.querySelectorAll(".practice-choice").forEach((button, choiceIndex) => {
        button.disabled = true;
        if (currentPracticeQuestion.choices[choiceIndex].id === currentPracticeQuestion.target.id) button.classList.add("choice-correct");
        else if (choiceIndex === index) button.classList.add("choice-wrong");
    });
    const stats = readPracticeStats();
    stats.attempts = (stats.attempts || 0) + 1;
    if (correct) {
        stats.correct = (stats.correct || 0) + 1;
        practiceStreak += 1;
    } else practiceStreak = 0;
    try { localStorage.setItem("formulaPracticeStats", JSON.stringify(stats)); } catch { }
    const feedback = document.getElementById("practiceFeedback");
    const resourceLinks = correct ? "" : buildTopicResourceLinks(currentPracticeQuestion.target.category, currentPracticeQuestion.target.name);
    feedback.innerHTML = `<div class="${correct ? "feedback-correct" : "feedback-wrong"}"><strong>${correct ? "Correct — nice recall!" : "Not quite; the highlighted choice is correct."}</strong><p>${currentPracticeQuestion.target.description}</p>${practiceHintUsed ? "<small>Hint used: this round does not extend your streak.</small>" : ""}${resourceLinks}</div>`;
    if (correct && practiceHintUsed) practiceStreak = Math.max(0, practiceStreak - 1);
    document.getElementById("practiceRound").textContent = `Round complete · ${correct ? "correct" : "review this one"}`;
    document.getElementById("practiceHintButton").classList.add("hidden");
    document.getElementById("practiceNextButton").classList.remove("hidden");
    updatePracticeProgress();
}

function resetPracticeProgress() {
    try { localStorage.removeItem("formulaPracticeStats"); } catch { }
    try { localStorage.removeItem("formulaWeakTopics"); } catch { }
    practiceStreak = 0;
    updatePracticeProgress();
    document.getElementById("practiceFeedback").textContent = "Progress reset. Ready for a fresh start.";
    renderWeakTopicResources();
}

const studyReferences = {
    Calculus: { book: "OpenStax · Calculus: Derivatives", url: "https://openstax.org/books/calculus-volume-1/pages/3-1-defining-the-derivative", video: "Khan Academy calculus derivatives" },
    Algebra: { book: "OpenStax · Precalculus: Quadratic equations", url: "https://openstax.org/books/precalculus-2e/pages/3-key-equations", video: "Khan Academy quadratic formula" },
    "Linear Algebra": { book: "MIT OpenCourseWare · Linear Algebra", url: "https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/syllabus/", video: "MIT OpenCourseWare linear algebra" },
    Physics: { book: "OpenStax · University Physics, Volume 1", url: "https://openstax.org/books/university-physics-volume-1/pages/preface", video: "Khan Academy physics mechanics" },
    Electrical: { book: "OpenStax · Ohm’s Law", url: "https://openstax.org/books/university-physics-volume-2/pages/9-4-ohms-law", video: "Khan Academy circuits Ohm's law" },
    Thermodynamics: { book: "OpenStax · University Physics, Volume 2", url: "https://openstax.org/books/university-physics-volume-2/pages/2-1-molecular-model-of-an-ideal-gas", video: "Khan Academy thermodynamics" }
};

function buildTopicResourceLinks(category, formulaName) {
    const resource = studyReferences[category] || studyReferences.Physics;
    const topicQuery = encodeURIComponent(`${resource.video} ${formulaName}`);
    return `<div class="practice-resources"><strong>Quick study links for ${escapeHTML(formulaName)}:</strong><a href="https://www.youtube.com/results?search_query=${topicQuery}" target="_blank" rel="noopener noreferrer">Find a video lesson ↗</a><a href="${safeReferenceUrl(resource.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(resource.book)} ↗</a><button type="button" onclick="clearWeakTopic('${escapeHTML(category)}')">Mark topic reviewed</button></div>`;
}

function readWeakTopics() {
    try { return JSON.parse(localStorage.getItem("formulaWeakTopics") || "{}"); }
    catch { return {}; }
}

function recordWeakTopic(category, formulaName) {
    const weakTopics = readWeakTopics();
    const item = weakTopics[category] || { misses: 0, formula: formulaName };
    item.misses += 1;
    item.formula = formulaName;
    item.updated = Date.now();
    weakTopics[category] = item;
    try { localStorage.setItem("formulaWeakTopics", JSON.stringify(weakTopics)); } catch { }
}

function clearWeakTopic(category) {
    const weakTopics = readWeakTopics();
    delete weakTopics[category];
    try { localStorage.setItem("formulaWeakTopics", JSON.stringify(weakTopics)); } catch { }
    renderWeakTopicResources();
    showToast(`${category} removed from your review list.`);
}

function renderWeakTopicResources() {
    const container = document.getElementById("weakTopicResources");
    if (!container) return;
    const topics = Object.entries(readWeakTopics()).sort((a, b) => b[1].updated - a[1].updated);
    if (!topics.length) {
        container.innerHTML = '<div class="weak-topic-empty"><strong>Topics to revisit</strong><p>Miss a question in practice and we’ll save its topic here with video and book links.</p></div>';
        return;
    }
    container.innerHTML = `<h3>Topics to revisit</h3><p class="weak-topic-intro">These topics are based on your missed practice questions. Review the links, then mark each topic when you feel ready.</p>${topics.map(([category, item]) => `<article class="weak-topic-card"><div><span class="formula-category">${escapeHTML(category)}</span><strong>${escapeHTML(item.formula)}</strong><small>${item.misses} missed practice ${item.misses === 1 ? "question" : "questions"}</small></div>${buildTopicResourceLinks(category, item.formula)}</article>`).join("")}`;
}

let currentCategory = "All";

let savedFormulas =
    JSON.parse(
        localStorage.getItem("savedFormulas") || "[]"
    );


/* =========================================
   INITIALIZATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    loadCustomFormulas();
    initializeMatrix();
    initializeSolver();
    initializeUnitConverter();
    initializeLabCoach();
    initializePractice();
    renderLabNotebook();

    updateFormulaCount();

    renderFormulas();

    renderCheatSheet();

    checkAuthentication();

});

/* =========================================
   UNIT CONVERTER
========================================= */

const unitCatalog = {
    Length: [
        ["Millimeter", "mm", 0.001], ["Centimeter", "cm", 0.01], ["Meter", "m", 1],
        ["Kilometer", "km", 1000], ["Inch", "in", 0.0254], ["Foot", "ft", 0.3048],
        ["Yard", "yd", 0.9144], ["Mile", "mi", 1609.344]
    ],
    Mass: [
        ["Milligram", "mg", 0.000001], ["Gram", "g", 0.001], ["Kilogram", "kg", 1],
        ["Metric tonne", "t", 1000], ["Ounce", "oz", 0.028349523125], ["Pound", "lb", 0.45359237]
    ],
    Time: [
        ["Millisecond", "ms", 0.001], ["Second", "s", 1], ["Minute", "min", 60],
        ["Hour", "h", 3600], ["Day", "d", 86400], ["Week", "wk", 604800]
    ],
    Temperature: [
        ["Celsius", "°C", value => value + 273.15, value => value - 273.15],
        ["Fahrenheit", "°F", value => (value - 32) * 5 / 9 + 273.15, value => (value - 273.15) * 9 / 5 + 32],
        ["Kelvin", "K", value => value, value => value]
    ],
    Area: [
        ["Square centimeter", "cm²", 0.0001], ["Square meter", "m²", 1], ["Hectare", "ha", 10000],
        ["Square kilometer", "km²", 1000000], ["Square foot", "ft²", 0.09290304], ["Acre", "ac", 4046.8564224]
    ],
    Volume: [
        ["Milliliter", "mL", 0.001], ["Liter", "L", 1], ["Cubic meter", "m³", 1000],
        ["Teaspoon (US)", "tsp", 0.00492892159375], ["Tablespoon (US)", "tbsp", 0.01478676478125],
        ["US cup", "cup", 0.2365882365], ["US gallon", "gal", 3.785411784]
    ],
    Speed: [
        ["Meters per second", "m/s", 1], ["Kilometers per hour", "km/h", 1 / 3.6],
        ["Miles per hour", "mph", 0.44704], ["Foot per second", "ft/s", 0.3048], ["Knot", "kn", 0.514444]
    ],
    Pressure: [
        ["Pascal", "Pa", 1], ["Kilopascal", "kPa", 1000], ["Bar", "bar", 100000],
        ["Atmosphere", "atm", 101325], ["Pound per square inch", "psi", 6894.757293]
    ],
    Energy: [
        ["Joule", "J", 1], ["Kilojoule", "kJ", 1000], ["Calorie", "cal", 4.184],
        ["Kilocalorie", "kcal", 4184], ["Watt-hour", "Wh", 3600], ["Kilowatt-hour", "kWh", 3600000]
    ]
};

function initializeUnitConverter() {
    const category = document.getElementById("unitCategory");
    if (!category) return;
    category.innerHTML = Object.keys(unitCatalog).map(name => `<option value="${name}">${name}</option>`).join("");
    category.addEventListener("change", populateUnitChoices);
    document.getElementById("unitInputValue").addEventListener("input", convertUnits);
    document.getElementById("unitFrom").addEventListener("change", convertUnits);
    document.getElementById("unitTo").addEventListener("change", convertUnits);
    document.getElementById("unitSwap").addEventListener("click", () => {
        const from = document.getElementById("unitFrom");
        const to = document.getElementById("unitTo");
        [from.value, to.value] = [to.value, from.value];
        convertUnits();
    });
    document.getElementById("unitCopy").addEventListener("click", async () => {
        const result = document.getElementById("unitResultText").textContent;
        if (!result || result.startsWith("Enter") || result.startsWith("Use")) return;
        try {
            await navigator.clipboard.writeText(result);
            showToast("Conversion copied");
        } catch {
            showToast("Select and copy the result");
        }
    });
    populateUnitChoices();
}

function populateUnitChoices() {
    const units = unitCatalog[document.getElementById("unitCategory").value];
    const options = units.map((unit, index) => `<option value="${index}">${unit[0]} (${unit[1]})</option>`).join("");
    const from = document.getElementById("unitFrom");
    const to = document.getElementById("unitTo");
    from.innerHTML = options;
    to.innerHTML = options;
    from.selectedIndex = 2 < units.length ? 2 : 0;
    to.selectedIndex = units.length > 1 ? 1 : 0;
    convertUnits();
}

function convertUnits() {
    const value = Number(document.getElementById("unitInputValue").value);
    const category = document.getElementById("unitCategory").value;
    const units = unitCatalog[category];
    const from = units[Number(document.getElementById("unitFrom").value)];
    const to = units[Number(document.getElementById("unitTo").value)];
    const output = document.getElementById("unitOutputValue");
    const resultText = document.getElementById("unitResultText");
    if (!Number.isFinite(value)) {
        output.textContent = "—";
        resultText.textContent = "Enter a value to see the conversion.";
        return;
    }
    const baseValue = typeof from[2] === "function" ? from[2](value) : value * from[2];
    const converted = typeof to[3] === "function" ? to[3](baseValue) : baseValue / to[2];
    const formatted = new Intl.NumberFormat(undefined, { maximumSignificantDigits: 10 }).format(converted);
    output.textContent = `${formatted} ${to[1]}`;
    resultText.textContent = `${new Intl.NumberFormat(undefined, { maximumSignificantDigits: 10 }).format(value)} ${from[1]} = ${formatted} ${to[1]}`;
}


/* =========================================
   AUTHENTICATION
========================================= */

function register() {

    const name =
        document
            .getElementById("registerName")
            .value
            .trim();

    const email =
        document
            .getElementById("registerEmail")
            .value
            .trim();

    const password =
        document
            .getElementById("registerPassword")
            .value;

    if (!name || !email || !password) {

        showToast("Please fill all fields.");

        return;
    }

    if (password.length < 6) {

        showToast(
            "Password must contain at least 6 characters."
        );

        return;
    }

    const user = {

        name,
        email,
        password

    };

    localStorage.setItem(
        "formulaUser",
        JSON.stringify(user)
    );

    localStorage.setItem(
        "formulaLoggedIn",
        "true"
    );

    setupUser(user);

    showApp();

    showToast(
        `Welcome, ${name}!`
    );
}


function login() {

    const email =
        document
            .getElementById("loginEmail")
            .value
            .trim();

    const password =
        document
            .getElementById("loginPassword")
            .value;

    const storedUser =
        JSON.parse(
            localStorage.getItem("formulaUser")
        );

    if (!storedUser) {

        showToast(
            "No account found. Please register first."
        );

        return;
    }

    if (
        email !== storedUser.email ||
        password !== storedUser.password
    ) {

        showToast(
            "Invalid email or password."
        );

        return;
    }

    localStorage.setItem(
        "formulaLoggedIn",
        "true"
    );

    setupUser(storedUser);

    showApp();

    showToast(
        `Welcome back, ${storedUser.name}!`
    );
}


function logout() {

    localStorage.removeItem(
        "formulaLoggedIn"
    );

    document
        .getElementById("app")
        .classList.add("hidden");

    document
        .getElementById("authScreen")
        .classList.remove("hidden");

    showLogin();

    showToast("Logged out successfully.");
}


function checkAuthentication() {

    const loggedIn =
        localStorage.getItem(
            "formulaLoggedIn"
        );

    const user =
        JSON.parse(
            localStorage.getItem("formulaUser")
        );

    if (loggedIn === "true" && user) {

        setupUser(user);

        showApp();

    } else {

        document
            .getElementById("authScreen")
            .classList.remove("hidden");

        document
            .getElementById("app")
            .classList.add("hidden");
    }
}


function setupUser(user) {

    const firstLetter =
        user.name
            .charAt(0)
            .toUpperCase();

    document
        .getElementById("sidebarName")
        .textContent = user.name;

    document
        .getElementById("sidebarAvatar")
        .textContent = firstLetter;

    document
        .getElementById("topAvatar")
        .textContent = firstLetter;
}


function showApp() {

    document
        .getElementById("authScreen")
        .classList.add("hidden");

    document
        .getElementById("app")
        .classList.remove("hidden");
}


function showLogin() {

    document
        .getElementById("loginForm")
        .classList.remove("hidden");

    document
        .getElementById("registerForm")
        .classList.add("hidden");
}


function showRegister() {

    document
        .getElementById("loginForm")
        .classList.add("hidden");

    document
        .getElementById("registerForm")
        .classList.remove("hidden");
}


function togglePassword(id) {

    const input =
        document.getElementById(id);

    input.type =
        input.type === "password"
            ? "text"
            : "password";
}


/* =========================================
   NAVIGATION
========================================= */

const pageInfo = {
    units: ["Unit Converter", "Convert common measurements instantly"],

    dashboard: [
        "Dashboard",
        "Your engineering mathematics workspace"
    ],

    formulas: [
        "Formula Vault",
        "Search your engineering formula library"
    ],

    solver: [
        "Interactive Solver",
        "Calculate unknown engineering variables"
    ],

    plotter: [
        "Function Plotter",
        "Visualize mathematical functions"
    ],

    matrix: [
        "Matrix Calculator",
        "Calculate matrix properties"
    ],

    derivative: [
        "Derivative Calculator",
        "Differentiate polynomial functions"
    ],

    cheatsheet: [
        "My Cheat Sheet",
        "Your saved engineering formulas"
    ],

    labcoach: [
        "Engineering Lab Coach",
        "Turn experiment readings into checked, explainable results"
    ],

    practice: [
        "Formula Practice",
        "Build formula recall with short questions and helpful feedback"
    ]

};


function showSection(sectionId) {

    document
        .querySelectorAll(".section")
        .forEach(section => {

            section.classList.remove(
                "active-section"
            );

        });


    const section =
        document.getElementById(sectionId);

    if (section) {

        section.classList.add(
            "active-section"
        );
    }


    document
        .querySelectorAll(".nav-item")
        .forEach(button => {

            button.classList.remove("active");

            if (
                button.dataset.section === sectionId
            ) {

                button.classList.add("active");

            }

        });


    document
        .getElementById("pageTitle")
        .textContent =
        pageInfo[sectionId][0];

    document
        .getElementById("pageSubtitle")
        .textContent =
        pageInfo[sectionId][1];


    if (sectionId === "cheatsheet") {

        renderCheatSheet();

    }


    if (sectionId === "plotter") {

        setTimeout(
            plotFunction,
            100
        );

    }


    if (sectionId === "labcoach") {
        requestAnimationFrame(drawLabChart);
        renderLabNotebook();
    }

    closeSidebar();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================
   SIDEBAR
========================================= */

function toggleSidebar() {

    document
        .querySelector(".sidebar")
        .classList.toggle("open");
}


function closeSidebar() {

    document
        .querySelector(".sidebar")
        .classList.remove("open");
}


/* =========================================
   FORMULA VAULT
========================================= */

function renderFormulas() {

    const grid =
        document.getElementById(
            "formulaGrid"
        );

    const search =
        document
            .getElementById("formulaSearch")
            .value
            .toLowerCase()
            .trim();


    const filtered =
        formulas.filter(formula => {

            const matchesCategory =
                currentCategory === "All" ||
                formula.category === currentCategory;

            const matchesSearch =
                !search ||
                formula.name
                    .toLowerCase()
                    .includes(search) ||
                formula.description
                    .toLowerCase()
                    .includes(search) ||
                formula.category
                    .toLowerCase()
                    .includes(search) ||
                formula.latex.toLowerCase().includes(search);

            return (
                matchesCategory &&
                matchesSearch
            );
        });


    if (filtered.length === 0) {

        grid.innerHTML = `

            <div class="panel"
                 style="grid-column:1/-1;text-align:center">

                <h3>No formulas found</h3>

                <p class="muted">
                    Try another search term.
                </p>

            </div>

        `;

        return;
    }


    grid.innerHTML =
        filtered
            .map(createFormulaCard)
            .join("");


    if (window.MathJax) {

        MathJax.typesetPromise();

    }
}


function createFormulaCard(formula) {

    const isSaved =
        savedFormulas.includes(
            formula.id
        );

    const referenceUrl = safeReferenceUrl(formula.referenceUrl || "");
    const referenceLink = referenceUrl
        ? `<a class="formula-reference-link" href="${escapeHTML(referenceUrl)}" target="_blank" rel="noopener noreferrer">Open reference ↗</a>`
        : "";
    const customControls = formula.isCustom
        ? `<span class="formula-personal-tag">Personal</span><button class="formula-delete-btn" type="button" onclick="deleteCustomFormula(${Number(formula.id)})" title="Remove your formula">Remove</button>`
        : "";

    return `

        <article class="formula-card">

            <button
                class="bookmark-btn
                ${isSaved ? "saved" : ""}"
                onclick="toggleSave(${formula.id})"
                title="Save formula"
            >
                ${isSaved ? "★" : "☆"}
            </button>

            <span class="formula-category">
                ${escapeHTML(formula.category)}
            </span>

            ${customControls}

            <h3>
                ${escapeHTML(formula.name)}
            </h3>

            <div class="formula-math">
                $$${escapeHTML(formula.latex)}$$
            </div>

            <p>
                ${escapeHTML(formula.description)}
            </p>

            ${referenceLink}

        </article>

    `;
}


function setCategory(category, element) {

    currentCategory = category;

    document
        .querySelectorAll(".category")
        .forEach(button =>
            button.classList.remove("active")
        );

    element.classList.add("active");

    renderFormulas();
}


function filterTopic(category) {

    showSection("formulas");

    currentCategory =
        category === "Electrical"
            ? "Electrical"
            : category;

    document
        .getElementById("formulaSearch")
        .value = "";

    document
        .querySelectorAll(".category")
        .forEach(button => {

            button.classList.remove("active");

            if (
                button.textContent.trim() ===
                currentCategory
            ) {

                button.classList.add("active");

            }

        });

    renderFormulas();
}


/* =========================================
   BOOKMARKS
========================================= */

function toggleSave(id) {

    if (savedFormulas.includes(id)) {

        savedFormulas =
            savedFormulas.filter(
                item => item !== id
            );

        showToast(
            "Formula removed from cheat sheet."
        );

    } else {

        savedFormulas.push(id);

        showToast(
            "Formula saved to cheat sheet!"
        );
    }


    localStorage.setItem(
        "savedFormulas",
        JSON.stringify(savedFormulas)
    );


    renderFormulas();

    renderCheatSheet();

    updateFormulaCount();
}


function renderCheatSheet() {

    const container =
        document.getElementById(
            "cheatSheetGrid"
        );

    if (!container) return;


    const saved =
        formulas.filter(formula =>
            savedFormulas.includes(
                formula.id
            )
        );


    if (saved.length === 0) {

        container.innerHTML = `

            <div class="panel"
                 style="grid-column:1/-1;text-align:center">

                <div style="font-size:45px">
                    ☆
                </div>

                <h3>
                    Your cheat sheet is empty
                </h3>

                <p class="muted">
                    Click ☆ on any formula to save it.
                </p>

            </div>

        `;

        return;
    }


    container.innerHTML =
        saved
            .map(createFormulaCard)
            .join("");


    if (window.MathJax) {

        MathJax.typesetPromise();

    }
}


function updateFormulaCount() {

    document
        .getElementById("formulaCount")
        .textContent =
        formulas.length;

    document
        .getElementById("savedCount")
        .textContent =
        savedFormulas.length;
}


/* =========================================
   RESONANT FREQUENCY SOLVER
========================================= */

function initializeSolver() {
    const select = document.getElementById("solverFormula");
    if (!select) return;
    select.innerHTML = interactiveFormulas.map((formula, index) =>
        `<option value="${index}">${formula.category} — ${formula.name}</option>`
    ).join("");
    renderSolverFormula();
}

function getSelectedSolverFormula() {
    return interactiveFormulas[Number(document.getElementById("solverFormula").value)];
}

function renderSolverFormula() {
    const formula = getSelectedSolverFormula();
    if (!formula) return;
    document.getElementById("solverEquation").innerHTML = `$$${formula.latex}$$`;
    document.getElementById("solverDescription").textContent = formula.description;
    const target = document.getElementById("solverTarget");
    target.innerHTML = Object.keys(formula.solve).map(key =>
        `<option value="${key}">${formula.vars[key]}</option>`
    ).join("");
    document.getElementById("solverResult").classList.add("hidden");
    renderSolverInputs();
    if (window.MathJax?.typesetPromise) MathJax.typesetPromise([document.getElementById("solverEquation")]);
}

function renderSolverInputs() {
    const formula = getSelectedSolverFormula();
    if (!formula) return;
    const target = document.getElementById("solverTarget").value || Object.keys(formula.solve)[0];
    const fields = document.getElementById("solverFields");
    fields.innerHTML = Object.entries(formula.vars)
        .filter(([key]) => key !== target)
        .map(([key, label]) => `<div class="input-group"><label for="solver-input-${key}">${label}</label><input id="solver-input-${key}" type="number" step="any" inputmode="decimal" autocomplete="off" placeholder="Enter ${label.toLowerCase()}" /></div>`)
        .join("");
    document.getElementById("solverResult").classList.add("hidden");
}

function solveSelectedFormula() {
    const formula = getSelectedSolverFormula();
    const target = document.getElementById("solverTarget").value;
    const values = {};
    for (const [key, label] of Object.entries(formula.vars)) {
        if (key === target) continue;
        const input = document.getElementById(`solver-input-${key}`);
        const value = input?.value.trim() === "" ? NaN : Number(input.value);
        if (!Number.isFinite(value)) {
            input?.focus();
            showToast(`Enter a valid value for ${label}.`);
            return;
        }
        values[key] = value;
    }

    let answer;
    try {
        answer = formula.solve[target](values);
    } catch (error) {
        answer = NaN;
    }
    if (!(Array.isArray(answer) ? answer.every(Number.isFinite) : Number.isFinite(answer))) {
        showToast("These values do not produce a real, finite result. Check for division by zero or invalid roots.");
        return;
    }
    const result = document.getElementById("solverResult");
    result.classList.remove("hidden");
    const formattedAnswer = (Array.isArray(answer) ? answer : [answer]).map(value => Number(value.toPrecision(8)).toLocaleString()).join(" or ");
    result.innerHTML = `<strong>${formula.vars[target]}</strong><span class="result-number">${formattedAnswer}<small class="solver-unit">${formula.vars[target].match(/\(([^)]+)\)/)?.[1] || ""}</small></span>`;
}

function solveFrequency() {

    const L =
        parseFloat(
            document
                .getElementById("inductance")
                .value
        );

    const C =
        parseFloat(
            document
                .getElementById("capacitance")
                .value
        );


    if (
        isNaN(L) ||
        isNaN(C) ||
        L <= 0 ||
        C <= 0
    ) {

        showToast(
            "Enter valid positive L and C values."
        );

        return;
    }


    const frequency =
        1 /
        (
            2 *
            Math.PI *
            Math.sqrt(L * C)
        );


    const result =
        document.getElementById(
            "solverResult"
        );

    result.classList.remove(
        "hidden"
    );


    result.innerHTML = `

        <strong>
            Resonant Frequency
        </strong>

        <span class="result-number">
            ${frequency.toFixed(4)} Hz
        </span>

        <p>
            Using
            f = 1 / (2π√LC)
        </p>

    `;


    if (window.MathJax) {

        MathJax.typesetPromise();

    }
}


/* =========================================
   FUNCTION PLOTTER
========================================= */

function plotFunction() {

    const target =
        document.getElementById("plot");

    if (!target) return;


    const rawExpression =
        document
            .getElementById("functionInput")
            .value
            .trim();

    const expression = normalizePlotExpression(rawExpression);


    if (!expression) {

        showToast(
            "Enter a function first."
        );

        return;
    }


    target.innerHTML = "";
    const circleRadius = parseCircleRadius(rawExpression);


    try {

        functionPlot({

            target: "#plot",

            width:
                target.clientWidth,

            height: 450,

            grid: true,

            xAxis: {
                domain: [-10, 10]
            },

            yAxis: {
                domain: [-10, 10]
            },

            data: circleRadius
                ? [
                    { fn: `sqrt(${circleRadius * circleRadius} - x^2)`, color: "#b91c1c", range: [-circleRadius, circleRadius] },
                    { fn: `-sqrt(${circleRadius * circleRadius} - x^2)`, color: "#b91c1c", range: [-circleRadius, circleRadius] }
                ]
                : [{ fn: expression, color: "#b91c1c", graphType: "polyline" }]

        });

    } catch (error) {

        target.innerHTML = `

            <div style="
                padding:30px;
                color:#ff5c5c;
                text-align:center;
            ">

                Could not plot that expression. Try x^2, x^3, sin(x), or the circle example.

            </div>

        `;

    }
}

function normalizePlotExpression(expression) {
    return expression
        .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, character => `^${"⁰¹²³⁴⁵⁶⁷⁸⁹".indexOf(character)}`)
        .replace(/\s+/g, "")
        .replace(/([0-9])x/g, "$1*x");
}

function parseCircleRadius(expression) {
    const normalized = expression.toLowerCase().replace(/²/g, "^2").replace(/\s/g, "");
    const match = normalized.match(/^x\^2\+y\^2=(\d+(?:\.\d+)?)$/);
    if (!match) return null;
    const squaredRadius = Number(match[1]);
    return squaredRadius > 0 ? Math.sqrt(squaredRadius) : null;
}

function usePlotExample(expression) {
    const input = document.getElementById("functionInput");
    input.value = expression === "circle" ? "x^2 + y^2 = 25" : expression;
    plotFunction();
}


/* =========================================
   ENGINEERING LAB COACH
========================================= */

const labExperiments = {
    ohm: {
        title: "Ohm’s law · Resistance",
        xLabel: "Current (A)", yLabel: "Voltage (V)",
        graph: "Voltage V versus current I", slopeName: "Resistance", slopeSymbol: "R", slopeUnit: "Ω",
        explanation: "Ohm’s law says V = IR. The slope of the voltage-current graph is the resistance.",
        result: (slope, slopeError) => ({ value: slope, uncertainty: slopeError, unit: "Ω", interpretation: `Resistance R = ${slope.toPrecision(5)} Ω. This is the slope of the best-fit V–I line.` }),
        sample: [[0.1, 1.03], [0.2, 1.99], [0.3, 3.05], [0.4, 3.98], [0.5, 5.01]]
    },
    pendulum: {
        title: "Simple pendulum · Gravity",
        xLabel: "Length L (m)", yLabel: "Period T (s)",
        graph: "Period squared T² versus length L", slopeName: "Gravity", slopeSymbol: "g", slopeUnit: "m/s²",
        explanation: "For a simple pendulum, T² = (4π²/g)L. The slope of T² versus L is 4π²/g.",
        transform: row => [row[0], row[1] ** 2],
        result: (slope, slopeError) => {
            const value = 4 * Math.PI ** 2 / slope;
            return { value, uncertainty: value * slopeError / Math.abs(slope), unit: "m/s²", interpretation: `Estimated gravitational acceleration g = 4π² / slope = ${value.toPrecision(5)} m/s².` };
        },
        sample: [[0.2, 0.90], [0.3, 1.10], [0.4, 1.27], [0.5, 1.42], [0.6, 1.55]]
    },
    hooke: {
        title: "Hooke’s law · Spring constant",
        xLabel: "Extension x (m)", yLabel: "Force F (N)",
        graph: "Force F versus extension x", slopeName: "Spring constant", slopeSymbol: "k", slopeUnit: "N/m",
        explanation: "Hooke’s law says F = kx. The slope of the force-extension graph is the spring constant.",
        sample: [[0.01, 0.49], [0.02, 0.98], [0.03, 1.47], [0.04, 1.96], [0.05, 2.45]]
    }
};

let latestLabAnalysis = null;

function initializeLabCoach() {
    setLabExperiment();
    document.getElementById("labRows")?.addEventListener("input", invalidateLabResult);
    window.addEventListener("resize", () => requestAnimationFrame(drawLabChart));
}

function invalidateLabResult() {
    if (!latestLabAnalysis) return;
    latestLabAnalysis = null;
    document.getElementById("labReportButton").classList.add("hidden");
    document.getElementById("saveLabRunButton").classList.add("hidden");
    const result = document.getElementById("labResult");
    result.className = "lab-result empty-lab-result";
    result.textContent = "Readings changed. Analyze the experiment again to refresh the result.";
    drawLabChart();
}

function setLabExperiment() {
    const key = document.getElementById("labExperiment")?.value || "ohm";
    const experiment = labExperiments[key];
    if (!experiment) return;
    document.getElementById("labXHeading").textContent = experiment.xLabel;
    document.getElementById("labYHeading").textContent = key === "pendulum" ? "Period T (s)" : experiment.yLabel;
    document.getElementById("labGraphCaption").textContent = experiment.graph;
    document.getElementById("labGuide").innerHTML = `<strong>${experiment.title}</strong><p>${experiment.explanation}</p><span>Enter at least 3 measurement pairs. The trend line uses least-squares regression.</span>`;
    document.getElementById("labResult").className = "lab-result empty-lab-result";
    document.getElementById("labResult").textContent = "Your result and interpretation will appear here.";
    document.getElementById("labReportButton").classList.add("hidden");
    document.getElementById("saveLabRunButton").classList.add("hidden");
    latestLabAnalysis = null;
    renderLabRows();
}

function readLabNotebook() {
    try { return JSON.parse(localStorage.getItem("formulaLabNotebook") || "[]"); }
    catch { return []; }
}

function renderLabNotebook() {
    const container = document.getElementById("labNotebook");
    if (!container) return;
    const runs = readLabNotebook().sort((a, b) => b.id - a.id);
    if (!runs.length) {
        container.innerHTML = '<div class="notebook-empty">No saved experiments yet. Analyze a result and choose <strong>Save to Lab Notebook</strong>.</div>';
        return;
    }
    container.innerHTML = runs.map(run => `<article class="notebook-run"><div class="notebook-run-copy"><strong>${run.title}</strong><span>${new Date(run.id).toLocaleString()}</span><p>${run.resultValue} ${run.unit} · R² ${Number(run.r2).toFixed(3)} · ${run.readings.length} readings</p></div><div class="notebook-actions"><button class="secondary-btn" type="button" onclick="openSavedLab(${run.id})">Reopen</button><button class="notebook-delete" type="button" aria-label="Delete saved run" onclick="deleteSavedLab(${run.id})">×</button></div></article>`).join("");
}

function saveLabRun() {
    if (!latestLabAnalysis) return;
    const { key, experiment, rawReadings, fit, result } = latestLabAnalysis;
    const runs = readLabNotebook();
    runs.push({ id: Date.now(), key, title: experiment.title, readings: rawReadings, resultValue: Number(result.value.toPrecision(6)), uncertainty: Number.isFinite(result.uncertainty) ? Number(result.uncertainty.toPrecision(4)) : null, unit: result.unit, r2: fit.r2 });
    try {
        localStorage.setItem("formulaLabNotebook", JSON.stringify(runs.slice(-20)));
        renderLabNotebook();
        showToast("Experiment saved to your Lab Notebook.");
    } catch {
        showToast("Could not save this run. Check available browser storage.");
    }
}

function openSavedLab(id) {
    const run = readLabNotebook().find(item => item.id === id);
    if (!run) return;
    showSection("labcoach");
    document.getElementById("labExperiment").value = run.key;
    setLabExperiment();
    renderLabRows(run.readings);
    analyzeLab();
}

function deleteSavedLab(id) {
    const runs = readLabNotebook().filter(item => item.id !== id);
    try { localStorage.setItem("formulaLabNotebook", JSON.stringify(runs)); }
    catch { }
    renderLabNotebook();
}

function renderLabRows(readings = [[], [], []]) {
    const body = document.getElementById("labRows");
    if (!body) return;
    body.innerHTML = "";
    readings.forEach(values => addLabRow(values));
    invalidateLabResult();
}

function addLabRow(values = []) {
    const row = document.createElement("tr");
    const experimentKey = document.getElementById("labExperiment").value;
    const labels = experimentKey === "pendulum"
        ? ["Length in metres", "Period in seconds"]
        : experimentKey === "hooke" ? ["Extension in metres", "Force in newtons"] : ["Current in amperes", "Voltage in volts"];
    row.innerHTML = `<td><input class="lab-value-x" type="number" step="any" inputmode="decimal" aria-label="${labels[0]}" placeholder="x value" value="${values[0] ?? ""}"></td><td><input class="lab-value-y" type="number" step="any" inputmode="decimal" aria-label="${labels[1]}" placeholder="y value" value="${values[1] ?? ""}"></td><td><button class="lab-remove-row" type="button" aria-label="Remove reading" onclick="this.closest('tr').remove()">×</button></td>`;
    document.getElementById("labRows").appendChild(row);
    invalidateLabResult();
}

function loadLabSample() {
    const experiment = labExperiments[document.getElementById("labExperiment").value];
    renderLabRows(experiment.sample);
    showToast("Sample readings loaded. Analyze them or edit the values.");
}

function importLabCsv() {
    const text = document.getElementById("labCsv").value.trim();
    const parsed = text.split(/\r?\n/).map(line => line.trim()).filter(Boolean).map(line =>
        line.split(/[,;\t]/).slice(0, 2).map(value => value.trim())
    ).filter(pair => pair.length === 2 && pair.every(value => value !== "" && Number.isFinite(Number(value))))
        .map(pair => pair.map(Number));
    if (parsed.length < 3) {
        showToast("Paste at least 3 rows with two numeric columns (x, y).");
        return;
    }
    renderLabRows(parsed);
    showToast(`${parsed.length} readings loaded.`);
}

function collectLabReadings() {
    const readings = [];
    for (const row of document.querySelectorAll("#labRows tr")) {
        const xText = row.querySelector(".lab-value-x").value.trim();
        const yText = row.querySelector(".lab-value-y").value.trim();
        if (!xText && !yText) continue;
        const x = Number(xText), y = Number(yText);
        if (!xText || !yText || !Number.isFinite(x) || !Number.isFinite(y)) {
            showToast("Complete both values in every reading, or clear the whole row.");
            return null;
        }
        readings.push([x, y]);
    }
    if (readings.length < 3) {
        showToast("Enter at least 3 complete readings to fit a reliable trend line.");
        return null;
    }
    return readings;
}

function fitLabLine(points) {
    const n = points.length;
    const meanX = points.reduce((sum, point) => sum + point[0], 0) / n;
    const meanY = points.reduce((sum, point) => sum + point[1], 0) / n;
    const sxx = points.reduce((sum, point) => sum + (point[0] - meanX) ** 2, 0);
    if (sxx === 0) throw new Error("The x readings must not all be identical.");
    const slope = points.reduce((sum, point) => sum + (point[0] - meanX) * (point[1] - meanY), 0) / sxx;
    const intercept = meanY - slope * meanX;
    const residuals = points.map(([x, y]) => y - (slope * x + intercept));
    const sse = residuals.reduce((sum, residual) => sum + residual ** 2, 0);
    const sst = points.reduce((sum, point) => sum + (point[1] - meanY) ** 2, 0);
    const r2 = sst === 0 ? (sse === 0 ? 1 : 0) : 1 - sse / sst;
    const residualError = Math.sqrt(sse / (n - 2));
    const slopeError = residualError / Math.sqrt(sxx);
    const outliers = residuals.map((residual, index) => ({ index: index + 1, residual }))
        .filter(item => residualError > 0 && Math.abs(item.residual) > 2.5 * residualError);
    return { slope, intercept, r2, slopeError, residualError, outliers };
}

function analyzeLab() {
    const key = document.getElementById("labExperiment").value;
    const experiment = labExperiments[key];
    const rawReadings = collectLabReadings();
    if (!rawReadings) return;
    const points = rawReadings.map(row => experiment.transform ? experiment.transform(row) : row);
    let fit;
    try { fit = fitLabLine(points); }
    catch (error) { showToast(error.message); return; }
    if (!Number.isFinite(fit.slope) || !Number.isFinite(fit.r2) || fit.slope <= 0) {
        showToast("The fitted slope is not positive. Check your readings and units.");
        return;
    }
    const result = experiment.result ? experiment.result(fit.slope, fit.slopeError) : {
        value: fit.slope, uncertainty: fit.slopeError, unit: experiment.slopeUnit,
        interpretation: `${experiment.slopeName} ${experiment.slopeSymbol} is the slope of the fitted line.`
    };
    const warnings = [];
    if (fit.r2 < 0.95) warnings.push("The readings do not follow a strong straight-line trend (R² is below 0.95). Recheck the setup, range, and units.");
    if (fit.outliers.length) warnings.push(`Reading${fit.outliers.length > 1 ? "s" : ""} ${fit.outliers.map(item => item.index).join(", ")} ${fit.outliers.length > 1 ? "have" : "has"} an unusually large residual and may be worth checking. FormulaX has not removed any data.`);
    const uncertaintyText = Number.isFinite(result.uncertainty) ? ` ± ${result.uncertainty.toPrecision(3)} ${result.unit}` : "";
    const resultElement = document.getElementById("labResult");
    resultElement.className = "lab-result analyzed-lab-result";
    resultElement.innerHTML = `<div class="lab-answer-label">Estimated ${experiment.slopeName}</div><div class="lab-answer">${result.value.toPrecision(5)}${uncertaintyText}</div><p>${result.interpretation}</p><div class="lab-metrics"><span><strong>R²</strong> ${fit.r2.toFixed(4)}</span><span><strong>Readings</strong> ${rawReadings.length}</span><span><strong>Fit</strong> y = ${fit.slope.toPrecision(4)}x ${fit.intercept < 0 ? "−" : "+"} ${Math.abs(fit.intercept).toPrecision(4)}</span></div>${warnings.map(warning => `<p class="lab-warning">${warning}</p>`).join("")}<p class="lab-method">Uncertainty is the standard error from the fitted line. It describes fit precision and does not include instrument calibration uncertainty.</p>`;
    document.getElementById("labReportButton").classList.remove("hidden");
    document.getElementById("saveLabRunButton").classList.remove("hidden");
    latestLabAnalysis = { key, experiment, rawReadings, points, fit, result, warnings };
    drawLabChart();
}

function drawLabChart() {
    const canvas = document.getElementById("labChart");
    if (!canvas || !canvas.clientWidth) return;
    const context = canvas.getContext("2d");
    const ratio = window.devicePixelRatio || 1;
    const width = canvas.clientWidth, height = 320;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, width, height);
    context.fillStyle = "#fbfdff";
    context.fillRect(0, 0, width, height);
    const padding = { left: 62, right: 20, top: 18, bottom: 48 };
    const chartW = width - padding.left - padding.right, chartH = height - padding.top - padding.bottom;
    const analysis = latestLabAnalysis;
    const points = analysis?.points || [];
    const xs = points.map(point => point[0]);
    const ys = points.map(point => point[1]);
    if (analysis) {
        xs.push(Math.min(...analysis.points.map(point => point[0])), Math.max(...analysis.points.map(point => point[0])));
        ys.push(...analysis.points.map(([x]) => analysis.fit.slope * x + analysis.fit.intercept));
    }
    let minX = xs.length ? Math.min(...xs) : 0, maxX = xs.length ? Math.max(...xs) : 1;
    let minY = ys.length ? Math.min(...ys) : 0, maxY = ys.length ? Math.max(...ys) : 1;
    if (minX === maxX) { minX -= 1; maxX += 1; }
    if (minY === maxY) { minY -= 1; maxY += 1; }
    const extraX = (maxX - minX) * .08, extraY = (maxY - minY) * .12;
    minX -= extraX; maxX += extraX; minY -= extraY; maxY += extraY;
    const px = value => padding.left + (value - minX) / (maxX - minX) * chartW;
    const py = value => padding.top + chartH - (value - minY) / (maxY - minY) * chartH;
    context.strokeStyle = "#dce5f2"; context.lineWidth = 1; context.fillStyle = "#64748b"; context.font = "11px sans-serif";
    for (let i = 0; i <= 4; i++) {
        const x = padding.left + chartW * i / 4, y = padding.top + chartH * i / 4;
        context.beginPath(); context.moveTo(x, padding.top); context.lineTo(x, padding.top + chartH); context.stroke();
        context.beginPath(); context.moveTo(padding.left, y); context.lineTo(padding.left + chartW, y); context.stroke();
        const xVal = minX + (maxX - minX) * i / 4, yVal = maxY - (maxY - minY) * i / 4;
        context.textAlign = "center"; context.fillText(xVal.toPrecision(3), x, height - 26);
        context.textAlign = "right"; context.fillText(yVal.toPrecision(3), padding.left - 9, y + 4);
    }
    context.strokeStyle = "#475569"; context.lineWidth = 1.4;
    context.beginPath(); context.moveTo(padding.left, padding.top); context.lineTo(padding.left, padding.top + chartH); context.lineTo(padding.left + chartW, padding.top + chartH); context.stroke();
    if (analysis) {
        const a = analysis.fit;
        context.strokeStyle = "#b91c1c"; context.lineWidth = 3;
        context.beginPath(); context.moveTo(px(minX), py(a.slope * minX + a.intercept)); context.lineTo(px(maxX), py(a.slope * maxX + a.intercept)); context.stroke();
        context.fillStyle = "#15803d";
        analysis.points.forEach(([x, y]) => { context.beginPath(); context.arc(px(x), py(y), 5, 0, 2 * Math.PI); context.fill(); });
    }
    context.fillStyle = "#334155"; context.font = "12px sans-serif";
    context.textAlign = "center"; context.fillText(analysis?.key === "pendulum" ? "Length L (m)" : labExperiments[document.getElementById("labExperiment").value].xLabel, padding.left + chartW / 2, height - 5);
    context.save(); context.translate(15, padding.top + chartH / 2); context.rotate(-Math.PI / 2); context.fillText(analysis?.key === "pendulum" ? "Period squared T² (s²)" : labExperiments[document.getElementById("labExperiment").value].yLabel, 0, 0); context.restore();
}

function downloadLabReport() {
    if (!latestLabAnalysis) return;
    const { experiment, rawReadings, fit, result, warnings } = latestLabAnalysis;
    const rows = rawReadings.map((row, index) => `<tr><td>${index + 1}</td><td>${row[0]}</td><td>${row[1]}</td></tr>`).join("");
    const report = `<!doctype html><html><head><meta charset="utf-8"><title>FormulaX Lab Report</title><style>body{font:16px Arial,sans-serif;max-width:850px;margin:40px auto;color:#172033;line-height:1.55}h1{color:#991b1b}table{border-collapse:collapse;width:100%}th,td{border:1px solid #efd9c5;padding:9px;text-align:left}th{background:#fff0c2}.result{padding:18px;background:#ecfdf5;border-radius:12px}small{color:#64748b}</style></head><body><h1>FormulaX · Engineering Lab Report</h1><h2>${experiment.title}</h2><p>${experiment.explanation}</p><p><strong>Model:</strong> y = ${fit.slope.toPrecision(5)}x + ${fit.intercept.toPrecision(5)}<br><strong>R²:</strong> ${fit.r2.toFixed(4)}<br><strong>Number of readings:</strong> ${rawReadings.length}</p><div class="result"><strong>Estimated ${experiment.slopeName}: ${result.value.toPrecision(5)}${Number.isFinite(result.uncertainty) ? ` ± ${result.uncertainty.toPrecision(3)}` : ""} ${result.unit}</strong><br>${result.interpretation}</div>${warnings.length ? `<h3>Readings to review</h3><ul>${warnings.map(warning => `<li>${warning}</li>`).join("")}</ul>` : ""}<h3>Recorded measurements (SI units)</h3><table><thead><tr><th>#</th><th>${experiment.xLabel}</th><th>${experiment.yLabel}</th></tr></thead><tbody>${rows}</tbody></table><p><small>Uncertainty is the standard error of the fitted slope (propagated for the pendulum calculation). It does not include instrument calibration uncertainty. FormulaX did not remove any readings.</small></p></body></html>`;
    const url = URL.createObjectURL(new Blob([report], { type: "text/html" }));
    const link = document.createElement("a"); link.href = url; link.download = "FormulaX-Lab-Report.html"; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/* =========================================
   MATRIX
========================================= */

function initializeMatrix() {

    const container =
        document.getElementById(
            "matrixInputs"
        );

    if (!container) return;


    let html = "";


    for (let i = 0; i < 9; i++) {

        html += `

            <input
                type="number"
                id="m${i}"
                value="${i % 4 === 0 ? 1 : 0}"
                step="any"
            >

        `;
    }


    container.innerHTML = html;
}


function getMatrix() {

    const matrix = [];

    for (let i = 0; i < 3; i++) {

        const row = [];

        for (let j = 0; j < 3; j++) {

            const value =
                parseFloat(
                    document
                        .getElementById(
                            `m${i * 3 + j}`
                        )
                        .value
                );

            row.push(
                isNaN(value)
                    ? 0
                    : value
            );
        }

        matrix.push(row);
    }

    return matrix;
}


function determinant3x3(m) {

    return (

        m[0][0] *
        (
            m[1][1] * m[2][2] -
            m[1][2] * m[2][1]
        )

        -

        m[0][1] *
        (
            m[1][0] * m[2][2] -
            m[1][2] * m[2][0]
        )

        +

        m[0][2] *
        (
            m[1][0] * m[2][1] -
            m[1][1] * m[2][0]
        )

    );
}


function calculateMatrix() {

    const matrix =
        getMatrix();

    const determinant =
        determinant3x3(matrix);


    document
        .getElementById("matrixResult")
        .innerHTML = `

            <strong>Matrix:</strong>

            <div style="margin:10px 0">

                [
                ${matrix[0].join(" &nbsp; ")}
                ]

                <br>

                [
                ${matrix[1].join(" &nbsp; ")}
                ]

                <br>

                [
                ${matrix[2].join(" &nbsp; ")}
                ]

            </div>

            <strong>
                Determinant:
            </strong>

            <span style="
                color:#6c5ce7;
                font-size:22px;
                font-weight:800;
            ">
                ${determinant.toFixed(4)}
            </span>

        `;
}


function clearMatrix() {

    for (let i = 0; i < 9; i++) {

        document
            .getElementById(`m${i}`)
            .value = "";

    }

    document
        .getElementById("matrixResult")
        .textContent =
        "Enter matrix values and calculate.";
}


/* =========================================
   POLYNOMIAL DERIVATIVE
========================================= */

function calculateDerivative() {

    let polynomial =
        document
            .getElementById("polynomial")
            .value
            .trim();


    if (!polynomial) {

        showToast(
            "Enter a polynomial first."
        );

        return;
    }


    try {

        const derivative =
            differentiatePolynomial(
                polynomial
            );


        const result =
            document.getElementById(
                "derivativeResult"
            );

        result.classList.remove(
            "hidden"
        );


        result.innerHTML = `

            <strong>
                Derivative
            </strong>

            <span class="result-number">
                ${derivative}
            </span>

        `;

    } catch (error) {

        showToast(
            "Please enter a valid polynomial."
        );
    }
}


function differentiatePolynomial(expression) {

    expression =
        expression
            .replace(/\s+/g, "")
            .replace(/−/g, "-");


    if (
        !/^[0-9xX^+*\-./]+$/.test(expression)
    ) {

        throw new Error(
            "Invalid polynomial"
        );
    }


    expression =
        expression.replace(
            /([+-])/g,
            "|$1"
        );


    if (expression.startsWith("|")) {

        expression =
            expression.substring(1);
    }


    const terms =
        expression
            .split("|")
            .filter(Boolean);


    const derivativeTerms = [];


    for (let term of terms) {

        let sign = "";


        if (
            term.startsWith("+") ||
            term.startsWith("-")
        ) {

            sign = term.charAt(0);

            term = term.substring(1);
        }


        if (!term) continue;


        let coefficient = 0;

        let power = 0;


        if (/x/i.test(term)) {

            const coefficientPart =
                term
                    .split(/x/i)[0];


            if (
                coefficientPart === "" ||
                coefficientPart === "*"
            ) {

                coefficient = 1;

            } else {

                coefficient =
                    parseFloat(
                        coefficientPart
                            .replace("*", "")
                    );
            }


            const powerMatch =
                term.match(
                    /\^([0-9.]+)/
                );


            power =
                powerMatch
                    ? parseFloat(powerMatch[1])
                    : 1;

        } else {

            continue;
        }


        const newCoefficient =
            coefficient * power;

        const newPower =
            power - 1;


        if (newCoefficient === 0) {

            continue;
        }


        let output;


        if (newPower === 0) {

            output =
                `${Math.abs(newCoefficient)}`;

        } else if (newPower === 1) {

            output =
                `${Math.abs(newCoefficient) === 1
                    ? ""
                    : Math.abs(newCoefficient)}x`;

        } else {

            output =
                `${Math.abs(newCoefficient) === 1
                    ? ""
                    : Math.abs(newCoefficient)}x^${newPower}`;

        }


        if (derivativeTerms.length === 0) {

            derivativeTerms.push(
                sign === "-"
                    ? "-" + output
                    : output
            );

        } else {

            derivativeTerms.push(
                sign === "-"
                    ? "- " + output
                    : "+ " + output
            );
        }

    }


    return derivativeTerms.join(" ") || "0";
}


/* =========================================
   PDF EXPORT
========================================= */

async function exportPDF() {

    if (savedFormulas.length === 0) {

        showToast(
            "Save at least one formula first."
        );

        return;
    }


    const {
        jsPDF
    } = window.jspdf;


    const pdf =
        new jsPDF();


    pdf.setFontSize(22);

    pdf.setTextColor(
        108,
        92,
        231
    );

    pdf.text(
        "FormulaX",
        20,
        20
    );


    pdf.setFontSize(12);

    pdf.setTextColor(
        80,
        80,
        95
    );

    pdf.text(
        "Engineering Mathematics Cheat Sheet",
        20,
        29
    );


    let y = 45;


    const saved =
        formulas.filter(
            formula =>
                savedFormulas.includes(
                    formula.id
                )
        );


    saved.forEach(
        (formula, index) => {

            if (y > 260) {

                pdf.addPage();

                y = 20;
            }


            pdf.setFontSize(13);

            pdf.setTextColor(
                40,
                40,
                50
            );

            pdf.text(
                `${index + 1}. ${formula.name}`,
                20,
                y
            );


            pdf.setFontSize(10);

            pdf.setTextColor(
                110,
                110,
                120
            );

            pdf.text(
                formula.category,
                20,
                y + 7
            );


            /*
             * Simple LaTeX text conversion
             * for printable frontend PDF.
             */
            const readable =
                latexToReadable(
                    formula.latex
                );


            pdf.setFontSize(12);

            pdf.setTextColor(
                90,
                70,
                180
            );

            pdf.text(
                readable,
                20,
                y + 16
            );


            pdf.setFontSize(9);

            pdf.setTextColor(
                100,
                100,
                110
            );

            pdf.text(
                formula.description,
                20,
                y + 24
            );


            y += 38;

        }
    );


    pdf.save(
        "FormulaX-Cheat-Sheet.pdf"
    );


    showToast(
        "PDF downloaded!"
    );
}


function latexToReadable(latex) {

    return latex

        .replace(/\\frac/g, "/")

        .replace(/[{}]/g, "")

        .replace(/\\sqrt/g, "sqrt")

        .replace(/\\pm/g, "±")

        .replace(/\\pi/g, "π")

        .replace(/\\Delta/g, "Δ")

        .replace(/\\/g, "");
}


/* =========================================
   FORMULA IMAGE SCANNER
========================================= */

let selectedFormulaImage = null;
let formulaOcrWorker = null;
let formulaImageUrl = null;

function previewFormulaImage(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
        showToast("Choose an image file such as JPG, PNG, or WEBP.");
        return;
    }
    if (file.size > 15 * 1024 * 1024) {
        showToast("Choose an image smaller than 15 MB for faster scanning.");
        event.target.value = "";
        return;
    }
    selectedFormulaImage = file;
    if (formulaImageUrl) URL.revokeObjectURL(formulaImageUrl);
    formulaImageUrl = URL.createObjectURL(file);
    const preview = document.getElementById("formulaPreview");
    preview.src = formulaImageUrl;
    preview.classList.remove("hidden");
    document.getElementById("scanFormulaButton").disabled = false;
    document.getElementById("scannerStatus").textContent = `${file.name} is ready. Scan it, then review the recognized text.`;
    document.getElementById("scannedFormula").value = "";
}

async function scanFormulaImage() {
    if (!selectedFormulaImage) {
        showToast("Choose a formula image first.");
        return;
    }
    if (!window.Tesseract) {
        document.getElementById("scannerStatus").textContent = "OCR could not load. Check your internet connection and refresh the page.";
        showToast("Formula scanning needs the OCR library to load from the internet.");
        return;
    }
    const button = document.getElementById("scanFormulaButton");
    const status = document.getElementById("scannerStatus");
    button.disabled = true;
    button.textContent = "Preparing scanner…";
    try {
        if (!formulaOcrWorker) {
            formulaOcrWorker = await Tesseract.createWorker("eng", 1, {
                logger: message => {
                    if (message.status === "recognizing text") status.textContent = `Reading the image… ${Math.round((message.progress || 0) * 100)}%`;
                    else if (message.status) status.textContent = `Preparing OCR: ${message.status}…`;
                }
            });
        }
        const { data } = await formulaOcrWorker.recognize(selectedFormulaImage);
        const recognized = (data.text || "").trim()
            .replace(/[×·]/g, "*").replace(/[÷]/g, "/").replace(/[−–]/g, "-")
            .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, character => `^${"⁰¹²³⁴⁵⁶⁷⁸⁹".indexOf(character)}`);
        document.getElementById("scannedFormula").value = recognized;
        status.textContent = recognized ? "Scan complete. OCR can misread superscripts and symbols—please review the text before using it." : "No text found. Try a sharper, brighter image with the formula filling more of the photo.";
    } catch (error) {
        status.textContent = "Could not read this image. Try a sharper photo with higher contrast.";
        showToast("Formula scan failed. Check your connection and try a clearer image.");
    } finally {
        button.disabled = false;
        button.textContent = "Scan formula";
    }
}

function searchScannedFormula() {
    const recognized = document.getElementById("scannedFormula").value.trim();
    if (!recognized) { showToast("Scan or type a formula first."); return; }
    const normalized = recognized.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (normalized.length < 2) { showToast("Add a little more recognized text so the vault can search it."); return; }
    if (normalized.length < 2) { showToast("Add a little more recognized text so the vault can search it."); return; }
    const match = formulas.find(formula => {
        const name = formula.name.toLowerCase().replace(/[^a-z0-9]/g, "");
        const equation = formula.latex.toLowerCase().replace(/[^a-z0-9]/g, "");
        return (name && (normalized.includes(name) || name.includes(normalized))) ||
            (equation.length > 2 && (normalized.includes(equation) || equation.includes(normalized)));
    });
    const search = document.getElementById("formulaSearch");
    search.value = match ? match.name : recognized;
    currentCategory = "All";
    document.querySelectorAll(".category").forEach(button => button.classList.toggle("active", button.textContent.trim() === "All"));
    renderFormulas();
    showSection("formulas");
    if (!match && !document.querySelector("#formulaGrid .formula-card")) {
        document.getElementById("formulaSearch").focus();
        showToast("No exact formula-name match. Edit the OCR text or search by topic.");
    }
}

function plotScannedFormula() {
    const recognized = document.getElementById("scannedFormula").value.trim();
    if (!recognized) { showToast("Scan or type a function first."); return; }
    const expression = recognized.replace(/^y\s*=\s*/i, "");
    document.getElementById("functionInput").value = expression;
    showSection("plotter");
    plotFunction();
}

/* =========================================
   RANDOM FORMULA CHALLENGE
========================================= */

let currentChallenge = null;
let challengeSolvedCount = Number(localStorage.getItem("formulaChallengeSolved") || 0);

const challengeTemplates = [
    { formula: "Ohm's Law", target: "V", values: () => ({ I: randomBetween(.2, 2), R: randomBetween(8, 75) }) },
    { formula: "Newton's Second Law", target: "F", values: () => ({ m: randomBetween(1, 18), a: randomBetween(.5, 12) }) },
    { formula: "Kinetic Energy", target: "KE", values: () => ({ m: randomBetween(.5, 12), v: randomBetween(1, 15) }) },
    { formula: "Potential Energy", target: "PE", values: () => ({ m: randomBetween(.5, 8), g: 9.81, h: randomBetween(.5, 18) }) },
    { formula: "Momentum", target: "p", values: () => ({ m: randomBetween(.5, 18), v: randomBetween(.5, 15) }) },
    { formula: "Speed", target: "v", values: () => ({ d: randomBetween(15, 500), t: randomBetween(2, 90) }) },
    { formula: "Density", target: "rho", values: () => ({ m: randomBetween(.1, 20), V: randomBetween(.01, 2) }) },
    { formula: "Pressure", target: "P", values: () => ({ F: randomBetween(10, 900), A: randomBetween(.05, 8) }) },
    { formula: "Work", target: "W", values: () => ({ F: randomBetween(5, 180), d: randomBetween(.2, 35) }) },
    { formula: "Heat Transfer", target: "Q", values: () => ({ m: randomBetween(.1, 4), c: randomBetween(300, 4200), dT: randomBetween(2, 60) }) },
    { formula: "Efficiency", target: "eta", values: () => { const Win = randomBetween(100, 2000); return { Wout: randomBetween(20, Win * .9), Win }; } },
    { formula: "Resonant Frequency", target: "f", values: () => ({ L: randomBetween(.001, .03), C: randomBetween(2, 20) * 1e-6 }) },
    { formula: "Circle Area", target: "A", values: () => ({ r: randomBetween(.2, 12) }) },
    { formula: "Circle Circumference", target: "C", values: () => ({ r: randomBetween(.2, 12) }) },
    { formula: "Rectangle Area", target: "A", values: () => ({ l: randomBetween(.5, 30), w: randomBetween(.5, 20) }) },
    { formula: "Pythagorean Theorem", target: "c", values: () => ({ a: randomBetween(3, 20), b: randomBetween(3, 20) }) }
];

function randomBetween(min, max) { return min + Math.random() * (max - min); }

function createRandomChallenge() {
    const template = challengeTemplates[Math.floor(Math.random() * challengeTemplates.length)];
    const formula = interactiveFormulas.find(item => item.name === template.formula);
    const values = template.values();
    const answer = formula.solve[template.target](values);
    currentChallenge = { formula, target: template.target, values, answer, solved: false };
    const targetLabel = formula.vars[template.target];
    document.getElementById("challengeQuestion").innerHTML = `<div><span class="formula-category">${formula.category}</span><h4>${formula.name}</h4><p>Use the formula below to calculate <strong>${targetLabel}</strong>.</p><div class="challenge-equation">$$${formula.latex}$$</div></div>`;
    const givenValues = Object.entries(values).map(([key, value]) => `<span><strong>${formula.vars[key]}</strong><br>${Number(value.toPrecision(4)).toLocaleString()}</span>`).join("");
    document.getElementById("challengeKnownValues").innerHTML = givenValues;
    document.getElementById("challengeAnswer").value = "";
    document.getElementById("challengeFeedback").textContent = "";
    document.getElementById("challengeAnswer").focus();
    document.getElementById("challengeStreak").textContent = `🏁 ${challengeSolvedCount} solved`;
    if (window.MathJax?.typesetPromise) MathJax.typesetPromise([document.getElementById("challengeQuestion")]);
}

function checkRandomChallenge() {
    if (!currentChallenge) { showToast("Create a new challenge first."); return; }
    if (currentChallenge.solved) { showToast("You solved this one. Generate a new challenge!"); return; }
    const input = document.getElementById("challengeAnswer");
    if (!input.value.trim() || !Number.isFinite(Number(input.value))) { input.focus(); showToast("Enter a numeric answer first."); return; }
    const actual = Number(input.value);
    const tolerance = Math.max(Math.abs(currentChallenge.answer) * .01, .005);
    const correct = Math.abs(actual - currentChallenge.answer) <= tolerance;
    const feedback = document.getElementById("challengeFeedback");
    if (correct) {
        currentChallenge.solved = true;
        challengeSolvedCount += 1;
        try { localStorage.setItem("formulaChallengeSolved", String(challengeSolvedCount)); } catch { }
        feedback.innerHTML = `<div class="challenge-correct"><strong>Correct! Great work.</strong> The expected value is ${currentChallenge.answer.toPrecision(5)} ${currentChallenge.formula.vars[currentChallenge.target].match(/\(([^)]+)\)/)?.[1] || ""}. Use “Show working” to see the substitution.</div>`;
        document.getElementById("challengeStreak").textContent = `🏁 ${challengeSolvedCount} solved`;
    } else {
        feedback.innerHTML = `<div class="challenge-try-again"><strong>Not quite yet.</strong> Check the formula and units, then try again—or reveal the working.</div>`;
    }
}

function showChallengeHint() {
    if (!currentChallenge) { showToast("Create a challenge first."); return; }
    const { formula, target, values, answer } = currentChallenge;
    const substitutions = Object.entries(values).map(([key, value]) => `${key} = ${Number(value.toPrecision(4))}`).join(", ");
    document.getElementById("challengeFeedback").innerHTML = `<div class="challenge-working"><strong>Worked answer</strong><p>${formula.description}</p><p>Known values: ${substitutions}</p><p><strong>${formula.vars[target]} = ${answer.toPrecision(6)} ${formula.vars[target].match(/\(([^)]+)\)/)?.[1] || ""}</strong></p></div>`;
}

/* =========================================
   FORMULAX HELPER CHAT
========================================= */

function toggleHelper() {
    const panel = document.getElementById("helperPanel");
    const open = panel.classList.toggle("hidden") === false;
    document.getElementById("helperLauncher").setAttribute("aria-expanded", String(open));
    if (open) document.getElementById("helperInput").focus();
}

function sendHelperMessage(event) {
    event.preventDefault();
    const input = document.getElementById("helperInput");
    const message = input.value.trim();
    if (!message) return;
    input.value = "";
    askHelper(message);
}

function askHelper(message) {
    appendHelperMessage(message, "user-message");
    const text = message.toLowerCase();
    let response = "I can help with the features in FormulaX. Try asking about the Lab Coach, formula scanner, graphing, equation solver, or practice challenges.";
    let action = null;
    if (/scan|photo|camera|image|picture/.test(text)) {
        response = "Open Formula Vault, choose a clear photo, and press Scan formula. OCR runs in your browser; review the recognized symbols because handwritten powers and fractions can be misread.";
        action = ["Open Formula Vault", "formulas"];
    } else if (/random|challenge|quiz|practice/.test(text)) {
        response = "Open Interactive Solver and generate a Random Formula Challenge. You’ll get values, enter the unknown, and can reveal the worked substitution.";
        action = ["Open the solver", "solver"];
    } else if (/lab|experiment|readings|notebook/.test(text)) {
        response = "In Lab Coach, select Ohm’s law, pendulum, or Hooke’s law. Enter at least three SI-unit readings, analyze the trend, then save the run to your local Lab Notebook.";
        action = ["Open Lab Coach", "labcoach"];
    } else if (/graph|plot|square|cube|circle/.test(text)) {
        response = "Open Function Plotter and enter expressions such as x^2, x^3, or sin(x). Use the example buttons for a parabola or circle.";
        action = ["Open Function Plotter", "plotter"];
    } else if (/unit|units|conversion/.test(text)) {
        response = "The Lab Coach expects SI values: A for current, V for voltage, m for length or extension, s for time or period, N for force, kg for mass, and Pa for pressure. Convert your readings before entering them.";
        action = ["Open Lab Coach", "labcoach"];
    } else if (/solve|solver|unknown|formula/.test(text)) {
        response = "Open Interactive Solver, choose a formula, select the unknown variable, and fill the other fields. For a quick test, try the Random Formula Challenge on that page.";
        action = ["Open Interactive Solver", "solver"];
    }
    appendHelperMessage(response, "bot-message", action);
}

function appendHelperMessage(text, className, action = null) {
    const container = document.getElementById("helperMessages");
    const message = document.createElement("div");
    message.className = `helper-message ${className}`;
    message.textContent = text;
    container.appendChild(message);
    if (action) {
        const button = document.createElement("button");
        button.className = "helper-action";
        button.textContent = action[0];
        button.addEventListener("click", () => { showSection(action[1]); toggleHelper(); });
        container.appendChild(button);
    }
    container.scrollTop = container.scrollHeight;
}

/* =========================================
   TOAST
========================================= */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 2800);
}
