const express = require("express");
const router = express.Router();
const User = require("../shared/db_schema");

const {
  encryptPasswordFunc,
  decryptPasswordFunc,
} = require("../util/hashFunc");

router.get("/", (req, res) => {
  res.send("reached user route");
});

router.post("/register", async (req, res) => {
  const { email, name, password } = req.body;
  try {
    if (!email || !name || !password) {
      return res.status(400).send({ msg: "No empty values accepted" });
    }

    const duplicateData = await User.findOne({ email });
    if (duplicateData) {
      return res.status(400).send({ msg: "Email Already exists" });
    }

    const hashedPassword = await encryptPasswordFunc(password);
    const result = await User.create({ email, name, password: hashedPassword });

    res.send(result);
  } catch (e) {
    console.log(e, "err");
    res.status(400).send({ msg: "Error in registering User" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).send({ msg: "No empty values accepted" });
    }

    const userData = await User.findOne({ email });
    if (!userData) {
      return res.status(400).send({ msg: "Wrong email/password" });
    }

    const hashedPassword = userData.password;
    const passwordMatch = await decryptPasswordFunc(password, hashedPassword);
    if (!passwordMatch) {
      return res.status(400).send({ msg: "Wrong email/password" });
    }

    res.json({ email, id: userData._id, msg: "HiFi" });
  } catch (e) {
    console.log(e, "err");
    res.status(400).send({ msg: "Error in User login" });
  }
});

module.exports = router;
