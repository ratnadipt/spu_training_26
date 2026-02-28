const express = require("express");
const cors = require("cors");

const adminRoutes = require("./AdminRoutes");
const studentRoutes = require("./routes/StudentRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// use routers
app.use("/admin", adminRoutes);
app.use("/student", studentRoutes);

app.listen(3000);
