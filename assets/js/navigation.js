// ambil elemen
const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("menuOverlay");
const closeMenu = document.getElementById("closeMenu");

// buka side menu
hamburger.addEventListener("click", () => {
  sideMenu.classList.add("active");
  overlay.classList.add("active");
});

// fungsi tutup menu
function closeSideMenu() {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
}

// klik tombol X
closeMenu.addEventListener("click", closeSideMenu);

// klik area gelap
overlay.addEventListener("click", closeSideMenu);
