const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");

emailInput.addEventListener("input", () => {
  if (!isValidEmail(emailInput.value)) {
    emailError.textContent = "Adresse e-mail invalide";
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const formError = document.getElementById("form-error");

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
    formError.textContent = "Veuillez remplir tous les champs.";
    formError.style.display = "block";
  } else {
    // Envoyer l'e-mail à xx@xx.xx (côté serveur) et afficher un message de succès.
    // une alerte pour l'exemple:
    alert("Message envoyé, merci !");
  }
});
