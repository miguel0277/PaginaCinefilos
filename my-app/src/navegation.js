// Obtener los elementos del menú de navegación
const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const contactLink = document.getElementById('contact-link');

// Agregar un evento de clic a cada elemento del menú de navegación
homeLink.addEventListener('click', () => {
  window.location.href = 'home.js';
});

aboutLink.addEventListener('click', () => {
  window.location.href = 'about.js';
});

contactLink.addEventListener('click', () => {
  window.location.href = 'contact.js';
});