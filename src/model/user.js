const { DataTypes, Model } = require("sequelize");
const sequelize = require("./index.js");

class User extends Model {}

User.init(
  {
    user_id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      validate: {
        isNumeric: {
          msg: "Id is number !",
        },
      },
    },
    full_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Email invalidate!",
        },
      },
    },
    pass_word: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Password cannot be empty",
        },
        len: {
          args: [6, 20],
          msg: "Password must be between 6 and 20 characters",
        },
      },
    },
  },
  {
    sequelize, // ES6 Object literals
    modelName: "User", // Users
    tableName: "users",
    timestamps: false,
  }
);

// 2 column updateDate, createDate

module.exports = User;
