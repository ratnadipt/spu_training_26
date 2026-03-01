const express = require("express");
const {
  dashboardHandler,
  registerHandler,
  loginHandler,
} = require("../controller/StudentController");
const {
  complaintsHandler,
  allComplaintsHandler,
  updateComplaintByIdHandler,
  deleteComplaintByIdHandler,
  getComplaintByIdHandler,
} = require("../controller/ComplaintsController");
const {
  suggestionsHandler,
  allSuggestionsHandler,
  updateSuggestionByIdHandler,
  deleteSuggestionByIdHandler,
  getSuggestionByIdHandler,
} = require("../controller/SuggestionsController");
const router = express.Router();

// end points
// URL : /dashboard
router.get("/dashboard", dashboardHandler);

router.post("/register", registerHandler);

router.post("/login", loginHandler);

router.post("/complaints", complaintsHandler);
router.put("/complaints/:id", updateComplaintByIdHandler);
router.delete("/complaints/:id", deleteComplaintByIdHandler);

router.post("/suggestions", suggestionsHandler);
router.put("/suggestions/:id", updateSuggestionByIdHandler);
router.delete("/suggestions/:id", deleteSuggestionByIdHandler);

router.get("/all-complaints", allComplaintsHandler);
router.get("/complaints/:id", getComplaintByIdHandler);

router.get("/all-suggestions", allSuggestionsHandler);
router.get("/suggestions/:id", getSuggestionByIdHandler);

module.exports = router;
