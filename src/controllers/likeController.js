const { successCode, errorCode, notFoundCode } = require("../config/response");

const initModels = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModels(sequelize);

const getLikeByResAndUser = async (req, res) => {
  // like res với nhà hàng và user
  const data = await model.like_res.findAll({
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

module.exports = {
  getLikeByResAndUser,
};
