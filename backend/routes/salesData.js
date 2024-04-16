const express = require("express");
const router = express.Router();
const { getAllSales } = require("../controllers/salesDataController");

router.route("/sales").get(getAllSales);

module.exports = router;
