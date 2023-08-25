const express = require("express");
const rootRoute = express.Router();

const userRoute = require("./userRoute");
const foodRoute = require("./foodRouter");
const likeRoute = require("./likeRouter");
const rateRoute = require("./rateRouter");

rootRoute.use("/user", userRoute);
rootRoute.use("/food", foodRoute);
rootRoute.use("/like", likeRoute);
rootRoute.use("/rate", rateRoute);

module.exports = rootRoute;
