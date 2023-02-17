const express = require("express");
const router = express.Router({ mergeParams: true });

const { getNotes, addNotes } = require("../controllers/noteControllers");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getNotes).post(protect, addNotes);

module.exports = router;
