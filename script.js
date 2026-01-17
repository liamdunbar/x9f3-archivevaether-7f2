const terminal = document.getElementById("terminalBody");

/* BOOT */
terminal.textContent =
`[SYS] Initializing kernel...
[SYS] Loading terminal interface...
[OK ] Access granted

SELECT A LEVEL`;

/* DATA */
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

/* CLICK HANDLER */
document.querySelectorAll(".entry").forEach(entry => {
  entry.onclick = () => {
    const view = entry.dataset.view;

    if (view === "level4") {
      loadUpdates();
    } else if (view === "level3") {
      terminal.textContent =
`LEVEL 3 — RESTRICTED

[ERR] ACCESS DENIED
[LOG] Unauthorized attempt recorded`;
    } else {
      terminal.textContent = DATA[view];
    }
  };
});

/* LOAD UPDATES */
async function loadUpdates() {
  terminal.textContent = "[SYS] Retrieving update records...\n";

  const res = await fetch("updates/updates.json");
  const data = await res.json();

  terminal.innerHTML = "";

  data.updates.forEach(update => {
    const post = document.createElement("div");
    post.className = "update-post";

    post.innerHTML = `
      <div class="update-header">
        <img class="update-avatar" src="assets/profile.jpg">
        <div>
          <div class="update-name">${update.displayName}</div>
          <div class="update-meta">${update.username} · ${update.date}</div>
        </div>
      </div>

      <div class="update-text">${update.text}</div>
    `;

    terminal.appendChild(post);

    if (update.image) {
      const log = document.createElement("div");
      log.textContent = "[SYS] Loading attachment...";
      post.appendChild(log);

      setTimeout(() => {
        log.remove();
        const img = document.createElement("img");
        img.src = update.image;
        img.className = "update-image";
        post.appendChild(img);
      }, 700);
    }
  });
}
