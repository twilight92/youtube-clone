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
- [NodeJS](https://github.com/twilight92/youtube-clone/wiki/1.-NodeJS-NPM#nodejs)와 [NPM](https://github.com/twilight92/youtube-clone/wiki/1.-NodeJS-NPM#npm)알아보기
- [Set Up](https://github.com/twilight92/youtube-clone/wiki/2.-Set-Up)
  - [x] NodeJS Project 생성
  - [x] Express 설치
  - [x] Dependencies 알아보기
  - [x] Nodemon 알아보기
- [Express](https://github.com/twilight92/youtube-clone/wiki/Express)
  - [x] first server
  - [x] GET Requests
  - [x] Responses
  - [x] Controller/Middlewares
    - Express에서 미들웨어를 처리하는 방식에 대한 이해<br>app.use()/app.get() 차이
  - [x] morgan 알아보기
- [Routers](https://github.com/twilight92/youtube-clone/wiki/Routers)
  - [x] Routers 알아보기
- Video
  - [x] Player
    - 재생/정지/오디오 컨트롤/타임 업데이트/재생시간 변경
      - [HTMLVideoElement](https://github.com/twilight92/youtube-clone/wiki/HTMLVideoElement) 이용
    - 재생 종료 시 조회수 +1
      - fetch로 [API](https://github.com/twilight92/youtube-clone/wiki/API) 요청 보내기(이동 없이 URL 호출)
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
    - fetch를 이용해 text와 video란 정보를 url로 보내기
      - json 미들웨어 적용 `app.use(express.json());`
      - frontend에서 request를 보내기 전 데이터를 받아 string으로 바꿔줌 `JSON.stringyfy();`
      - backend에서 이 string을 받아 JS object로 바꿔줌 `JSON.parse();`
  - [x] 실시간 댓글 구현
    - 옵션 1) pug를 이용한 방법
    - 옵션 2) js를 이용한 방법
  - [x] 댓글 삭제
    - X 버튼 클릭 시 fetch request를 보내서 댓글 지우기
      - API route와 컨트롤러 생성
      - 유저가 댓글의 주인이 맞는지 확인 또는 주인에게만 삭제 버튼 노출
- 사용자 편의성 제공
  - [x] flash 메세지를 이용한 안내 문구 제공
      - [express-flash](https://github.com/twilight92/youtube-clone/wiki/express%E2%80%90flash) 이용
- 배포
  - [x] 배포 준비
    - [Fly.io](https://fly.io/) - Node.js 애플리케이션 배포(가입 및 결제 카드 등록 필요)
    - [MongoDB Atlas](https://www.mongodb.com/ko-kr/lp/cloud/atlas/try4?utm_content=rlsavisitor&utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_retarget-brand_gic-null_apac-all_ps-all_desktop_eng_lead&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=14412646476&adgroup=131761130772&cq_cmp=14412646476&gad_source=1&gclid=CjwKCAjwreW2BhBhEiwAavLwfPJF7nG6qGLtPI5ReIjo2uxO2t8efOgDJIxCtLJVbieBhv81FAYGqxoCv_0QAvD_BwE?utm_content=rlsavisitor&utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_retarget-brand_gic-null_apac-all_ps-all_desktop_eng_lead&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=14412646476&adgroup=131761130772&cq_cmp=14412646476&gad_source=1&gclid=CjwKCAjwreW2BhBhEiwAavLwfPJF7nG6qGLtPI5ReIjo2uxO2t8efOgDJIxCtLJVbieBhv81FAYGqxoCv_0QAvD_BwE) - 몽고DB 데이터베이스 배포(가입 필요)
    - [AWS](https://aws.amazon.com/ko/) - 사용자가 업로드 하는 파일 저장(가입 필요)
  - [x] production 모드로 빌드
    - package.json에서 명령어 생성
      - build:assets 
      - build:server
      - build(server와 build 호출) → fly.io에서 사용
      - start → fly.io에서 사용
  - [x] Fly Launch
    - [Install flyctl](https://fly.io/docs/getting-started/launch/)
    - `fly auth login`
    - `fly launch`
    - `fly deploy`
    - 로그인 URL 변경<br>GitHub > Developer Settings > OAuth Apps > Authorization callback URL 변경
  - [x] MongoDB Atlas
  - [x] AWS S3 & IAM Setup
    - S3 Bucket 생성
    - IAM > Users 생성 <br>API key를 fly.io 서버에 제공해줌으로써 서버가 그 API Key를 이용해 사진들을 bucket에 저장할 수 있게
  - [x] [Multer S3](https://www.npmjs.com/package/multer-s3) Uploads
    - dependencies @aws-sdk/client-s3 설치<br>생성한 API Key를 사용하여 S3에 연결하게 해줌
      - middlewares에서 AWS Client S3로부터 S3Client import
    - dependencies multer-s3 설치<br>multer에게 어떻게 항목들을 S3로 업로드 하는지 알려주는 패키지
      - middlewares에서 multerS3로부터 S3Client import
  

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
