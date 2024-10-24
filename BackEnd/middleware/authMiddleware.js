const jwt = require("jsonwebtoken");
const { queryDB } = require("../mysqlConnection");

const adminProtect = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    try {
      const decode = jwt.verify(token, process.env.jwt_secret);
      // console.log(decode);
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed.");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token.");
  }
};

const empProtect = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    try {
      const decode = jwt.verify(token, process.env.jwt_secret);
      // console.log(decode);
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed.");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token.");
  }
};

module.exports = { adminProtect, empProtect };
