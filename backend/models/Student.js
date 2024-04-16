const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Email"],
  },
  phone: {
    type: String,
    required: [true, "Please Enter Phone Number"],
  },
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
  },
  mode: {
    type: "String",
  },
  courses_enrolled: [{ type: "String" }],
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
