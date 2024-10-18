const { queryDB } = require("../mysqlConnection");
const {
  updateTokenData,
  adminTokenDataCache,
} = require("../constant/manageToken");

const adminValidate = (req, res) => {
  const { username, password } = req.body.userCredential;
  const query = `SELECT admin_id, admin_name FROM Admin WHERE admin_username="${username}" AND admin_password="${password}";`;

  queryDB(query, [])
    .then((result) => {
      if (result.length != 0) {
        const token = updateTokenData(result[0].admin_id, username, password);
        return res.send({
          endpoint: `${req.baseUrl}${req.originalUrl}`,
          details: result,
          token,
          status: 200,
          time: Date.now(),
          isAdmin: true,
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

module.exports = { adminValidate };
