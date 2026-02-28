const mongoose = require("../config/dbConfig");
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

module.exports = Student;
