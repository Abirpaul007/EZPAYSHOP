const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  image: String,  // Added image
  price: Number,
  quantity: Number
});

module.exports = mongoose.model("Product", productSchema);
