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

const { authenticateToken } = require("../controllers/authController");

userRoute.get("/list", authenticateToken, getAllUser);

userRoute.get("/:user_id", authenticateToken, getUserByID);

userRoute.post("/create", authenticateToken, createUser);

userRoute.post("/login", login);

userRoute.post("/sign-up", signUp);

userRoute.put("/update/:user_id", authenticateToken, updateUser);

userRoute.delete("/:user_id", authenticateToken, deleteUser);

module.exports = userRoute;
