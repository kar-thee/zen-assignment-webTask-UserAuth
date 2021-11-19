const jwt = require("jsonwebtoken");

const createTokenFunc = () => {
  jwt.sign();
};

const verifyTokenFunc = () => {};

module.exports = { createTokenFunc, verifyTokenFunc };
