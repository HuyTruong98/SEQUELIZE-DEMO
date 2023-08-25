const express = require("express");
const likeRoute = express.Router();

const { getLikeByResAndUser } = require("../controllers/likeController");

likeRoute.get("/list", getLikeByResAndUser);

module.exports = likeRoute;
