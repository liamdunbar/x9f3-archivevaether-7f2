// Elements
const settingsModal = document.getElementById("settingsModal");
const modeModal = document.getElementById("modeModal");

const startBtn = document.querySelector(".start-btn");
const plusBtn = document.querySelector(".plus");

const closeButtons = document.querySelectorAll(".close-btn");


// OPEN SETTINGS
startBtn.addEventListener("click", () => {
  settingsModal.classList.add("active");
});

// OPEN MODE SELECT
plusBtn.addEventListener("click", () => {
  modeModal.classList.add("active");
});


// CLOSE WHEN CLICKING X
closeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    settingsModal.classList.remove("active");
    modeModal.classList.remove("active");
  });
});


// CLOSE WHEN CLICKING OUTSIDE
window.addEventListener("click", (e) => {
  if (e.target === settingsModal) {
    settingsModal.classList.remove("active");
  }
  if (e.target === modeModal) {
    modeModal.classList.remove("active");
  }
});
