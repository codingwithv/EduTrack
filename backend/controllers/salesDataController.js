const SalesData = require("../models/SalesData");

// Get All Sales
exports.getAllSales = async (req, res) => {
  const sales = await SalesData.find();
  res.status(200).json({
    sucess: true,
    sales,
  });
};
