const Course = require("../models/Course");

// Create Course
exports.createCourse = async (req, res, next) => {
  const course = await Course.create(req.body);
  res.status(201).json({
    sucess: true,
    course,
  });
};

// Get All Student
exports.getAllCourses = async (req, res) => {
  const courses = await Course.find();
  res.status(200).json({
    sucess: true,
    courses,
  });
};
