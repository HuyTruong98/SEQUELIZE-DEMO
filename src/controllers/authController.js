// authentication => xác minh user

const { verifyToken } = require("../config/jwt");

// authorization => ủy quyền user (phân quyền)

const checkToken = (req, res, next) => {
  const { token } = req.headers;

  try {
    if (verifyToken(token)) {
      // token hợp lệ
      next();
    }
    //  true thì next
    // false thì res.send("token sai")
  } catch (error) {
    res.status(401).send(error);
  }
};

module.exports = {
  checkToken,
};
