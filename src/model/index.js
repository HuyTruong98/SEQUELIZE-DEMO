const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("food_app", "root", "Huy123456", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

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
