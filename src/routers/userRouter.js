import express from "express";
import { getEdit, postEdit, logout, startGithubLogin, finishGithubLogin, see } from "../controllers/userController";
import { protectorMiddleware } from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", protectorMiddleware, logout);
userRouter.route("/edit").get(protectorMiddleware, getEdit).post(protectorMiddleware, postEdit);
userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/finish", finishGithubLogin);
userRouter.get("/:id", see);

export default userRouter;
