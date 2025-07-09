const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  name: String,
  dish: String,
  section: String,
  rack: String,
  price: Number,
});

module.exports = mongoose.model('Ingredient', ingredientSchema);