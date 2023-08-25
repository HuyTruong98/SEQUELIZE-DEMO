const { successCode, errorCode, notFoundCode } = require("../config/response");

const initModels = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModels(sequelize);

const getRateByResAndUser = async (req, res) => {
  // get rate_res theo restaurant va user
  const data = await model.rate_res.findAll({
    include: ["re", "user"],
  });

  try {
    if (data) {
      successCode(res, data, "Success");
    } else {
      notFoundCode(res, "Food not found");
    }
  } catch (error) {
    console.log(error);
    errorCode(res, "Internal server error !");
  }
};

const createRate = async (req, res) => {
  // create rate
  try {
    const body = req.body;
    await model.rate_res.create(body);

    createCode(res, body, "Create rate success !");
  } catch (error) {
    console.log(error);
    errorCode(res, "Internal server error !");
  }
};

module.exports = {
  getRateByResAndUser,
  createRate,
};
