const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { connection } = require("./mysqlConnection");
const { querySet } = require("./query");
const { data } = require("./constant/resData");

const port = process.env.port;

const corsOpts = {
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));

app.get("/", (req, res) => {
  res.status(200).send("welcome to Employee Management System...");
});

app.get("/employee-details-data", (req, res) => {
  connection.connect((error) => {
    if (error) {
      console.log("Error connecting to database");
      res.status(400).send();
      return;
    }
    console.log("Connected to database");
  });
  if (req.query.id) {
    connection.query(
      querySet.read("*", "EmployeeDetails", `employee_id=${req.query.id}`, 1),
      (error, result, fields) => {
        res.send({
          url: `${req.baseUrl}${req.originalUrl}`,
          data: result,
          isAdmin: false,
        });
      },
    );
  } else {
    connection.query(
      querySet.read("*", "EmployeeDetails", "", 0),
      (error, result, fields) => {
        res.send({
          url: `${req.baseUrl}${req.originalUrl}`,
          time: Date.now(),
          data: result,
          isAdmin: false,
        });
      },
    );
  }
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
