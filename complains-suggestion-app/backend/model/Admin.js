const mongoose = require("../config/dbConfig");

const adminSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },

  name: { type: String },

  mobile: { type: String },

  email: { type: String, unique: true },

  password: { type: String, min: 8 },

  department: { type: String },
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
