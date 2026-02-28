const mongoose = require("../config/dbConfig");
// Question Schema & Model
const questionSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  questionTitle: {
    type: String,
  },
  optionA: {
    type: String,
  },
  optionB: {
    type: String,
  },
  optionC: {
    type: String,
  },
  optionD: {
    type: String,
  },
  answer: {
    type: String,
  },
});

const Question = mongoose.model("Question", questionSchema); // questions

module.exports = Question;
