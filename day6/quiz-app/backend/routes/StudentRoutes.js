const express = require("express");
const router = express.Router();
const Student = require("../model/Student");
// End Points
router.post("/register", async (req, res) => {
  const data = req.body;
  await Student.create(data);
  res.send({ message: "Registration Successfully...!", status: true });
  res.end();
});

router.post("/login", async (req, res) => {
  let { userName, uPassword } = req.body;
  const x = await Student.find({ userName: userName, sPassword: uPassword });
  if (x.length == 0) {
    res.send({ message: "No Student Found!", status: false });
  } else {
    res.send({ data: x[0], status: true });
  }
  res.end();
});

module.exports = router;
