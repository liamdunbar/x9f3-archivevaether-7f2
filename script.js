const terminal = document.getElementById("terminalBody");

/* ================= BOOT ================= */

function boot() {
  terminal.textContent = `[SYS] Initializing kernel...
[SYS] Loading terminal interface...
[OK ] Access granted

SELECT A LEVEL`;
}

boot();

/* ================= STATIC DATA ================= */

const DATA = {
  level1: `
SUBJECT PROFILE — LEVEL 1

Name: Froylan Fahlan Aditya
Alias: Liam Dunbar
Age: 18
Origin: Indonesia
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

/* ================= LEVEL HANDLER ================= */

document.querySelectorAll(".entry").forEach(entry => {
  entry.onclick = () => {
    const view = entry.dataset.view;

    if (view === "level3") {
      terminal.textContent = `LEVEL 3 — RESTRICTED\n\nACCESS DENIED`;
      return;
    }

    if (view === "level4") {
      loadUpdates();
      return;
    }

    terminal.textContent = `[SYS] Loading data...\n\n${DATA[view]}`;
  };
});

/* ================= LEVEL 4: UPDATES ================= */

function loadUpdates() {
  terminal.innerHTML = `[SYS] Retrieving update records...\n\n`;

  fetch("updates/updates.json")
    .then(res => res.json())
    .then(data => renderUpdates(data.updates))
    .catch(() => {
      terminal.textContent += `[ERR] Failed to load updates`;
    });
}

function renderUpdates(updates) {
  terminal.innerHTML = "";

  updates.forEach(update => {
    const block = document.createElement("div");
    block.style.borderTop = "1px solid #f2e86d";
    block.style.borderBottom = "1px solid #f2e86d";
    block.style.padding = "12px 0";
    block.style.marginBottom = "16px";

    block.innerHTML = `
      <div style="display:flex; align-items:center; gap:10px;">
        <img src="assets/profile.jpg"
             style="width:40px;height:40px;border-radius:50%;border:1px solid #f2e86d;object-fit:cover;">
        <div>
          <strong>${update.displayName}</strong><br>
          <span style="opacity:.75">${update.username} · ${update.date}</span>
        </div>
      </div>

      <div style="margin-top:10px;">
        ${update.text}
      </div>
    `;

    if (update.image) {
      const img = document.createElement("img");
      img.src = update.image;
      img.style.marginTop = "10px";
      img.style.maxWidth = "100%";
      img.style.maxHeight = "320px";
      img.style.border = "1px solid #f2e86d";
      img.style.display = "block";
      block.appendChild(img);
    }

    terminal.appendChild(block);
  });

  terminal.scrollTop = 0;
}
