import express from "express";
import {
  registerView,
  createComment,
  deleteComment,
} from "../controllers/videoController";

const apiRouter = express.Router();

/* 
    Todo)
    백엔드에 views +1
    유저가 영상을 시청하면 백엔드에 요청을 보낼건데
    요청을 보내더라도 URL을 바꾸지 않고 템플릿을 렌더링하지 않는다.
*/

apiRouter.post("/videos/:id([0-9a-f]{24})/view", registerView);
apiRouter.post("/videos/:id([0-9a-f]{24})/comment", createComment);
apiRouter.delete("/videos/:id([0-9a-f]{24})/comment/delete", deleteComment);

export default apiRouter;
