const {
  successCode,
  failCode,
  errorCode,
  createCode,
  notFoundCode,
} = require("../config/reponse");

const initModels = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModels(sequelize);

const getFood = async (req, res) => {
  const data = await model.food.findAll();

  // order với user và food
  // const data = await model.food.findAll({
  //   include: ["user_id_user_orders"],
  // });

  try {
    successCode(res, data, "Success");
  } catch (error) {
    console.log(error);
    errorCode(res, "Internal server error !");
  }
};

const getFoodById = async (req, res) => {
  const { food_id } = req.params;

  try {
    const foodById = await model.food.findOne({
      where: {
        food_id,
      },
    }); // không sử dụng findByPK (PK: primary key) thì sử dụng findOne
    if (foodById) {
      successCode(res, foodById, "Success");
    } else {
      notFoundCode(res, "Food not found");
    }
  } catch (error) {
    errorCode(res, "Internal server error !");
  }
};

const createFood = async (req, res) => {
  try {
    const body = req.body;

    await model.food.create(body);

    createCode(res, body, "Create food success !");
  } catch (error) {
    console.log(err);
    errorCode(res, "Internal server error !");
  }
};

const updateFoodById = async (req, res) => {
  try {
    const { food_id } = req.params;

    const body = req.body;

    await model.food.update(body, {
      where: {
        food_id,
      },
    });
    successCode(res, body, "Update success !");
  } catch (error) {
    console.log(error);
    errorCode(res, "Internal server error !");
  }
};

const deleteFoodById = async (req, res) => {
  try {
    const { food_id } = req.params;
    await model.food.destroy({
      where: {
        food_id,
      },
    });
    successCode(res, food_id, `Delete ${food_id} success !`);
  } catch (error) {
    console.log(error);
    errorCode(res, "Internal server error !");
  }
};

module.exports = {
  getFood,
  getFoodById,
  createFood,
  updateFoodById,
  deleteFoodById,
};
