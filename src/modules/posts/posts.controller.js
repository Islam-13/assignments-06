import postModel from "../../../db/models/post.model.js";
import userModel from "../../../db/models/user.model.js";

const createPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const post = await postModel.create({ title, content, author });

    res.status(201).json({ msg: "post created successfully", post });
  } catch (err) {
    res.status(401).json({ msg: "creating post faild" });
  }
};

const getPosts = async (req, res) => {
  const posts = await postModel.findAll();

  if (posts.length) {
    res.status(201).json({ msg: "success", posts });
  } else res.json({ msg: "there is no posts yet" });
};

const updatePost = async (req, res) => {
  const { title, content, userId } = req.body;
  const { id } = req.params;
  const post = await postModel.update(
    { title, content },
    { where: { id, author: userId } }
  );

  if (!post[0]) {
    res.status(404).json({ msg: "update faild" });
  } else res.status(201).json({ msg: "post updated successfully", post });
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  const post = await postModel.destroy({ where: { id, author: userId } });

  if (!post) {
    res.status(404).json({ msg: "delete faild" });
  } else res.status(201).json({ msg: "post deleted successfully", post });
};

const getPost = async (req, res) => {
  const { id } = req.params;
  const post = await postModel.findOne(
    { include: userModel },
    { where: { id } }
  );

  if (!post) {
    res.status(404).json({ msg: "post not found" });
  } else res.status(201).json({ msg: "success", post });
};

export { createPost, getPosts, updatePost, deletePost, getPost };
