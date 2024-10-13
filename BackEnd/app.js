const express = require("express");
const cors = require("cors");
const app = express();
const { dashboard, oneEmp, addEmp, allEmp } = require("./routes/employee");
const { attDetails } = require("./routes/attendance");
const { expData } = require("./routes/experience");
const { salaryDetails } = require("./routes/salary");
const { adminValidate } = require("./routes/adminLogin");
const { empValidate } = require("./routes/empLogin");
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
app.get("/admin/login", adminValidate);
app.get("/emp/login", empValidate);

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
