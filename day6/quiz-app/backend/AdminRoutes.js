const express = require("express");
const mongoose = require("./config/dbConfig");

const Student = require("./model/Student");
const Admin = require("./model/Admin");
const Question = require("./model/Question");

const router = express.Router();

// End Points
// Login api
router.post("/login", async (req, res) => {
  const { adminId, adminPass } = req.body;
  const x = await Admin.find({ adminId: adminId, adminPass: adminPass });
  if (x.length == 0) {
    res.send({ message: "No Admin Found!", status: false });
  } else {
    res.send({ data: x[0], status: true });
  }

  res.end();
});

// add questions api
router.post("/add-question", async (req, res) => {
  const data = req.body;
  await Question.create(data);
  res.send({ message: "Question Added Successfully", status: true });
  res.end();
});

// view questions api
router.get("/get-question", async (req, res) => {
  const data = await Question.find();
  res.send(data);
  res.end();
});

// update question api => URL: /update-question/111
router.put("/update-question/:id", async (req, res) => {
  const data = req.body;
  const qid = req.params.id;
  await Question.updateOne({ id: qid }, data);
  res.send({ message: "Question Updated Successfully!", status: true });
  res.end();
});

// delete question api
router.delete("/delete-question/:id", async (req, res) => {
  const data = req.body;
  const qid = req.params.id;
  await Question.deleteOne({ id: qid }, data);
  res.send({ message: "Question Deleted Successfully!", status: true });
  res.end();
});

// view all students api
router.get("/get-students", async (req, res) => {
  const data = await Student.find();
  res.send(data);
  res.end();
});

// view students score api

// view individual student api
router.get("/get-student/:id", async (req, res) => {
  const data = await Student.findOne({ id: req.params.id });
  res.send(data);
  res.end();
});

// view individual student score api

module.exports = router;
