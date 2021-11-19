const express = require("express");
const router = express.Router();
const User = require("../shared/db_schema");

const { encrypt, decryptPasswordFunc } = require("../util/hashFunc");

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

    const hashedPassword = await encrypt(password);
    const result = await User.create({ email, name, password: hashedPassword });

    res.send(result);
  } catch (e) {
    console.log(e, "err");
    res.status(400).send({ msg: "Error in registering User" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  res.json({ email, password });
});

module.exports = router;
