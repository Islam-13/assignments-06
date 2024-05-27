import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import userModel from "./user.model.js";

const postModel = sequelize.define("post", {
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.STRING, allowNull: false },
});

postModel.belongsTo(userModel, { foreignKey: "author" });

userModel.hasMany(postModel, { foreignKey: "author" });

export default postModel;
