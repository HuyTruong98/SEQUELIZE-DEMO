const User = require("../model/user");
const { Sequelize } = require("sequelize");

const Op = Sequelize.Op;

// Get All User
const getAllUser = async (req, res) => {
  let data = await User.findAll();
  res.status(200).send(data);
};

// Get User By ID
const getUserByID = async (req, res) => {
  let { user_id } = req.params;

  try {
    const user = await User.findByPk(Number(user_id));
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
  res.status(200).send(data);
};

const createUser = async (req, res) => {
  try {
    let { full_name, email, pass_word } = req.body;

    let modelUser = {
      full_name,
      email,
      pass_word,
    };

    await User.create(modelUser);

    res.status(201).send("Create User Success !");
  } catch (err) {
    console.log(err);
    res.status(500).send("ERROR !");
  }
};

const updateUser = async (req, res) => {
  let { user_id } = req.params;
  let { full_name, email, pass_word } = req.body;

  let modelUser = {
    full_name,
    email,
    pass_word,
  };

  await User.update(modelUser, {
    where: {
      user_id,
    },
  });
  res.status(200).send("Update user");
};

const deleteUser = async (req, res) => {
  try {
    let { user_id } = req.params;
    await User.destroy({
      where: {
        user_id,
      },
    });
    res.status(200).send("Delete User Success !");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUser,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
};
