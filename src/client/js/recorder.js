const startBtn = document.getElementById("startBtn");
const video = document.getElementById("preview");
let stream;

const handleStop = () => {
  startBtn.innerText = "Start Recording";
  startBtn.removeEventListener("click", handleStop);
  startBtn.addEventListener("click", handleStart);
};

const handleStart = () => {
  startBtn.innerText = "녹화 종료";
  startBtn.removeEventListener("click", handleStart);
  startBtn.addEventListener("click", handleStop);

  const recorder = new MediaRecorder(stream);
  recorder.ondataavailable = (e) => {
    console.log("recording done");
    console.log("e.data", e.data);
  };
  console.log("start() 전", recorder);
  recorder.start();
  console.log("start() 후", recorder);

  setTimeout(() => {
    recorder.stop();
  }, 10000);
};

const init = async () => {
  stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: { width: 300, height: 100 },
  });

  video.srcObject = stream;
  video.play();
};

init();
startBtn.addEventListener("click", handleStart);
