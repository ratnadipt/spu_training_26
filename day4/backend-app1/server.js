const express = require("express");
const mongoose = require("mongoose");

// 2. create an express app
const app = express();

// -------------------------------------------
// Connection with Mongo DB using mongoose
mongoose
  .connect("mongodb://localhost:27017/spu_db")
  .then(() => {
    console.log("Connected...!");
  })
  .catch((err) => {
    console.log(err);
  });
// -------------------------------------------

// 3. parse the front end data
app.use(express.json());

// Design Schema
const studentSchema = new mongoose.Schema({
  roll: {
    type: Number,
    unique: true,
  },
  sname: {
    type: String,
  },
  course: {
    type: String,
  },
});

const Student = mongoose.model("Student", studentSchema);
// db -> students
// create end points

// api to show all the records from the DB
app.get("/all", async (req, res) => {
  const data = await Student.find();
  res.send(data);
  res.end();
});

app.post("/add", (req, res) => {
  const data = req.body;
  Student.create(data);
  res.send({ message: "Student Save Successfully!" });
  res.end();
});

// Last : Start server
app.listen(3000);
