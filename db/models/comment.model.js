import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import userModel from "./user.model.js";
import postModel from "./post.model.js";

const commentModel = sequelize.define("comment", {
  content: { type: DataTypes.STRING },
});

commentModel.belongsTo(userModel);
userModel.hasMany(commentModel);

commentModel.belongsTo(postModel);
postModel.hasMany(commentModel);

export default commentModel;
