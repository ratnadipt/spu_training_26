const mongoose = require("../config/dbConfig");

const adminSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  adminId: {
    type: String,
  },
  adminPass: {
    type: String,
  },
});

const Admin = mongoose.model("Admin", adminSchema); // admins

module.exports = Admin;
