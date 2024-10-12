const { queryDB } = require("../mysqlConnection");

const query = `SELECT * FROM EmployeeDetails`;

const dashboard = (req, res) => {
  queryDB(query, [], (error, result) => {
    if (error) {
      res.status(500).send({ error: "Database query error" });
    }
    res.status(200).send({
      url: `${req.baseUrl}${req.originalUrl}`,
      time: Date.now(),
      details: result,
      query,
      isAdmin: false,
    });
  });
};
const oneEmp = (req, res) => {
  const { empId } = req.params;
  queryDB(`${query} WHERE employee_id = ${empId}`, [], (error, result) => {
    if (error) {
      return res.status(500).send({ error: "Database query failed" });
    }
    res.status(200).send({
      url: `${req.baseUrl}${req.originalUrl}`,
      time: Date.now(),
      details: result,
      query: `${query} WHERE employee_id = ${empId}`,
      isAdmin: false,
    });
  });
};
const addEmp = (req, res) => {
  console.log(req.body);
  res.status(200).send("Success");
};

module.exports = { dashboard, oneEmp, addEmp };
