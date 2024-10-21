const { queryDB } = require("../mysqlConnection");
const { createToken } = require("../utils/createToken");

const loginAdmin = (req, res) => {
  const { username, password } = req.body.userCredential;
  const loginTableQuery = `SELECT * FROM Admin WHERE admin_username="${username}" AND admin_password="${password}";`;

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

const logoutAdmin = (req, res) => {
  res.cookie("jwt", "", {
    httyOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
};

module.exports = { loginAdmin, logoutAdmin };
