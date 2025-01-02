import express from "express";

const app = express();
const PORT = 3030;

app.use(express.json());

app.use("/api", [
  UsersRouter,
  likeRouter,
  postsRouter,
  crudRouter,
  cmRouter,
  s3Router,
]);

app.listen(PORT, () => {
  console.log(PORT, "3030포트로 서버가 열렸어요!");
});
