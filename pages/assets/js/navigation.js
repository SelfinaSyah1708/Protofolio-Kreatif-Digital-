const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

/* Hamburger toggle */
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

/* Close menu after click */
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

/* Active navigation on scroll */
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});