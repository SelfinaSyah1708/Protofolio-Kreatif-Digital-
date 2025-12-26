const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  let valid = true;

  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  successMessage.textContent = "";

  if (name.value.trim() === "") {
    name.nextElementSibling.textContent = "Nama wajib diisi";
    valid = false;
  }

  if (!email.value.includes("@")) {
    email.nextElementSibling.textContent = "Email tidak valid";
    valid = false;
  }

  if (message.value.trim().length < 10) {
    message.nextElementSibling.textContent = "Pesan minimal 10 karakter";
    valid = false;
  }

  if (valid) {
    successMessage.textContent = "Pesan berhasil dikirim. Terima kasih!";
    successMessage.style.color = "green";
    form.reset();
  }
});