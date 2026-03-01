const express = require("express");
const {
  adminRegisterHandler,
  adminLoginHandler,
} = require("../controller/AdminController");

const router = express.Router();

// end points
router.post("/register", adminRegisterHandler);

router.post("/login", adminLoginHandler);

module.exports = router;
