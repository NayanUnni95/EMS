const express = require("express");
const {
  createUser,
  loginUser,
  logoutCurrentUser,
  getCurrentUserProfile,
} = require("../controllers/empController");

const empRouter = express.Router();

empRouter.post("/login", loginUser);
empRouter.get("/logout", logoutCurrentUser);
empRouter.post("/signup", createUser);

module.exports = { empRouter };
