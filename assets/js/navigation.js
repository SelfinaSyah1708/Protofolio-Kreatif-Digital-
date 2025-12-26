const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("menuOverlay");

hamburger.onclick = () => {
  sideMenu.classList.add("active");
  overlay.classList.add("active");
};

closeMenu.onclick = () => {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
};

overlay.onclick = () => {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
};

const themeToggle = document.getElementById("themeToggle");

// cek mode tersimpan
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
