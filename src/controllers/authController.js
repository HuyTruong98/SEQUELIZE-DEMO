// authentication => xác minh user

const { verifyToken } = require("../config/jwt");

// authorization => ủy quyền user (phân quyền)

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // try {
  //   if (verifyToken(token)) {
  //     // token hợp lệ
  //     next();
  //   }
  //   //  true thì next
  //   // false thì res.send("token sai")
  // } catch (error) {
  //   res.status(401).send(error);
  // }

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(403).json({ message: "Invalid token" });
  }

  req.user = decoded;
  next();
};

module.exports = {
  authenticateToken,
};
