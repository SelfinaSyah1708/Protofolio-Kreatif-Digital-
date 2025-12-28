const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("menuOverlay");
const themeToggle = document.getElementById("themeToggle");

/* BUKA MENU */
hamburger.addEventListener("click", () => {
  sideMenu.classList.add("active");
  overlay.classList.add("active");
  document.body.classList.add("menu-open"); // 🔑 INI KUNCI
});

/* TUTUP MENU */
function closeSideMenu() {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("menu-open"); // 🔑
}

closeMenu.addEventListener("click", closeSideMenu);
overlay.addEventListener("click", closeSideMenu);

/* DARK / LIGHT MODE */
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";
});

function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Tutup modal jika klik di luar konten
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
  
}