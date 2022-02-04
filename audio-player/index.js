const player = document.querySelector(".player");
const audio = document.querySelector(".audio");
const coverImg = document.querySelector(".cover-img");
const songTitle = document.querySelector(".song-title");
const artistName = document.querySelector(".artist-name");
const albumTitle = document.querySelector(".album-title");
const albumYear = document.querySelector(".album-year");
const current = document.querySelector(".current-time");
const duration = document.querySelector(".duration");
const progressBar = document.querySelector(".progress-bar");
const prevBtn = document.querySelector(".prev");
const playBtn = document.querySelector(".play");
const nextBtn = document.querySelector(".next");
const volumeBtn = document.querySelector(".volume");
const volumeBar = document.querySelector(".volume-bar");
const songs = [
  {
    "song-title": "A1 - It s just a burning memory",
    "artist-name": "The Caretaker",
    "album-title": "Everywhere at the End of Time",
    "album-year": 2016,
  },
  {
    "song-title": "C1 - A losing battle is raging",
    "artist-name": "The Caretaker",
    "album-title": "Everywhere at the End of Time",
    "album-year": 2017,
  },
  {
    "song-title": "E2 - And the heart breaks",
    "artist-name": "The Caretaker",
    "album-title": "Everywhere at the End of Time",
    "album-year": 2017,
  },
];
let songIndex = 0;

//Play-pause
function playSong() {
  player.classList.add("play");
  playBtn.classList.remove("_icon-play");
  playBtn.classList.add("_icon-pause");
  audio.play();
}

function pauseSong() {
  player.classList.remove("play");
  playBtn.classList.add("_icon-play");
  playBtn.classList.remove("_icon-pause");
  audio.pause();
}

//Stop
function audioStop() {
  player.classList.remove("play");
  playBtn.classList.add("_icon-play");
  playBtn.classList.remove("_icon-pause");
  current.innerHTML = "0:00";
  progressBar.value = 0;
}

audio.addEventListener("ended", audioStop);

//Set the song
function setSong(songIndex) {
  audio.src = `./assets/audio/${songs[songIndex]["song-title"]}.mp3`;
  coverImg.src = `./assets/img/jpg/stage${songIndex + 1}.jpg`;
  songTitle.innerHTML = `${songs[songIndex]["song-title"]}`;
  artistName.innerHTML = `${songs[songIndex]["artist-name"]}`;
  albumTitle.innerHTML = `${songs[songIndex]["album-title"]}`;
  albumYear.innerHTML = `${songs[songIndex]["album-year"]}`;
}

audio.addEventListener("loadeddata", () => {
  const durationTime = audio.duration;
  duration.innerHTML = getTimeCodeFromNum(durationTime);
  progressBar.max = durationTime;
});

//Play-pause button
playBtn.addEventListener("click", (e) => {
  const isPlaying = player.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

//Next button
nextBtn.addEventListener("click", (e) => {
  const isPlaying = player.classList.contains("play");
  if (songIndex === songs.length - 1) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  setSong(songIndex);
  if (isPlaying) {
    playSong();
  }
});

//Prev button
prevBtn.addEventListener("click", (e) => {
  const isPlaying = player.classList.contains("play");
  if (songIndex === 0) {
    songIndex = songs.length - 1;
  } else {
    songIndex -= 1;
  }
  setSong(songIndex);
  if (isPlaying) {
    playSong();
  }
});

//Progress bar
function updateProgress(e) {
  let currentTime = audio.currentTime;
  current.innerHTML = getTimeCodeFromNum(currentTime);
  progressBar.value = currentTime;
}

audio.addEventListener("timeupdate", updateProgress);
progressBar.addEventListener("input", (e) => {
  let value = e.target.value;
  audio.currentTime = Number(value);
});

//Transforms num in time code format
function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}
