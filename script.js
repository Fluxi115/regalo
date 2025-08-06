const startBtn = document.getElementById('start-button');
const mainContent = document.getElementById('main-content');
const backgroundMusic = document.getElementById('background-music');
const playVideoBtn = document.getElementById('play-video-btn');
const cartaVideo = document.getElementById('carta-video');

startBtn.addEventListener('click', () => {
  startBtn.style.display = 'none';   // Oculta botón
  mainContent.style.display = 'block';  // Muestra contenido principal
  document.body.style.overflow = 'auto'; // Permite scroll si hay
  
  // Configura el volumen de la canción (0.0 a 1.0, donde 0.5 = 50% del volumen)
  backgroundMusic.volume = 0.2; // 20% del volumen máximo
  
  // Reproduce la canción de fondo inmediatamente
  backgroundMusic.play().catch(error => {
    console.log('No se pudo reproducir la canción automáticamente:', error);
  });
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

// Funcionalidad del video dentro de la carta
playVideoBtn.addEventListener('click', () => {
  playVideoBtn.style.display = 'none';  // Oculta el botón
  cartaVideo.style.display = 'block';   // Muestra el video
  
  // Pausa la música de fondo cuando se reproduce el video
  backgroundMusic.pause();
  
  cartaVideo.play();                    // Reproduce el video
});

// Cuando termina el video de la carta, vuelve a mostrar el botón
cartaVideo.addEventListener('ended', () => {
  cartaVideo.style.display = 'none';    // Oculta el video
  playVideoBtn.style.display = 'block'; // Muestra el botón nuevamente
  
  // Reanuda la música de fondo cuando termina el video
  backgroundMusic.play().catch(error => {
    console.log('No se pudo reanudar la música automáticamente:', error);
  });
});

