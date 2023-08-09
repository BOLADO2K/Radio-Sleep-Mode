/* script- para mudar fundo da pagina */

// Seleciona o botão e adiciona um ouvinte de evento para o evento "click"
const button = document.getElementById("change-background-button");
button.addEventListener("click", function () {
  // Seleciona o elemento "body" e adiciona ou remove a classe "background2"
  document.body.classList.toggle("background2");
});
/* script- para mudar fundo da pagina */

/* audio */

const audio = document.getElementById("audio");
const playpause = document.getElementById("playpause");
const volume = document.getElementById("volume");

audio.volume = localStorage.getItem("volume");
volume.value = localStorage.getItem("volume");

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playpause.innerHTML = "Pause";
  } else {
    audio.pause();
    playpause.innerHTML = "Play";
  }
}

function setVolume() {
  audio.volume = volume.value;
  localStorage.setItem("volume", volume.value);
}

playpause.addEventListener("click", togglePlayPause);
volume.addEventListener("input", setVolume);

/* audio */
