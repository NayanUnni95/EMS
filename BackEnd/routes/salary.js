const { queryDB } = require("../mysqlConnection");

const salaryDetails = (req, res) => {
  const { empId } = req.params;
  const query = `SELECT * FROM Salary WHERE employee_id=${empId}`;

  queryDB(query, [], (error, result) => {
    if (error) {
      return res.status(500).send({ error: "Database query failed" });
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

module.exports = { salaryDetails };
