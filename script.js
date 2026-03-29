const terminal = document.getElementById("terminalBody");
const clickSound = document.getElementById("clickSound");

// 🔑 typing control
let typingInterval = null;

function stopTyping(){
  if(typingInterval){
    clearInterval(typingInterval);
    typingInterval = null;
  }
}

function playClick(){
  if(clickSound){
    clickSound.currentTime = 0;
    clickSound.volume = 0.2;
    clickSound.play();
  }
}

function typeText(text, speed = 15, done) {
  stopTyping();

  terminal.textContent = "";
  terminal.style.whiteSpace = "pre-wrap";

  let i = 0;

  typingInterval = setInterval(() => {
    terminal.textContent += text[i] || "";
    i++;

    if (i >= text.length) {
      clearInterval(typingInterval);
      typingInterval = null;
      if (done) done();
    }
  }, speed);
}

// ===== INIT =====
typeText(
`[SYS] Initializing kernel...
[SYS] Loading terminal interface...
[OK ] Access granted

SELECT A LEVEL`
);

// ===== DATA =====
const DATA = {
  level1: `
SUBJECT PROFILE — LEVEL 1

Name: Froylan Fahlan Aditya
Alias: Liam Dunbar
Age: 19
Origin: Indonesia

Froylan Fahlan Aditya, known online as Liam Dunbar, is an 19-year-old from Indonesia.
He has a calm but introspective presence. He speaks Indonesian and English with a
preference for a UK accent, and he's currently learning German.

His heart is drawn to Austria and Germany places he dreams of living in someday,
hoping to find peace within himself and a sense of belonging he's been searching for.

A quiet soul carrying many storms inside.
Empathetic. Protective. Human.
`,

  level2a: `
PSYCHOLOGICAL RECORD — LEVEL 2

Social Anxiety
Depression
Intermittent Explosive Disorder
Complex PTSD
Autism Spectrum Disorder
Borderline Personality Traits
Executive Dysfunction
Dissociative Symptoms
Anxious Attachment
Limerence
Chronic Loneliness and Alienation
`,

  level2b: `
MUSIC ARCHIVE — LEVEL 2

Lost Boy — Ruth B.
Mirror — Lil Wayne ft. Bruno Mars
Iris — Goo Goo Dolls
Somewhere I Belong — Linkin Park
Unwell — Matchbox Twenty
Perfect — Simple Plan
Bye — Midnight Til Morning
`
};

// ===== PASSWORD GATE =====
function passwordGate() {
  stopTyping();

  terminal.innerHTML = "";
  terminal.style.whiteSpace = "pre-wrap";

  const lines = [
    "[ERR] ACCESS DENIED",
    "[LOG] Unauthorized attempt recorded",
    "",
    "Entering restricted command mode...",
    "",
    "To access request permission.",
    'Please type > "contacts"',
    ""
  ];

  let lineIndex = 0;

  function typeLine() {
    if (lineIndex >= lines.length) {
      showInput();
      return;
    }

    let text = lines[lineIndex];
    let charIndex = 0;

    const lineElement = document.createElement("div");

    if (text.startsWith("[ERR]")) {
      lineElement.style.color = "#ff2a2a";
      lineElement.style.textShadow = "0 0 8px #ff0000";
      lineElement.style.animation = "glitch 0.15s infinite";
    }

    terminal.appendChild(lineElement);

    const interval = setInterval(() => {
      lineElement.textContent += text[charIndex] || "";
      charIndex++;

      if (charIndex > text.length) {
        clearInterval(interval);
        lineIndex++;
        setTimeout(typeLine, 400);
      }
    }, 25);
  }

  function showInput() {
    const wrapper = document.createElement("div");
    wrapper.style.marginTop = "10px";

    const input = document.createElement("input");
    input.type = "text";
    input.style.background = "transparent";
    input.style.border = "none";
    input.style.borderBottom = "1px solid #f2e86d";
    input.style.color = "#f2e86d";
    input.style.fontFamily = "monospace";
    input.style.outline = "none";
    input.style.width = "200px";
    input.autofocus = true;

    const button = document.createElement("button");
    button.textContent = "ENTER";
    button.style.marginLeft = "10px";
    button.style.background = "transparent";
    button.style.border = "1px solid #f2e86d";
    button.style.color = "#f2e86d";
    button.style.cursor = "pointer";

    wrapper.appendChild(input);
    wrapper.appendChild(button);
    terminal.appendChild(wrapper);

    function check() {
      if (input.value.trim().toLowerCase() === "contacts") {
        window.location.href = "https://simplefroylan.space/contact-me";
      }
    }

    button.addEventListener("click", check);
    input.addEventListener("keydown", e => {
      if (e.key === "Enter") check();
    });
  }

  typeLine();
}

// ===== LEVEL 4 =====
function renderLevel4Document() {
  stopTyping();

  terminal.innerHTML = "";
  terminal.style.whiteSpace = "normal";

  fetch("updates/updates.json")
    .then(res => res.json())
    .then(data => {
      data.updates.forEach(update => {

        const block = document.createElement("div");

        block.style.borderTop = "1px solid #f2e86d";
        block.style.borderBottom = "1px solid #f2e86d";
        block.style.padding = "12px 0";
        block.style.marginBottom = "16px";

        block.innerHTML = `
          <div style="display:flex; align-items:center; gap:10px;">
            <img src="assets/profile.jpg"
                 style="width:40px;height:40px;border-radius:50%;
                        border:1px solid #f2e86d;">
            <div>
              <strong>${update.displayName}</strong>
              <span style="opacity:.75;">
                ${update.username} · ${update.date}
              </span>
            </div>
          </div>

          <div style="margin-top:10px;">
            ${update.text.replace(/\n/g, "<br>")}
          </div>
        `;

        terminal.appendChild(block);
      });
    })
    .catch(() => {
      terminal.textContent = "FAILED TO LOAD updates.json";
    });
}

// ===== LEVEL 5 =====
function renderLevel5Fragments(){
  stopTyping();

  terminal.innerHTML = "";
  terminal.style.whiteSpace = "normal";

  if (typeof FRAGMENTS === "undefined") {
    terminal.textContent = "ERROR: fragments.js not loaded";
    return;
  }

  const grid = document.createElement("div");
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(90px, 1fr))";
  grid.style.gap = "14px";

  FRAGMENTS.forEach(f => {

    const card = document.createElement("div");
    card.style.border = "1px solid #ff0000";
    card.style.padding = "6px";
    card.style.cursor = "pointer";
    card.style.textAlign = "center";

    // ✅ FIXED: always open in new tab
    card.onclick = () => {
      window.open(f.link, "_blank", "noopener,noreferrer");
    };

    card.innerHTML = `
      <img src="${f.image}" style="
        width:100%;
        height:80px;
        object-fit:cover;
        border:1px solid #ff0000;
        margin-bottom:6px;
      ">
      <div style="font-size:13px; font-weight:bold;">${f.name}</div>
      <div style="font-size:11px; opacity:.7;">${f.username}</div>
    `;

    grid.appendChild(card);
  });

  terminal.appendChild(grid);
}

// ===== CLICK HANDLER =====
document.querySelectorAll(".entry").forEach(entry => {
  entry.onclick = () => {

    playClick();

    const view = entry.dataset.view;

    if (view === "level3") return passwordGate();
    if (view === "level4") return renderLevel4Document();
    if (view === "level5") return renderLevel5Fragments();

    if (DATA[view]) {
      typeText(`[SYS] Loading data...\n\n${DATA[view]}`);
    } else {
      typeText("[ERR] DATA NOT FOUND");
    }
  };
});
