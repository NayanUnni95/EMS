const express = require("express");
const app = express();
require("dotenv").config();
const { connection } = require("./mysqlConnection");
const { data } = require("./constant/resData");

const port = process.env.port;

app.get("/", (req, res) => {
  res.send("welcome to Employee Management System...");
});
app.get("/employee-details-data", (req, res) => {
  res.send(data.employee);
});
app.get("/attendance", (req, res) => {
  res.send(data.attendance);
});
app.get("/salary", (req, res) => {
  res.send(data.salary);
});
app.get("/admin", (req, res) => {
  const uname = req.query.uname;
  const pass = req.query.pass;
  if ((uname == "nayan") & (pass == "nayan12345")) {
    res.send(data.admin);
  } else {
    res.send("Invalid User");
  }
});
app.get("/emp", (req, res) => {
  res.send(data.emp);
});
app.get("/experience", (req, res) => {
  res.send(data.experience);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
