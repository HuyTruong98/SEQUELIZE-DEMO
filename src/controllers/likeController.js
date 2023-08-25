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
      notFoundCode(res, "Like not found");
    }
  } catch (error) {
    console.log(error);
    errorCode(res, "Internal server error !");
  }
};

const createLike = async (req, res) => {
  // like
  try {
    const body = req.body;

    await model.like_res.create(body);
    createCode(res, body, "Create like success !");
  } catch (error) {
    errorCode(res, "Internal server error !");
  }
};

const unlikeRestaurant = async (req, res) => {
  // unlike theo user_id va res_id
  const userId = parseInt(req.params.userId);
  const resId = parseInt(req.params.resId);
  try {
    const like = await model.like_res.findOne({
      where: {
        user_id: userId,
        res_id: resId,
      },
    });

    if (like) {
      await like.destroy();
      successCode(res, like.user_id, `Delete ${like.user_id} success !`);
    } else {
      notFoundCode(res, "Like not found");
    }
  } catch (error) {
    console.log(error);
    errorCode(res, "Internal server error !");
  }
};

module.exports = {
  getLikeByResAndUser,
  createLike,
  unlikeRestaurant,
};
