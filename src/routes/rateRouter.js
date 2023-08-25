const express = require("express");
const rateRoute = express.Router();

const {
  getRateByResAndUser,
  createRate,
} = require("../controllers/rateController");

rateRoute.get("/list", getRateByResAndUser);

rateRoute.post("/create", createRate);

module.exports = rateRoute;
