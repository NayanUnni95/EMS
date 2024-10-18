const crypto = require("crypto");

let empTokenDataCache = [];
let adminTokenDataCache = [];
const generateTokenStructure = (Id, username, password) => {
  const key = crypto.randomBytes(20).toString("hex");
  return {
    userCredentials: {
      Id,
      username,
      password,
    },
    accessToken: key,
  };
};
const updateTokenData = (Id, uname, pass) => {
  const { userCredentials, accessToken } = generateTokenStructure(
    Id,
    uname,
    pass,
  );
  empTokenDataCache.push({ userCredentials, accessToken });
  return accessToken;
};
module.exports = {
  updateTokenData,
  empTokenDataCache,
  adminTokenDataCache,
};
