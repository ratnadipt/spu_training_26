const express = require("express");
const app = express();
// data parse
app.use(express.json());
// Global Variable
let data = []; // empty array
// Get Request - To get all records
app.get("/get-all", (req, res) => {
  res.send(data);
  res.end();
});
// POST Request - To handle data
app.post("/save", (req, res) => {
  // business logic
  // receive data from front end
  console.log(req.body);
  data.push(req.body);
  res.write("Data Stored Successfully!");
  res.end();
});
app.listen(3000);
