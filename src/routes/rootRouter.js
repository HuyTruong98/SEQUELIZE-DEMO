const express = require("express");
const rootRoute = express.Router();

const userRoute = require("./userRoute");
const foodRoute = require("./foodRouter");

rootRoute.use("/user", userRoute);
rootRoute.use("/food", foodRoute);

module.exports = rootRoute;
