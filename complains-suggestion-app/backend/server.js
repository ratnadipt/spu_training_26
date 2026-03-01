const express = require("express");
const cors = require("cors");
const adminRoutes = require("./routes/AdminRoutes");
const studentRoutes = require("./routes/StudentRoutes");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routers
app.use("/admin", adminRoutes);
app.use("/student", studentRoutes);

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server is Started....!");
});
