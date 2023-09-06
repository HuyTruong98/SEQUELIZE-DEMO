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
const bcrypt = require("bcrypt");
const { generateToken } = require("../config/jwt");

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

const signUp = async (req, res) => {
  try {
    const { full_name, email, pass_word } = req.body;
    console.log(req.body);

    const modelUser = {
      full_name,
      email,
      pass_word: bcrypt.hashSync(pass_word, 10),
    };

    const checkEmail = await model.user.findOne({
      where: {
        email,
      },
    });

    if (checkEmail) {
      failCode(res, email, "Email already exists !");
    } else {
      await model.user.create(modelUser);
      createCode(res, modelUser, "Create User Success !");
    }
  } catch (err) {
    console.log(err);
    errorCode(res, "Internal server error !");
  }
};
// đăng ký => lấy thông tin user => mã pwd => lưu data xuống database
// login => kiếm tra email => kiếm tra pwd (hàm mã hóa)

const login = async (req, res) => {
  const { email, pass_word } = req.body;

  const checkEmail = await model.user.findOne({
    where: {
      email,
    },
  });

  if (checkEmail) {
    // check password dữ liệu thô và dữ liệu đã mã hóa
    const checkPass = bcrypt.compareSync(pass_word, checkEmail.pass_word);

    if (checkPass) {
      const token = generateToken({ data: { ...checkEmail, pass_word: "" } });
      // login thanh cong
      successCode(res, token, "Login success.");
    } else {
      failCode(res, "", "Password is incorrect !");
    }
  } else {
    failCode(res, "", "Email is incorrect !");
  }
};

module.exports = {
  getAllUser,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
  signUp,
  login,
};
