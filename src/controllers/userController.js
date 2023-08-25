// const User = require("../models/user");
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

// Get All User
const getAllUser = async (req, res) => {
  let data = await model.user.findAll();
  try {
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

// Get User By ID
const getUserByID = async (req, res) => {
  let { user_id } = req.params;

  try {
    const user = await model.user.findByPk(Number(user_id));
    if (user) {
      // res.status(200).send(user);
      successCode(res, user, "Success");
    } else {
      notFoundCode(res, "User not found");
      // res.status(404).send("User not found");
    }
  } catch (error) {
    errorCode(res, "Internal server error !");
  }
  // res.status(200).send(data);
};

const createUser = async (req, res) => {
  try {
    let { full_name, email, pass_word } = req.body;

    let modelUser = {
      full_name,
      email,
      pass_word,
    };

    await model.user.create(modelUser);

    createCode(res, modelUser, "Create User Success !");
    // res.status(201).send("Create User Success !");
  } catch (err) {
    console.log(err);
    errorCode(res, "Internal server error !");
    // res.status(500).send("ERROR !");
  }
};

const updateUser = async (req, res) => {
  try {
    let { user_id } = req.params;
    let { full_name, email, pass_word } = req.body;

    let modelUser = {
      full_name,
      email,
      pass_word,
    };

    await model.user.update(modelUser, {
      where: {
        user_id,
      },
    });
    // res.status(200).send("Update user");
    successCode(res, modelUser, "Update user");
  } catch (error) {
    console.log(error);
    errorCode(res, "Internal server error !");
  }
};

const deleteUser = async (req, res) => {
  try {
    let { user_id } = req.params;
    await model.user.destroy({
      where: {
        user_id,
      },
    });
    successCode(res, "", "Success");
    // res.status(200).send("Delete User Success !");
  } catch (error) {
    console.log(error);
    errorCode(res, "Internal server error !");
  }
};

module.exports = {
  getAllUser,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
};
