const User = require("../shared/db_schema");

const resetPasswordControl = async (req, res) => {
  //check data from req.body and check jwtcode and then check resetcode
  //available in db...also accept new password
};
module.exports = resetPasswordControl;
