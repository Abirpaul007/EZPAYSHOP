const express = require('express');
const router = express.Router();
const Ingredient = require('../models/Ingredient');

router.get('/ingredients', async (req, res) => {
  const { dish } = req.query;
  const items = await Ingredient.find({ dish });
  res.json(items);
});

router.get('/all-ingredients', async (req, res) => {
  const items = await Ingredient.find({});
  res.json(items);
});

router.put('/update-ingredient/:id', async (req, res) => {
  const { id } = req.params;
  await Ingredient.findByIdAndUpdate(id, req.body);
  res.sendStatus(200);
});

module.exports = router;