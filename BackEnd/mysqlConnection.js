const mysql = require("mysql");
require("dotenv").config();

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.host || process.env.ip,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});
const queryDB = (query, params = [], callback) => {
  pool.getConnection((err, connection) => {
    if (err) {
      return callback(err, null);
    }
    connection.query(query, (err, result) => {
      connection.release();
      if (err) {
        return callback(err, null);
      }
      callback(null, result);
    });
  });
};
module.exports = { queryDB };
