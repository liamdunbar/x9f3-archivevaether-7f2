const terminal = document.getElementById("terminalBody");

/* TYPEWRITER */
function typeText(text, speed = 15, done) {
  terminal.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    terminal.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (done) done();
    }
  }, speed);
}

/* BOOT */
typeText(
`[SYS] Initializing kernel...
[SYS] Loading terminal interface...
[OK ] Access granted

SELECT A LEVEL`
);

/* STATIC DATA */
const DATA = {
  level1: `
SUBJECT PROFILE — LEVEL 1

Name: Froylan Fahlan Aditya
Alias: Liam Dunbar
Age: 18
Origin: Indonesia

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
Chronic Loneliness and Alienation
`,

  level2b: `
MUSIC ARCHIVE — LEVEL 2

Lost Boy — Ruth B.
Mirror — Lil Wayne ft. Bruno Mars
Iris — Goo Goo Dolls
Somewhere I Belong — Linkin Park
Unwell — Matchbox Twenty
`
};

/* CLICK HANDLER */
document.querySelectorAll(".entry").forEach(entry => {
  entry.onclick = () => {
    const view = entry.dataset.view;

    if (view === "level3") {
      passwordGate();
    } else if (view === "level4") {
      loadUpdates();
    } else {
      typeText(`[SYS] Loading data...\n\n${DATA[view]}`);
    }
  };
});

/* LEVEL 3 */
function passwordGate() {
  terminal.innerHTML = `
LEVEL 3 — RESTRICTED

ACCESS DENIED.
`;
}

/* LEVEL 4 — UPDATES WITH IMAGE LOAD LOGS */
async function loadUpdates() {
  typeText("[SYS] Retrieving update records...\n", 15, async () => {
    const res = await fetch("updates.json");
    const data = await res.json();

    terminal.innerHTML = "";

    for (const update of data.updates) {
      const block = document.createElement("div");
      block.className = "update";

      block.innerHTML = `
        <div class="update-header">
          <img src="assets/profile.jpg" class="update-avatar">
          <div class="update-meta">
            <div class="name">${update.displayName}</div>
            <div class="username">${update.username}</div>
            <div class="date">${update.date}</div>
          </div>
        </div>
        <div class="update-text"></div>
        <div class="update-logs"></div>
      `;

      terminal.appendChild(block);

      /* TYPE UPDATE TEXT */
      const textEl = block.querySelector(".update-text");
      await typeInto(textEl, update.text);

      /* IMAGE LOAD LOGS */
      if (update.image) {
        const logs = block.querySelector(".update-logs");

        await delay(300);
        logs.textContent += "\n[ATTACHMENT] Media file detected";

        await delay(400);
        logs.textContent += "\n[SYS] Loading attachment...";

        await delay(600);
        const img = document.createElement("img");
        img.src = update.image;
        img.className = "update-image";
        block.appendChild(img);

        await delay(200);
        logs.textContent += "\n[OK ] Attachment rendered";
      }
    }
  });
}

/* HELPERS */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function typeInto(el, text, speed = 12) {
  return new Promise(resolve => {
    let i = 0;
    const interval = setInterval(() => {
      el.textContent += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}
