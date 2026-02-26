const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
mongoose
  .connect("mongodb://localhost:27017/quiz_db")
  .then(() => {
    console.log("connected...");
  })
  .catch((err) => {
    console.log(err);
  });

// Schema Design
const studentSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  sName: {
    type: String,
  },
  userName: {
    type: String,
  },
  sEmail: {
    type: String,
  },
  sPassword: {
    type: String,
  },
});

const Student = mongoose.model("Student", studentSchema); // students <- collection

// End Points
app.post("/register", async (req, res) => {
  const data = req.body;
  await Student.create(data);
  res.send({ message: "Registration Successfully...!", status: true });
  res.end();
});

app.post("/login", async (req, res) => {
  let { userName, uPassword } = req.body;
  const x = await Student.find({ userName: userName, sPassword: uPassword });
  if (x.length == 0) {
    res.send({ message: "No Student Found!", status: false });
  } else {
    res.send({ data: x[0], status: true });
  }

  res.end();
});

app.listen(3000);
