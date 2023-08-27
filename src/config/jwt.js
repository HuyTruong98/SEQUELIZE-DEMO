const jwt = require("jsonwebtoken");

const generateToken = (data) => {
  const token = jwt.sign(data, "private", { expiresIn: "5m" });

  return token;
};

// kiêm tra token có hợp lệ hay không
const verifyToken = (token) => {
  const checkToken = jwt.verify(token, "private");
  return checkToken;
};

const decodeToken = (token) => {
  const decode = jwt.decode(token);
  return decode;
};

module.exports = {
  generateToken,
  verifyToken,
  decodeToken,
};

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InRpdGxlIjoibm9kZSAyOCJ9LCJpYXQiOjE2OTMxMjcyMDMsImV4cCI6MTY5MzEyNzUwM30.YjdjNRFwF-fxxfjuCdWbyTu4
// vVqzFfXqIHiE4j6j8kg

// bearer token

// node src/config/jwt.js
