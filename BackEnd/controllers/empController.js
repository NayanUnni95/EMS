const { queryDB } = require("../mysqlConnection");
const { createToken } = require("../utils/createToken");

const createUser = (req, res) => {
  const { username, password } = req.body.userCredential;
  const loginTableQuery = `SELECT * FROM EmployeeLogin WHERE employee_username="${username}" AND employee_password="${password}";`;
  const registerQuery = `INSERT INTO EmployeeLogin (employee_id, employee_username, employee_password) VALUES `;
  const selectTable = `SELECT employee_id, employee_username FROM EmployeeLogin`;
  console.log(req.body.userCredential);
  // console.log(password);

  if (!username || !password)
    return res.status(200).send({ message: "Please fill all fields" });
  queryDB(loginTableQuery, [])
    .then((result) => {
      if (result.length > 0) return res.status(304).send("User already exist");
      queryDB(selectTable, []).then((result, error) => {
        const index = result.at(-1).employee_id + 1;
        queryDB(
          `${registerQuery} (${index}, '${username}', '${password}');`,
          [],
        )
          .then((result, error) => {
            queryDB(`${selectTable} WHERE employee_id=${index};`, []).then(
              (result, error) => {
                createToken(res, result[0]);
                return res.status(200).json({
                  id: result[0].employee_id,
                  userName: result[0].employee_username,
                });
              },
            );
          })
          .catch((error) => {
            console.log(error);
          });
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ error: "Database query failed" });
    });
};
const loginUser = (req, res) => {
  const { username, password } = req.body.userCredential;
  const loginTableQuery = `SELECT * FROM EmployeeLogin WHERE employee_username="${username}" AND employee_password="${password}";`;
  //   console.log(req.cookies);

  if (!username || !password)
    return res.status(200).send({ message: "Please fill all fields" });

  queryDB(loginTableQuery, []).then((result) => {
    if (result.length > 0) {
      createToken(res, result[0].employee_id);
      return res.status(200).json({
        id: result[0].employee_id,
        userName: result[0].employee_username,
      });
    }
    return res.status(200).send({ message: "Invalid credentials" });
  });
};

const logoutCurrentUser = (req, res) => {
  res.cookie("jwt", "", {
    httyOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
};

const getCurrentUserProfile = (req, res) => {
  const { username, password } = req.body.userCredential;
  const loginTableQuery = `SELECT * FROM EmployeeLogin WHERE employee_username="${username}" AND employee_password="${password}";`;

  queryDB(loginTableQuery, []).then((result) => {
    if (result.length > 0) {
      return res.status(201).json({
        id: result[0].employee_id,
        userName: result[0].employee_username,
      });
    }
  });
  res.status(404).send("User not found");
};

module.exports = {
  createUser,
  loginUser,
  logoutCurrentUser,
  getCurrentUserProfile,
};
