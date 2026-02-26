const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/todo_db")
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cors());

const todoSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  taskName: {
    type: String,
  },
  taskDescription: {
    type: String,
  },
  status: {
    type: Boolean,
    default: false,
  },
  taskDate: {
    type: String,
  },
});

const ToDo = mongoose.model("Todo", todoSchema); // todos
// end points
app.get("/get-all", async (req, res) => {
  const data = await ToDo.find();
  res.send(data);
  res.end();
});

app.post("/add", async (req, res) => {
  const data = req.body;
  await ToDo.create(data);
  res.send({ message: "Task Added Successfully!" });
  res.end();
});

app.listen(3000);
