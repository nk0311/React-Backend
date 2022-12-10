require("dotenv").config();

const dbName = "react-backend";
const dbUser = "postgres";
const dbPwd = process.env.PASSWORD;

module.exports = {
  dbName,
  dbUser,
  dbPwd,
};