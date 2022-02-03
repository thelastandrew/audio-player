const audio = document.querySelector(".audio");
const coverImg = document.querySelector(".cover-img");
const songTitle = document.querySelector(".song-title");
const artistName = document.querySelector(".artist-name");
const albumTitle = document.querySelector(".album-title");
const albumYear = document.querySelector(".album-year");
const currentTime = document.querySelector(".current-time");
const duration = document.querySelector(".duration");
const progressBar = document.querySelector(".progress-bar");
const prevBtn = document.querySelector(".prev");
const playBtn = document.querySelector(".play");
const nextBtn = document.querySelector(".next");
const volumeBtn = document.querySelector(".volume");
const volumeBar = document.querySelector(".volume-bar");

//Play-pause
playBtn.addEventListener("click", (e) => {
  if (playBtn.classList.contains("_icon-play")) {
    playBtn.classList.remove("_icon-play");
    playBtn.classList.add("_icon-pause");
    audio.play();
  } else {
    playBtn.classList.remove("_icon-pause");
    playBtn.classList.add("_icon-play");
    audio.pause();
  }
});
