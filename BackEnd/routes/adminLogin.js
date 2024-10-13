const { queryDB } = require("../mysqlConnection");

const adminValidate = (req, res) => {
  const { uname = "nayan", pass = "nayan@123" } = req.body;
  const query = `SELECT * FROM Admin`;

  queryDB(query, [])
    .then((result) => {
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
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ error: "Database query failed" });
    });
};

module.exports = { adminValidate };
