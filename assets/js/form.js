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

// document.querySelector("form").addEventListener("submit", function (e) {
//   e.preventDefault();
// 
//   if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
//     formError.textContent = "Veuillez remplir tous les champs.";
//     formError.style.display = "block";
//   } else {
//     // Envoyer l'e-mail à xx@xx.xx (côté serveur) et afficher un message de succès.
//   }
// });

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const firstname = document.getElementById("firstname").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || firstname === "" || email === "" || message === "") {
      // Gérer les champs vides ici
      return;
  }

  // Créer le corps de l'email
  const emailBody = `Nom: ${name}%0D%0APrénom: ${firstname}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

  // Ouvrir le client de messagerie
  window.location.href = `mailto:janyce@mjv.desi?subject=Sujet de l'email&body=${emailBody}`;
});
