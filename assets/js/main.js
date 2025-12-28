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


