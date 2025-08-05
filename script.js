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