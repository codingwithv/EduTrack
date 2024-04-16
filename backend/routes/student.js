const express = require("express");
const router = express.Router();
const {
  getAllStudents,
  createStudent,
} = require("../controllers/studentController");

router.route("/students").get(getAllStudents);
router.route("/student/new").post(createStudent);

module.exports = router;
