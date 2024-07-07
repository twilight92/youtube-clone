import express from "express";

const PORT = 4000;

const app = express();

const handleListneing = () => console.log(`Server listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handleListneing)

