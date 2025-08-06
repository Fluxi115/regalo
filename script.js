const startBtn = document.getElementById('start-button');
const video = document.getElementById('loader-video');
const mainContent = document.getElementById('main-content');

startBtn.addEventListener('click', () => {
  startBtn.style.display = 'none';   // Oculta botón
  video.style.display = 'block';     // Muestra video
  video.play();                      // Reproduce video con audio
});

video.addEventListener('ended', () => {
  video.style.display = 'none';      // Oculta video
  mainContent.style.display = 'block';  // Muestra contenido principal
  document.body.style.overflow = 'auto'; // Permite scroll si hay
});

// Funcionalidad de la carta
const cartaBtn = document.getElementById('open-carta-btn');
const cartaModal = document.getElementById('carta-modal');
const closeCarta = document.querySelector('.close-carta');

cartaBtn.addEventListener('click', () => {
  cartaModal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Evita scroll del fondo
});

closeCarta.addEventListener('click', () => {
  cartaModal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// Cerrar carta al hacer clic fuera de ella
cartaModal.addEventListener('click', (e) => {
  if (e.target === cartaModal) {
    cartaModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

