const Student = require("../models/Student");

// Create Student
exports.createStudent = async (req, res, next) => {
  const student = await Student.create(req.body);
  res.status(201).json({
    sucess: true,
    student,
  });
};

// Get All Student
exports.getAllStudents = async (req, res) => {
  const students = await Student.find();
  res.status(200).json({
    sucess: true,
    students,
  });
};
