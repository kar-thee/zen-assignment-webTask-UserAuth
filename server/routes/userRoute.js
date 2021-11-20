const express = require("express");
const router = express.Router();

const registerControl = require("../controllers/register_control");
const loginControl = require("../controllers/login_control");
const forgotPasswordControl = require("../controllers/forgotPass_control");
const resetPasswordControl = require("../controllers/resetPass_control");

router.get("/", (req, res) => {
  res.send("reached user route");
});

router.post("/register", registerControl);

router.post("/login", loginControl);

router.post("/forgot-password", forgotPasswordControl);

router.post("/resetPassword", resetPasswordControl);

module.exports = router;
