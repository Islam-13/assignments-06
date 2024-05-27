import commentModel from "../../../db/models/comment.model.js";
import postModel from "../../../db/models/post.model.js";
import userModel from "../../../db/models/user.model.js";
import bcrypt from "bcrypt";

const signup = async (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, 8);
  const password = hash;
  const { userName, email } = req.body;

  const user = await userModel.create({ userName, email, password });

  res.status(201).json({ msg: "user registered successfully", user });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ where: { email } });

  if (user) {
    const match = bcrypt.compareSync(password, user.password);

    if (match) {
      res.status(201).json({ msg: "login", userId: user.id });
    } else res.status(401).json({ msg: "email or password is incorrect" });
  } else res.status(401).json({ msg: "email is not registered" });
};

const userPostComments = async (req, res) => {
  const { author } = req.params;
  const { postId } = req.body;
  try {
    const user = await userModel.findByPk(author);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const userPost = await postModel.findOne({
      include: commentModel,
      where: { id: postId, author },
    });

    if (!userPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ user, userPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { signup, login, userPostComments };
