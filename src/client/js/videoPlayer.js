console.log("video");

const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const time = document.getElementById("time");
const volume = document.getElementById("volume");

const handlePlayClick = (e) => {
  if (video.paused) {
    // if the video is playing, pause it
    video.play();
  } else {
    // else play the video
    video.pause();
  }
};

const handleMute = (e) => {};

const handlePause = (e) => (playBtn.innerText = "Play");
const handlePlay = (e) => (playBtn.innerText = "Pause");

playBtn.addEventListener("click", handlePlayClick);
muteBtn.addEventListener("click", handleMute);
video.addEventListener("pause", handlePause);
video.addEventListener("play", handlePlay);
