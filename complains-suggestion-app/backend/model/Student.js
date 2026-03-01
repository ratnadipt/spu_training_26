const mongoose = require("../config/dbConfig");

const studentSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  sname: {
    type: String,
  },

  mobile: {
    type: String,
  },

  email: {
    type: String,
    unique: true,
  },

  city: {
    type: String,
  },

  department: {
    type: String,
  },

  password: {
    type: String,
    min: 8,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
