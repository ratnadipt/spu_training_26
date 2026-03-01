const mongoose = require("../config/dbConfig");

const suggestionsSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },

  suggestion: { type: String },

  date: { type: String },

  sid: { type: Number },

  aid: { type: Number },

  status: { type: String, default: "PENDING" },
});

const Suggestions = mongoose.model("Suggestions", suggestionsSchema);

module.exports = Suggestions;
