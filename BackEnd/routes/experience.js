const { queryDB } = require("../mysqlConnection");

const expData = (req, res) => {
  const { empId } = req.params;
  const query = `SELECT * FROM Experience WHERE employee_id=${empId}`;

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
module.exports = { expData };
