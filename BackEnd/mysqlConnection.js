const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.host || process.env.ip,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});
connection.connect((error) => {
  if (error) {
    console.log("Error connecting to the database ", error);
    return;
  }
  console.log("Connected to database");
});

// connection.query("SELECT * FROM emp", (error, result, fields) => {
//   // console.log(error);
//   console.log(result);
// });

module.exports = { connection };
