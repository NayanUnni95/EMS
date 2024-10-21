const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const { dashboard, oneEmp, addEmp, allEmp } = require("./routes/employee");
const { attDetails } = require("./routes/attendance");
const { expData } = require("./routes/experience");
const { salaryDetails } = require("./routes/salary");
// const { adminValidate } = require("./routes/adminLogin");
const { empLogin, empSignup } = require("./routes/empAuth");
const { createUser, loginUser } = require("./controllers/userController");
const { loginAdmin, logoutAdmin } = require("./controllers/adminController");
require("dotenv").config();

const port = process.env.port;
const corsOpts = {
  origin: "http://localhost:8000",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
};

app.use(cors(corsOpts));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => res.status(200).send("EMS..."));
app.get("/api/employees", dashboard);
app.get("/api/employee-all-details/:empId", allEmp);
app.get("/api/employee-details/:empId", oneEmp);
app.post("/api/add-employee", addEmp);
app.get("/api/attendance/:empId", attDetails);
app.get("/api/salary/:empId", salaryDetails);
app.get("/api/experience/:empId", expData);
app.post("/api/admin/login", loginAdmin);
// app.post("/api/emp/login", empLogin);
app.post("/api/emp/login", loginUser);
app.post("/api/emp/signup", createUser);

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
