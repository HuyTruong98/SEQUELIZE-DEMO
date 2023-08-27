const express = require("express");
const userRoute = express.Router();

//import controller
const {
  getAllUser,
  createUser,
  getUserByID,
  updateUser,
  login,
  signUp,
  deleteUser,
} = require("../controllers/userController");

const { checkToken } = require("../controllers/authController");

userRoute.get("/list", checkToken, getAllUser);

userRoute.get("/:user_id", checkToken, getUserByID);

userRoute.post("/create",checkToken, createUser);

userRoute.post("/login", login);

userRoute.post("/sign-up", signUp);

userRoute.put("/update/:user_id", checkToken, updateUser);

userRoute.delete("/:user_id", checkToken, deleteUser);

module.exports = userRoute;
