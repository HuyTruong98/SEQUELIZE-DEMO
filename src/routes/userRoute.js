const express = require("express");
const userRoute = express.Router();

//import controller
const {
  getAllUser,
  createUser,
  getUserByID,
  updateUser,
} = require("../controllers/userController");

userRoute.get("/list", getAllUser);

userRoute.get("/:user_id", getUserByID);

userRoute.post("/create", createUser);

userRoute.put("/update/:user_id", updateUser);

//DELETE
// userRoute.delete("/:user_id", deleteUser);

module.exports = userRoute;
