const express = require("express");
const cors = require("cors");
const app = express();
const { dashboard, oneEmp, addEmp, allEmp } = require("./routes/employee");
const { attDetails } = require("./routes/attendance");
const { expData } = require("./routes/experience");
const { salaryDetails } = require("./routes/salary");
const { adminValidate } = require("./routes/adminLogin");
const { empLogin, empSignup } = require("./routes/empAuth");
require("dotenv").config();

const port = process.env.port;
const corsOpts = {
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.status(200).send("EMS..."));
app.get("/employees", dashboard);
app.get("/employee-all-details/:empId", allEmp);
app.get("/employee-details/:empId", oneEmp);
app.post("/add-employee", addEmp);
app.get("/attendance/:empId", attDetails);
app.get("/salary/:empId", salaryDetails);
app.get("/experience/:empId", expData);
app.post("/admin/login", adminValidate);
app.post("/emp/login", empLogin);
app.post("/emp/signup", empSignup);

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
