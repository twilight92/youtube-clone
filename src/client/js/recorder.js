import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

const actionBtn = document.getElementById("actionBtn");
const video = document.getElementById("preview");
let stream;
let recorder;
let videoFile;

const files = {
  input: "recording.webm",
  output: "output.mp4",
  thumb: "thumbnail.jpg",
};

const downloadFile = (fileUrl, fileName) => {
  const a = document.createElement("a");
  a.href = fileUrl;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
};

const handleDownload = async () => {
  actionBtn.removeEventListener("click", handleDownload);

  actionBtn.innerText = "Transcoding...";

  actionBtn.disabled = true;

  const ffmpeg = createFFmpeg({ log: true });
  // await을 사용하는 이유는 사용자가 소프트웨어를 사용할 것이기 때문(사용자가 무언가를 설치해서 javascript가 아닌 코드를 사용하는 것)
  await ffmpeg.load();

  // WebAssembly를 사용하기 때문에 더이상 브라우저에 있는 것이 아니다. (ffmpeg 가상의 세계에 파일 생성 가능)
  // FS는 FileSystem writeFile 뒤 인자는 파일명, 그 다음은 binaryData(영상 정보를 가리키는 URL = videoFile) function
  ffmpeg.FS("writeFile", files.input, await fetchFile(videoFile));

  // 브라우저의 메모리에는 output.mp4 파일이 있다.
  await ffmpeg.run("-i", files.input, "-r", "60", files.output);

  await ffmpeg.run(
    "-i",
    files.input,
    "-ss",
    "00:00:01",
    "-frames:v",
    "1",
    files.thumb
  );

  // ffmpeg의 FS(파일 시스템)을 이용해서 mp4, jpg 파일을 가져온다.
  const mp4File = ffmpeg.FS("readFile", files.output);
  const thumbFile = ffmpeg.FS("readFile", files.thumb);

  /* 
    // unit8Array 타입 - 삭제 or 파일 합치기 등 뭐든 할 수 있는 원시 파일
    console.log(mp4File); 

    // ArrayBuffer - mp4File의 raw data(binary data)(실제 파일)에 접근하려면 mp4File.buffer를 사용해야한다
    console.log(mp4File.buffer); 

    기억해야할 것은 binary data를 사용하고 싶다면 buffer를 사용해야한다
  */

  // blob은 배열 안에 배열들을 받을 수 있다/js에게 이건 video/mp4 type의 파일이라고 알려줘야한다.
  const mp4Blob = new Blob([mp4File.buffer], { type: "video/mp4" });
  const thumbBlob = new Blob([thumbFile.buffer], { type: "image/jpg" });

  const mp4Url = URL.createObjectURL(mp4Blob);
  const thumbUrl = URL.createObjectURL(thumbBlob);

  downloadFile(mp4Url, "MyRecoding.mp4");
  downloadFile(thumbUrl, "MyThumbnail.jpg");

  // 속도 개선을 위해 파일 링크 해제
  ffmpeg.FS("unlink", files.input);
  ffmpeg.FS("unlink", files.output);
  ffmpeg.FS("unlink", files.thumb);

  // URL도 삭제(revokeObjectURL 이 객체를 메모리에서 지우고 싶다는 것)
  URL.revokeObjectURL(videoFile);
  URL.revokeObjectURL(mp4Url);
  URL.revokeObjectURL(thumbUrl);

  actionBtn.disabled = false;
  actionBtn.innerText = "Record Again";
  actionBtn.addEventListener("click", handleStart);

  // 다운로드 후 카메라 끄고 싶을 경우 추가(stream 연결을 끊는다.)
  // const tracks = stream.getTracks();
  // tracks.forEach((track) => {
  //   track.stop();
  // });
  // stream = null;
};

const handleStart = () => {
  actionBtn.innerText = "Recording";
  actionBtn.disabled = true;

  actionBtn.removeEventListener("click", handleStart);

  recorder = new MediaRecorder(stream);
  recorder.ondataavailable = (event) => {
    videoFile = URL.createObjectURL(event.data);
    video.srcObject = null;
    video.src = videoFile;
    video.loop = true;
    video.play();
    actionBtn.innerText = "Download";
    actionBtn.disabled = false;
    actionBtn.addEventListener("click", handleDownload);
  };
  recorder.start();
  setTimeout(() => {
    recorder.stop();
  }, 5000);
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
actionBtn.addEventListener("click", handleStart);
