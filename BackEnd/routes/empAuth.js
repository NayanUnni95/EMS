const { queryDB } = require("../mysqlConnection");
const {
  updateTokenData,
  empTokenDataCache,
} = require("../constant/manageToken");

const empLogin = (req, res) => {
  const { username, password } = req.body.userCredential;
  const query = `SELECT employee_id FROM EmployeeLogin WHERE employee_username="${username}" AND employee_password="${password}";`;

  queryDB(query, [])
    .then((result) => {
      if (result.length > 0) {
        const token = updateTokenData(
          result[0].employee_id,
          username,
          password,
        );
        return res.send({
          endpoint: `${req.baseUrl}${req.originalUrl}`,
          details: result,
          token,
          status: 200,
          time: Date.now(),
          isAdmin: false,
          isPossibleToLogin: true,
        });
      }
      res.send({
        endpoint: `${req.baseUrl}${req.originalUrl}`,
        details: result,
        token: null,
        status: 403,
        time: Date.now(),
        isAdmin: false,
        isPossibleToLogin: false,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ error: "Database query failed" });
    });
};
const empSignup = (req, res) => {
  const { name, username, password, email, phoneNo, designation } =
    req.body.userCredential;

  const empId_query = `SELECT employee_id FROM EmployeeDetails`;

  const EmployeeDetails_query = `INSERT INTO EmployeeDetails(employee_id, employee_name, email, phone_number, designation) VALUES(6, '${name}', '${email}',
${phoneNo}, '${designation}');`;

  const EmployeeLogin_query = `INSERT INTO EmployeeLogin(employee_id, employee_username, employee_password) VALUES(6, '${username}', '${password}');`;
  res.json({
    EmployeeDetails_query,
    EmployeeLogin_query,
  });
  // queryDB(query, [])
  //   .then((result) => {
  //     if (result.length > 0) {
  //       const token = updateTokenData(
  //         result[0].employee_id,
  //         username,
  //         password
  //       );
  //       return res.send({
  //         endpoint: `${req.baseUrl}${req.originalUrl}`,
  //         details: result,
  //         token,
  //         status: 200,
  //         time: Date.now(),
  //         isAdmin: false,
  //         isPossibleToLogin: true,
  //       });
  //     }
  //     res.send({
  //       endpoint: `${req.baseUrl}${req.originalUrl}`,
  //       details: result,
  //       token: null,
  //       status: 403,
  //       time: Date.now(),
  //       isAdmin: false,
  //       isPossibleToLogin: false,
  //     });
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     res.status(500).send({ error: "Database query failed" });
  //   });
};

module.exports = { empLogin, empSignup };
