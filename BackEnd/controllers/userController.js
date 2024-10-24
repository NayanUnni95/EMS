const { queryDB } = require("../mysqlConnection");
// const { adminProtect, empProtect } = require("../middleware/authMiddleware");

const query = `SELECT * FROM EmployeeDetails`;

const empBaseDetails = (req, res) => {
  queryDB(query, [])
    .then((result) => {
      res.status(200).send({
        url: `${req.baseUrl}${req.originalUrl}`,
        time: Date.now(),
        details: result,
        isAdmin: true,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).send({ error: "Database query failed" });
    });
};
const addEmp = (req, res) => {
  const {
    name,
    userName,
    pass,
    email,
    department,
    designation,
    phoneNo,
    description,
    dob,
    gender,
    status,
    quality,
  } = req.body;
  // console.log(req.body);

  const selectQuery = `SELECT details_id, employee_id FROM EmployeeDetails`;
  const insertQuery = `INSERT INTO EmployeeDetails (details_id, employee_id, admin_id, employee_name, email, phone_number, department, designation, DOB, Status, Gender, Description, Quality)
VALUES`;
  const registerQuery = `INSERT INTO EmployeeLogin (employee_id, admin_id, employee_username, employee_password)
VALUES `;
  queryDB(selectQuery, [])
    .then((result) => {
      const employee_id = result.at(-1).employee_id + 1;
      const details_id = result.at(-1).details_id + 1;
      queryDB(
        `${registerQuery} (${employee_id}, NULL, '${userName}', '${pass}');`,
        [],
      )
        .then((result) => {
          queryDB(
            `${insertQuery} (${details_id}, ${employee_id}, NULL, '${name}', '${email}', '${phoneNo}', '${department}', '${designation}', '${dob}', ${status}, '${gender}', '${description}', ${quality});`,
            [],
          )
            .then((result) => {
              console.log("Added Success");
              res.status(200).send("Added Success");
            })
            .catch((error) => {
              console.log(error);
              return res.status(500).send({ error: "Database query failed" });
            });
        })
        .catch((error) => {
          console.log(error);
          return res.status(500).send({ error: "Database query failed" });
        });
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).send({ error: "Database query failed" });
    });

  // res.status(200).send("Added Success");
};
const removeEmp = (req, res) => {
  const { empId } = req.body;
  console.log(empId);
  const query = `DELETE FROM EmployeeLogin WHERE employee_id=${empId};`;
  queryDB(query, [])
    .then((result) => {
      return res.status(200).send("Removed Success");
    })
    .catch((error) => {
      console.error("Error fetching employee data:", error);
      return res.status(500).send("Error fetching employee data");
    });
};
const editEmp = (req, res) => {
  console.log(req.body);
  res.status(200).send("Edited Success");
};
const empAllDetails = async (req, res) => {
  const { empId } = req.body;

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
    // res.status(200).send("succes");
  } catch (error) {
    console.error("Error fetching employee data:", error);
    res.status(500).send("Error fetching employee data");
  }
};
const oneEmp = (req, res) => {
  const { empId } = req.body;
  console.log(empId);

  queryDB(`${query} WHERE employee_id=${empId};`, [])
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).send({ error: "Database query failed" });
    });
};
const attendance = (req, res) => {
  const { empId, days_worked, total_working_days, attendance_percentage } =
    req.body;
  // console.log(req.body);
  const query = `INSERT INTO Attendance (emp_id, admin_id, days_worked, total_working_days, attendance_percentage)
VALUES (${empId}, NULL, ${days_worked}, ${total_working_days}, ${attendance_percentage})`;
  queryDB(query, [])
    .then((result) => {
      res.status(200).send("ok");
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).send({ error: "Database query failed" });
    });
};
const fetchAttendance = (req, res) => {
  const { empId } = req.body;
  // console.log(req.body);
  const query = `SELECT * FROM Attendance WHERE emp_id=${empId}`;
  queryDB(query, [])
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).send({ error: "Database query failed" });
    });
};
const salary = (req, res) => {
  const { empId, basic_pay, allowance, bonus, total_salary } = req.body;
  const query = `INSERT INTO Salary (employee_id, admin_id, basic_pay, allowance, bonus, total_salary)
VALUES (${empId}, NULL, ${basic_pay}, ${allowance}, ${bonus}, ${total_salary})`;
  queryDB(query, [])
    .then((result) => {
      res.status(200).send("ok");
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).send({ error: "Database query failed" });
    });
};
const fetchSalary = (req, res) => {
  const { empId } = req.body;
  // console.log(req.body);
  const query = `SELECT * FROM Salary WHERE employee_id=${empId};`;
  queryDB(query, [])
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).send({ error: "Database query failed" });
    });
};
const experience = (req, res) => {
  const { empId, previous_company, start_date, end_date, years_of_experience } =
    req.body;

  const query = `INSERT INTO Experience (employee_id, admin_id, previous_company, start_date, end_date, years_of_experience)
VALUES (${empId}, NULL, '${previous_company}', '${start_date}', '${end_date}', '${years_of_experience}');`;
  queryDB(query, [])
    .then((result) => {
      res.status(200).send("ok");
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).send({ error: "Database query failed" });
    });
};
const fetchExperience = (req, res) => {
  const { empId } = req.body;
  const query = `SELECT * FROM Experience WHERE employee_id=${empId}`;
  queryDB(query, [])
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).send({ error: "Database query failed" });
    });
};

module.exports = {
  empBaseDetails,
  addEmp,
  empAllDetails,
  oneEmp,
  removeEmp,
  editEmp,
  attendance,
  fetchAttendance,
  salary,
  fetchSalary,
  experience,
  fetchExperience,
};
