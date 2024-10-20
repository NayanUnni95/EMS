const { queryDB } = require("../mysqlConnection");

const attDetails = (req, res) => {
  const { empId } = req.params;
  const query = `SELECT * FROM Attendance WHERE emp_id = ${empId}`;

  queryDB(query, [])
    .then((result) => {
      res.status(200).send({
        url: `${req.baseUrl}${req.originalUrl}`,
        time: Date.now(),
        details: result,
        query: query,
        isAdmin: false,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).send({ error: "Database query failed" });
    });
};

module.exports = { attDetails };
