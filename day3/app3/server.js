// 1 Import dependency
const express = require("express");
// create Express application
const app = express();
// end Points Create
// Which handle the request and send the response.
// Method : GET, POST, PUT, DELETE
// Syntax: app.methodName(url, callback)

// "/" -> Home URL - Main URL - Main Entry Point
app.get("/", (req, res) => {
  // business Logic
  res.write("Congratulatios!");
  res.end();
});

// app.post();

// Start the server.
app.listen(3000, (xyz) => {
  console.log("Server is started successfully.");
});
