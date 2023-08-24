require("dotenv").config();

// process là biến toàn cục
// node src/config/index.js

module.exports = {
  database: process.env.DATABASE,
  userName: process.env.USERNAMEDB,
  passWord: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  dialect: process.env.DIALECT,
};
