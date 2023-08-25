const express = require("express");
const foodRoute = express.Router();

const {
  getFood,
  getFoodById,
  createFood,
  updateFoodById,
  deleteFoodById,
} = require("../controllers/foodController");

const { uploadSingle } = require("../controllers/uploadController");
const { upload } = require("../config/uploadConfig");

foodRoute.post("/upload", upload.single("data"), uploadSingle);

foodRoute.get("/list", getFood);

foodRoute.get("/:food_id", getFoodById);

foodRoute.post("/create", createFood);

foodRoute.put("/update/:food_id", updateFoodById);

foodRoute.delete("/delete/:food_id", deleteFoodById);

module.exports = foodRoute;

// 1/project backend của mình (lưu trên server của chính BE)
// 2/ Băm tấm hình này ra mã Base64 => chuỗi string rất dài
// 3/ Lưu trên các server bên thứ 3
