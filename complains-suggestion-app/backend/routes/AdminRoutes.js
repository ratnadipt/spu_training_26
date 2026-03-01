const express = require("express");
const {
  adminRegisterHandler,
  adminLoginHandler,
} = require("../controller/AdminController");
const {
  complaintsHandler,
  updateComplaintStatusByIdHandler,
  allComplaintsHandler,
} = require("../controller/ComplaintsController");
const {
  suggestionsHandler,
  updateSuggestionStatusByIdHandler,
} = require("../controller/SuggestionsController");
const { getAllStudentsHandler } = require("../controller/StudentController");

const router = express.Router();

// end points
router.post("/register", adminRegisterHandler);

router.post("/login", adminLoginHandler);

// complaints
router.get("/complaints", allComplaintsHandler);
router.put("/complaint/:cid/:status", updateComplaintStatusByIdHandler);

// suggestions
router.get("/suggestions", suggestionsHandler);
router.put("/suggestion/:sid/:status", updateSuggestionStatusByIdHandler);

// students
router.get("/student-list", getAllStudentsHandler);

module.exports = router;
