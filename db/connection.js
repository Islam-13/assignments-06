import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "bbc1dqvhslnoymxi4qbr",
  "ur7uy0fwhb9j18oe",
  "Uh5vuiYOPiNkKUgjoF07",
  {
    dialect: "mysql",
    host: "bbc1dqvhslnoymxi4qbr-mysql.services.clever-cloud.com",
  }
);

const connection = async () => {
  return await sequelize
    .sync()
    .then(() => console.log("DB connected successfully"))
    .catch((err) => console.log("DB connection failed", err));
};

export default connection;