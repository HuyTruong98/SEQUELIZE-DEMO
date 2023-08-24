const express = require("express");
const foodRoute = express.Router();

const {
  getFood,
  getFoodById,
  createFood,
  updateFoodById,
  deleteFoodById,
} = require("../controllers/foodController");

foodRoute.get("/list", getFood);

foodRoute.get("/:food_id", getFoodById);

foodRoute.post("/create", createFood);

foodRoute.put("/update/:food_id", updateFoodById);

foodRoute.delete("/delete/:food_id", deleteFoodById);

module.exports = foodRoute;
