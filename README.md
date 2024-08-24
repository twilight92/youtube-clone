# Youtube Clone
<img src="https://nomadcoders.co/_next/image?url=https%3A%2F%2Fd1telmomo28umc.cloudfront.net%2Fmedia%2Fpublic%2Favatars%2FytThumbnail_rtMv4Du.jpg&w=2048&q=75"/>
Vanilla JS와 NodeJS를 이용한 유튜브 클론코딩

## Pages
- Home
  - [x] 비디오 리스트
- Member
  - [x] 회원가입
  - [x] 로그인
- User
  - [x] 상세
  - [x] 프로필 편집
  - [x] 패스워드 변경
- Video
  - [x] 업로드
  - [x] 상세
  - [x] 편집
  - [x] 검색

## Todo
- Video
  - [x] [Player](https://github.com/twilight92/youtube-clone/wiki/HTMLVideoElement)
    - 재생/정지/오디오 컨트롤/타임 업데이트/재생시간 변경/재생 종료 시 조회수 +1 - HTMLVideoElement를 이용
  - [x] [Upload](https://github.com/twilight92/youtube-clone/wiki/Media)
    - 미디어 입력 권한 - MediaDevices를 이용한 미디어 장치 접근
    - 녹화/녹음 - MediaRecorder를 이용한 비디오/오디오 녹화
    - 미디어 형식 변환 및 스크린샷 - ffmpeg를 이용 🧪실험적 기능
      - ffmpeg를 이용한 비디오 파일 형식 변환(webm → mp4)
      - ffmpeg를 이용한 스크린샷
      - ffmpeg를 브라우저에서 사용하기 위해 WebAssembly 결합
