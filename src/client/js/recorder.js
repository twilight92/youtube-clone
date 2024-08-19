import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

const startBtn = document.getElementById("startBtn");
const video = document.getElementById("preview");
let stream;
let recorder;
let videoFile;

const handleDownload = async () => {
  const ffmpeg = createFFmpeg({ log: true });
  // await을 사용하는 이유는 사용자가 소프트웨어를 사용할 것이기 때문(사용자가 무언가를 설치해서 javascript가 아닌 코드를 사용하는 것)
  await ffmpeg.load();

  // WebAssembly를 사용하기 때문에 더이상 브라우저에 있는 것이 아니다. (ffmpeg 가상의 세계에 파일 생성 가능)
  // FS는 FileSystem writeFile 뒤 인자는 파일명, 그 다음은 binaryData(영상 정보를 가리키는 URL = videoFile) function
  ffmpeg.FS("writeFile", "recording.webm", await fetchFile(videoFile));

  await ffmpeg.run("-i", "recording.webm", "-r", "60", "output.mp4");

  const a = document.createElement("a");
  a.href = videoFile;
  a.download = "MyRecoding.webm";
  document.body.appendChild(a);
  a.click();

  // 다운로드 후 카메라 끄고 싶을 경우 추가(stream 연결을 끊는다.)
  const tracks = stream.getTracks();
  tracks.forEach((track) => {
    track.stop();
  });
  stream = null;
};

const handleStop = () => {
  startBtn.innerText = "Download Recording";
  startBtn.removeEventListener("click", handleStop);
  startBtn.addEventListener("click", handleDownload);

  recorder.stop();
};

const handleStart = () => {
  startBtn.innerText = "녹화 종료";
  startBtn.removeEventListener("click", handleStart);
  startBtn.addEventListener("click", handleStop);

  recorder = new MediaRecorder(stream);
  recorder.ondataavailable = (event) => {
    videoFile = URL.createObjectURL(event.data);
    video.srcObject = null;
    video.src = videoFile;
    video.loop = true;
    video.play();
  };
  recorder.start();
};

const init = async () => {
  stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
  });

  video.srcObject = stream;
  video.play();
};

init();
startBtn.addEventListener("click", handleStart);
