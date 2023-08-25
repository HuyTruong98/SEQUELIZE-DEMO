const express = require("express");
const likeRoute = express.Router();

const {
  getLikeByResAndUser,
  createLike,
  unlikeRestaurant,
} = require("../controllers/likeController");

likeRoute.get("/list", getLikeByResAndUser);
likeRoute.post("/create", createLike);
likeRoute.delete("/unlike/:userId/:resId", unlikeRestaurant);

module.exports = likeRoute;
