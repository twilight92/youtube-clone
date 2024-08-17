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

  playBtn.innerText = video.paused ? "Pause" : "Play";
};

const handleMute = (e) => {};


playBtn.addEventListener("click", handlePlayClick);
video.addEventListener("play", handlePlay);
