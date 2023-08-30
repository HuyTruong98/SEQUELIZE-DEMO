const jwt = require("jsonwebtoken");
const SECRET_KEY = "private";

const generateToken = (data) => {
  return jwt.sign(data, SECRET_KEY, { expiresIn: "5m" });
};

// kiêm tra token có hợp lệ hay không
const verifyToken = (token) => {
  // const checkToken = jwt.verify(token, SECRET_KEY);
  // return checkToken;
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (error) {
    return null;
  }
};

const decodeToken = (token) => {
  // const decode = jwt.decode(token);
  // return decode;
  try {
    const decoded = jwt.decode(token, { complete: true });
    return decoded;
  } catch (error) {
    return null;
  }
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
