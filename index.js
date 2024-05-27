import express from "express";
import connection from "./db/connection.js";
import usersRouter from "./src/modules/users/users.routes.js";
import postsRouter from "./src/modules/posts/posts.routes.js";
import commentsRouter from "./src/modules/comments/comments.routes.js";

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);

connection();

app.use("*", (req, res) => {
  res.status(404).json({ msg: "404 page not found" });
});

app.listen(port, () => console.log("app is listening on port 3000"));
