const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors()); // Use this after the variable declaration

app.use(express.json());

// Route Imports
const student = require("./routes/student");
const course = require("./routes/course");
const sales = require("./routes/salesData");

app.use("/api/v1", student);
app.use("/api/v1", course);
app.use("/api/v1", sales);

module.exports = app;
