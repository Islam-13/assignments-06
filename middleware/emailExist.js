import userModel from "../db/models/user.model.js";

const emailExist = async (req, res, next) => {
  const { email } = req.body;
  const isExist = await userModel.findOne({ where: { email } });

  if (isExist) return res.status(401).json({ msg: "user already exist" });

  next();
};

export default emailExist;
