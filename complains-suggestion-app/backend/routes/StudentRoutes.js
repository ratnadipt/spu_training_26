const express = require("express");
const {
  dashboardHandler,
  registerHandler,
  loginHandler,
} = require("../controller/StudentController");
const {
  complaintsHandler,
  allComplaintsHandler,
} = require("../controller/ComplaintsController");
const {
  suggestionsHandler,
  allSuggestionsHandler,
} = require("../controller/SuggestionsController");
const router = express.Router();

// end points
// URL : /dashboard
router.get("/dashboard", dashboardHandler);

router.post("/register", registerHandler);

router.post("/login", loginHandler);

router.post("/complaints", complaintsHandler);

router.post("/suggestions", suggestionsHandler);

router.get("/all-complaints", allComplaintsHandler);

router.get("/all-suggestions", allSuggestionsHandler);

module.exports = router;
