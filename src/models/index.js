const { Sequelize } = require("sequelize");
const config = require("../config");

const sequelize = new Sequelize(
  config.database,
  config.userName,
  config.passWord,
  {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
  }
);

module.exports = sequelize;

const checkConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
  } catch (error) {
    console.log("Unable to connect to the database", error);
  }
};

checkConnect();
