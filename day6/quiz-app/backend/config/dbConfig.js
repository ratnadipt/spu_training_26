const mongoose = require("mongoose");
// DB Connection
mongoose
  .connect("mongodb://localhost:27017/quiz_db")
  .then(() => {
    console.log("connected...");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
