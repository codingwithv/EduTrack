const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter Course Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter Course Description"],
  },
  duration: {
    type: Number,
    required: [true, "Please Enter Course Duration"],
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
