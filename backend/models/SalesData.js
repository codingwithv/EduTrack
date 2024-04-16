const mongoose = require("mongoose");

const salesDataSchema = new mongoose.Schema({
  course_id: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  transaction_date: Date,
  amount: Number,
  payment_method: String,
});

const SalesData = mongoose.model("SalesData", salesDataSchema);

module.exports = SalesData;
