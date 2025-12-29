// ===============================
// ELEMENT
// ===============================
const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("menuOverlay");
const themeToggle = document.getElementById("themeToggle");

// ===============================
// HAMBURGER MENU
// ===============================
if (hamburger && sideMenu && overlay) {
  hamburger.addEventListener("click", () => {
    sideMenu.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("menu-open");
  });
}

function closeSideMenu() {
  if (sideMenu && overlay) {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
  }
}

if (closeMenu) closeMenu.addEventListener("click", closeSideMenu);
if (overlay) overlay.addEventListener("click", closeSideMenu);

// ===============================
// DARK MODE GLOBAL (INI KUNCINYA)
// ===============================
/* ===== DARK / LIGHT MODE ===== */

// cek status sebelumnya
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
} else {
  themeToggle.textContent = "🌙";
}

// klik toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  }
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
