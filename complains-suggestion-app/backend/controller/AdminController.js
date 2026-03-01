const Admin = require("../model/Admin");

const adminRegisterHandler = async (req, res) => {
  // logic
  await Admin.create(req.body);
  res.send({ message: "Admin Created Successfully!", status: true });
  res.end();
};

const adminLoginHandler = async (req, res) => {
  // logic
  const { email, password } = req.body;
  const x = await Admin.find({ email: email, password: password });
  if (x.length == 0) {
    res.send({ message: "No Admin Found!", status: false });
  } else {
    res.send({ data: x[0], status: true });
  }

  res.end();
};

module.exports = { adminLoginHandler, adminRegisterHandler };
