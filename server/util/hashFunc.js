const bcrypt = require("bcrypt");

const encrypt = async (plainPass) => {
  const salt = await bcrypt.genSalt(12);
  const encryptedData = await bcrypt.hash(plainPass, salt);
  return encryptedData;
};

const decrypt = async (plainPass, hashedPass) => {
  const result = await bcrypt.compare(plainPass, hashedPass);
  return result;
};

module.exports = { encrypt, decrypt };
