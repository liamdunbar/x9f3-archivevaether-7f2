const terminal = document.getElementById("terminalBody");

/* TYPEWRITER */
function typeText(text, speed = 15) {
  terminal.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    terminal.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

/* LOG BOOT */
typeText(
`[SYS] Initializing kernel...
[SYS] Loading terminal interface...
[OK ] Access granted

SELECT A LEVEL`
);

/* DATA */
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
document.querySelectorAll(".entry").forEach(e => {
  e.onclick = () => {
    const v = e.dataset.view;
    if (v === "level3") {
      passwordGate();
    } else {
      typeText(`[SYS] Loading data...\n\n${DATA[v]}`);
    }
  };
});

/* PASSWORD GATE */
function passwordGate() {
  terminal.innerHTML = `
LEVEL 3 — RESTRICTED

ENTER PASSWORD:

<div class="command">
  <span>&gt;</span>
  <input id="pw" autofocus>
</div>
`;

  document.getElementById("pw").addEventListener("keydown", e => {
    if (e.key === "Enter") {
      typeText(
`[ERR] ACCESS DENIED
[LOG] Unauthorized attempt recorded

Entering restricted command mode...

Type "help"`,
20
      );
      setTimeout(commandMode, 1200);
    }
  });
}

/* COMMAND MODE */
function commandMode() {
  terminal.innerHTML += `
<div class="command">
  <span>&gt;</span>
  <input id="cmd">
</div>
`;

  document.getElementById("cmd").addEventListener("keydown", e => {
    if (e.key === "Enter") {
      const cmd = e.target.value.trim();
      let out = "\nUNKNOWN COMMAND";

      if (cmd === "help") out = "\nhelp\ncontact";
      if (cmd === "contact") out = `
Instagram: @simplefroy
WhatsApp: +62 851-6184-0928
Telegram: @Wakeyliam
Snapchat: zfroyden
Twitter: @FahlanAditya`;

      terminal.textContent += `\n> ${cmd}\n${out}`;
      e.target.value = "";
    }
  });
}
