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
<br>

## What I Learned
- NodeJS
  - JavaScript만으로 프론트엔드/백엔드 구현
- Express
  - NodeJS 프레임워크 Express를 이용하여 서버를 처음부터 구축
  - 서버를 구성하는 방법과 서버가 제공하는 모든 기능을 사용하는 방법
- Mongoose + Mongo
  - 데이터베이스에서 데이터를 모델링하는 방법
  - 동영상, 사용자, 댓글, 조회수, 세션을 저장하는 방법을 배우고 관계를 만드는 방법
- ES6 + SCSS
  - 가장 진보된 버전의 자바스크립트와 CSS 전처리기 SCSS를 이용한 화면 구현
<br>

## Todo
- Set Up
  - [x] NodeJS Project 생성
  - [x] Express 설치
  - [x] Dependencies 알아보기
  - [x] Nodemon 알아보기
- Video
  - [x] Player
    - 재생/정지/오디오 컨트롤/타임 업데이트/재생시간 변경
      - [HTMLVideoElement](https://github.com/twilight92/youtube-clone/wiki/HTMLVideoElement) 이용
    - 재생 종료 시 조회수 +1
      - fetch로 API 요청 보내기(이동 없이 URL 호출)
  - [x] Upload
    - 영상/스크린샷 파일 생성
      - 미디어 입력 권한 - [MediaDevices](https://github.com/twilight92/youtube-clone/wiki/Media#user-content-mediadevices-getusermedia-메서드)를 이용한 미디어 장치 접근
      - 녹화/녹음 - [MediaRecorder](https://github.com/twilight92/youtube-clone/wiki/Media#user-content-mediarecorder)를 이용한 비디오/오디오 녹화
      - 미디어 형식 변환 및 스크린샷 - [ffmpeg](https://github.com/twilight92/youtube-clone/wiki/ffmpeg)를 이용 🧪실험적 기능
        - ffmpeg를 이용한 비디오 파일 형식 변환(webm → mp4)
        - ffmpeg를 이용한 스크린샷
        - ffmpeg를 브라우저에서 사용하기 위해 WebAssembly 결합
    - 파일 업로드
      - NodeJS 미들웨어 [multer](https://github.com/twilight92/youtube-clone/wiki/multer) 이용
- 댓글
  - [x] Comment schema 만들고 관계 추가하기
    - mongoose import
    - schema 만들기/댓글에 필요한 property 추가
      - createAt
      - comment text
      - owner
      - video
  - [x] backend에 request 보내기
    - fetch를 이용해 text와 video url로 보내기
- 사용자 편의성 제공
  - [x] flash 메세지를 이용한 안내 문구 제공
      - [express-flash](https://github.com/twilight92/youtube-clone/wiki/express%E2%80%90flash) 이용
<br>
  
## Packages
- NodeJS
- ES6
- Express
- Babel
- Pug
- Passport
- AJAX
- Webpack
- SCSS
- MongoDB
- Mongoose
- Multer
- NoSQL
<br>

## 배운 이론
- Request / Response
- MVC
- Cookies
- Sessions
- Middlewares
- Authentication
- Security
- Routing
- Templates
- Models
- Relationships
