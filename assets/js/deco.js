const navLinks = document.querySelectorAll('nav a');

// hauteur de l'en-tête
const header = document.querySelector('header');
const headerHeight = header.getBoundingClientRect().height;

// Fonction pour gérer le défilement fluide
function smoothScroll(targetSection) {
  const targetOffset = targetSection.offsetTop + headerHeight;
  window.scrollTo({
    top: targetOffset,
    behavior: 'smooth',
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSectionId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetSectionId);
    if (targetSection) {
      smoothScroll(targetSection);
    }
  });
});

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

const contactSection = document.querySelector('#contact');
const contactDeco = document.querySelector('.contact-deco');
const contactLink = document.getElementById('contact-link');
let animationTriggered = false;

function animateContact() {
  contactDeco.classList.add('contact-deco-visible');
  contactDeco.style.opacity = 1;
  contactDeco.style.transform = 'translateY(0)';
  animationTriggered = true;
}

if (isElementInViewport(contactSection) && !animationTriggered) {
  animateContact();
}
window.addEventListener('scroll', () => {
  if (isElementInViewport(contactSection) && !animationTriggered) {
    animateContact();
  }
});

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  setTimeout(() => {
    animateContact();
    animationTriggered = false;
  }, 2000);
});