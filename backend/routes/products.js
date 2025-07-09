const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Get all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Update product
router.put("/:id", async (req, res) => {
  const { price, quantity } = req.body;
  const updated = await Product.findByIdAndUpdate(
    req.params.id,
    { price, quantity },
    { new: true }
  );
  res.json(updated);
});

module.exports = router;
