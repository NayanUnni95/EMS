const { queryDB } = require("../mysqlConnection");

const adminValidate = (req, res) => {
  const { uname = "nayan", pass = "nayan@123" } = req.body;
  const query = `SELECT * FROM Admin`;

  queryDB(query, [], (error, result) => {
    if (error) {
      res.status(500).send({ error: "Database query failed" });
    }
    res.status(200).send({
      url: `${req.baseUrl}${req.originalUrl}`,
      time: Date.now(),
      details: result,
      query,
      credentials: {
        uname,
        pass,
      },
      isAdmin: false,
    });
  });
};

module.exports = { adminValidate };
