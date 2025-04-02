const musicControl = document.getElementById('music-control');
const musicIcon = document.getElementById('music-icon');
const backgroundMusic = document.getElementById('background-music');

musicControl.addEventListener('click', () => {
  if (backgroundMusic.paused || backgroundMusic.ended) {
    backgroundMusic.play();
    musicIcon.textContent = '⏸️'; // Cambiar a icono de pausa
  } else {
    backgroundMusic.pause();
    musicIcon.textContent = '▶️'; // Cambiar a icono de play
  }
});