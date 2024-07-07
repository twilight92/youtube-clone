import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if (url === "/protected") {
        return res.send("<h1>Not Allowed</h1>")
    }
    console.log("Allowed, you may continue");
    next();
};

const handleHome = (req, res, next) => {
    return res.send("I love middleware");
};

const handleProtected = (req, res) => {
    return res.send("Welcome to thr private lounge");
};

// use: 모든 route에서 사용하는 미들웨어
app.use(logger)
app.use(privateMiddleware)
app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListneing = () => console.log(`Server listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handleListneing)

