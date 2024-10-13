const { queryDB } = require("../mysqlConnection");

const query = `SELECT * FROM EmployeeDetails`;

const dashboard = (req, res) => {
  queryDB(query, [])
    .then((result) => {
      res.status(200).send({
        url: `${req.baseUrl}${req.originalUrl}`,
        time: Date.now(),
        details: result,
        query: `${query};`,
        isAdmin: false,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).send({ error: "Database query failed" });
    });
};
const oneEmp = (req, res) => {
  const { empId } = req.params;
  queryDB(`${query} WHERE employee_id = ${empId};`, [])
    .then((result) => {
      res.status(200).send({
        url: `${req.baseUrl}${req.originalUrl}`,
        time: Date.now(),
        details: result,
        query: `${query} WHERE employee_id = ${empId}`,
        isAdmin: false,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).send({ error: "Database query failed" });
    });
};
const addEmp = (req, res) => {
  console.log(req.body);
  res.status(200).send("Success");
};
const allEmp = async (req, res) => {
  const { empId } = req.params;
  try {
    const results = await Promise.all([
      {
        basicDetails: await queryDB(
          `SELECT * FROM EmployeeDetails WHERE employee_id = ${empId};`,
          [],
        ),
      },
      {
        attendance: await queryDB(
          `SELECT * FROM Attendance WHERE emp_id = ${empId};`,
          [],
        ),
      },
      {
        experience: await queryDB(
          `SELECT * FROM Experience WHERE employee_id = ${empId};`,
          [],
        ),
      },
      {
        salary: await queryDB(
          `SELECT * FROM Salary WHERE employee_id = ${empId};`,
          [],
        ),
      },
    ]);

    res.status(200).send(results.flat());
  } catch (error) {
    console.error("Error fetching employee data:", error);
    res.status(500).send("Error fetching employee data");
  }
};

module.exports = { dashboard, oneEmp, addEmp, allEmp };
