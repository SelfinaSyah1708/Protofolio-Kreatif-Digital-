<<<<<<< HEAD
=======
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("typing-text");
  const text = "Portofolio Kreatif Digital";

  if (!el) {
    console.log("ID typing-text tidak ketemu");
    return;
  }

  el.textContent = ""; // paksa kosong
  let i = 0;

  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, 120);
    }
  }

  type();
});


>>>>>>> c300286b1997c9d10806fe8b32707afb68f5c587
