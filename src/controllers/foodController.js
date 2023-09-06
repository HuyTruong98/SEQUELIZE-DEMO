const {
  successCode,
  failCode,
  errorCode,
  createCode,
  notFoundCode,
} = require("../config/response");

const initModels = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModels(sequelize);

const { Op } = require("sequelize");

// search theo name hoặc desc
const getFood = async (req, res) => {
  const { keyword, page, perPage } = req.query;
  const options = {
    limit: parseInt(perPage) || 10,
    offset: ((parseInt(page) || 1) - 1) * parseInt(perPage) || 0,
  };

  try {
    let data;

    if (keyword) {
      data = await model.food.findAndCountAll({
        where: {
          [Op.or]: [
            {
              food_name: {
                [Op.like]: `%${keyword}%`,
              },
            },
            {
              desc: {
                [Op.like]: `%${keyword}%`,
              },
            },
          ],
        },
        ...options,
      });
    } else {
      data = await model.food.findAndCountAll(options);
    }

    successCode(res, data, "Success");
  } catch (error) {
    console.error(error);
    errorCode(res, "Internal server error !");
  }
};

// search theo riêng lẻ name hoặc desc
// const getFood = async (req, res) => {
//   const query = req.query;

//   // order với user và food
//   // const data = await model.food.findAll({
//   //   include: ["user_id_user_orders"],
//   // });

//   let whereCondition = {};

//   if (query.food_name) {
//     whereCondition.food_name = {
//       [Op.iLike]: `%${query.food_name}%`,
//     };
//   }

//   if (query.desc) {
//     whereCondition.desc = {
//       [Op.iLike]: `%${query.desc}%`,
//     };
//   }

//   try {
//     const data = await model.food.findAll({
//       where: whereCondition,
//     });

//     successCode(res, data, "Success");
//   } catch (error) {
//     console.log(error);
//     errorCode(res, "Internal server error !");
//   }
// };

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
