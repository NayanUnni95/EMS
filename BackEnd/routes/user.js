const express = require("express");
const { adminProtect, empProtect } = require("../middleware/authMiddleware");
const {
  empBaseDetails,
  empAllDetails,
  addEmp,
  oneEmp,
  editEmp,
  removeEmp,
  attendance,
  fetchAttendance,
  salary,
  fetchSalary,
  experience,
  fetchExperience,
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/employees", adminProtect, empBaseDetails);
userRouter.post("/employee-all-details", adminProtect || empProtect, oneEmp);
userRouter.post("/employee-attendance", adminProtect || empProtect, attendance);
userRouter.post("/emp-attendance", adminProtect || empProtect, fetchAttendance);

// userRouter.get("/employee-salary", adminProtect || empProtect, oneEmp);
// userRouter.get("/employee-experience", adminProtect || empProtect, oneEmp);

userRouter.post("/employee-salary", adminProtect || empProtect, salary);
userRouter.post("/emp-salary", adminProtect || empProtect, fetchSalary);

userRouter.post("/employee-experience", adminProtect || empProtect, experience);
userRouter.post("/emp-experience", adminProtect || empProtect, fetchExperience);

userRouter.get("/employee-details", adminProtect || empProtect, oneEmp);
userRouter.post("/add-employee", adminProtect || empProtect, addEmp);
userRouter.post("/edit-employee", adminProtect || empProtect, editEmp);
userRouter.post("/remove-employee", adminProtect || empProtect, removeEmp);

module.exports = { userRouter };
