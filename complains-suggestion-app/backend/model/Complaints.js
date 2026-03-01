const mongoose = require("../config/dbConfig");

const complaintSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },

  complaint: { type: String },

  date: { type: String },

  sid: { type: Number },

  aid: { type: Number },

  status: {
    type: String,
    default: "PENDING",
  },
});

const Complaints = mongoose.model("Complaints", complaintSchema);

module.exports = Complaints;
