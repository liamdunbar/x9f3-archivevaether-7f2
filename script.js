const views = document.querySelectorAll(".view");
const entries = document.querySelectorAll(".entry");
const updatesContainer = document.getElementById("updatesContainer");

let updatesLoaded = false;

/* VIEW SWITCH */
entries.forEach(entry => {
  entry.onclick = () => {
    const target = entry.dataset.view;
    views.forEach(v => v.classList.add("hidden"));
    document.getElementById(`view-${target}`).classList.remove("hidden");

    if (target === "level4" && !updatesLoaded) {
      loadUpdates();
      updatesLoaded = true;
    }
  };
});

/* LOAD UPDATES ONCE */
async function loadUpdates() {
  const res = await fetch("updates.json");
  const data = await res.json();

  data.updates.forEach(update => {
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
      <div class="update-text">${update.text}</div>
    `;

    if (update.image) {
      const img = document.createElement("img");
      img.src = update.image;
      img.className = "update-image";
      block.appendChild(img);
    }

    updatesContainer.appendChild(block);
  });
}
