const express = require("express");
const { loginAdmin, logoutAdmin } = require("../controllers/adminController");

const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin);
adminRouter.get("/logout", logoutAdmin);

module.exports = { adminRouter };
