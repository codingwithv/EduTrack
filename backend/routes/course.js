const express = require("express");
const router = express.Router();
const {
  getAllCourses,
  createCourse,
} = require("../controllers/courseController");

router.route("/courses").get(getAllCourses);
router.route("/course/new").post(createCourse);

module.exports = router;
