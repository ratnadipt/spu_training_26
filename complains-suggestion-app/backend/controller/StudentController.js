const Student = require("../model/Student");

const dashboardHandler = (req, res) => {
  // logic
  res.write("Success....!");
  res.end();
};

const registerHandler = async (req, res) => {
  // logic
  await Student.create(req.body);
  res.send({ message: "Student Created Successfully!", status: true });
  res.end();
};

const loginHandler = async (req, res) => {
  // logic
  const { email, password } = req.body;
  const x = await Student.find({ email: email, password: password });
  if (x.length == 0) {
    res.send({ message: "No Student Record Found!", status: false });
  } else {
    res.send({ data: x[0], status: true });
  }

  res.end();
};

const getAllStudentsHandler = async (req, res) => {
  // logic
  const data = await Student.find();
  res.send(data);
  res.end();
};
module.exports = {
  dashboardHandler,
  registerHandler,
  loginHandler,
  getAllStudentsHandler,
};
