const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { connection } = require("./mysqlConnection");
const { querySet } = require("./query");
const { data } = require("./constant/resData");
const { JSON } = require("mysql/lib/protocol/constants/types");

const port = process.env.port;

const corsOpts = {
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("welcome to Employee Management System...");
});

app.get("/employee-details-data", (req, res) => {
  // connection.connect((error) => {
  //   if (error) {
  //     console.log("Error connecting to database");
  //     res.status(400).send();
  //     return;
  //   }
  //   console.log("Connected to database");
  // });

  connection.query(
    querySet.read("*", "EmployeeDetails", "", 0),
    (error, result, fields) => {
      console.log(result);
      res.send({
        url: `${req.baseUrl}${req.originalUrl}`,
        time: Date.now(),
        details: result,
        isAdmin: false,
      });
    }
  );
});

app.post("/employee-details-data", (res, req) => {
  console.log(req.body);
  res.status(200).send();
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
