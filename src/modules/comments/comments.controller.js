import commentModel from "../../../db/models/comment.model.js";

const createComment = async (req, res) => {
  try {
    const { content, userId, postId } = req.body;
    const comment = await commentModel.create({ content, userId, postId });

    res.status(201).json({ msg: "comment created successfully", comment });
  } catch (err) {
    res.status(401).json({ msg: "creating comment faild" });
  }
};

const getComments = async (req, res) => {
  const comments = await commentModel.findAll();

  if (comments.length) {
    res.status(201).json({ msg: "success", comments });
  } else res.json({ msg: "there is no comments yet" });
};

const updateComment = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const comment = await commentModel.update({ content }, { where: { id } });

  if (!comment[0]) {
    res.status(404).json({ msg: "comment not found" });
  } else res.status(201).json({ msg: "comment updated successfully", comment });
};

const deleteComment = async (req, res) => {
  const { id } = req.params;
  const comment = await commentModel.destroy({ where: { id } });

  if (!comment) {
    res.status(404).json({ msg: "comment not found" });
  } else res.status(201).json({ msg: "comment deleted successfully" });
};

export { createComment, getComments, updateComment, deleteComment };
