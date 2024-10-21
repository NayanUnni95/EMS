const jwt = require("jsonwebtoken");

const createToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.jwt_secret, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};

module.exports = { createToken };
