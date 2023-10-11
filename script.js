

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

let foto = 1 ;

function mudar(){
  let trocar = document.getElementById("playpause");

  if (foto === 1){
    trocar.src="img/pause.png"
    foto = 2
  } else {
    trocar.src = "img/play.png"
    foto = 1
  }
};

