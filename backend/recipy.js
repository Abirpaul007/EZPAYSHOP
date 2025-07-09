const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://abirpaulbkp:IoHpDrUCl12xCl8t@cluster0.jmnactn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('✅ Connected to MongoDB');
});

// Ingredient Schema & Model
const ingredientSchema = new mongoose.Schema({
  name: String,
  dish: String,
  section: String,
  rack: String,
  price: Number,
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

// Initialize Express
const app = express();

// ✅ Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Sample API Route - Get ingredients grouped by dish
app.get('/api/ingredients', async (req, res) => {
    try {
      const { dish } = req.query;
      const filter = dish ? { dish } : {}; // if no dish is provided, return all
      const data = await Ingredient.find(filter);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch ingredients' });
    }
  });
  

// API to update item position/price by ID
app.put('/api/ingredients/:id', async (req, res) => {
  try {
    const updated = await Ingredient.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update ingredient' });
  }
});
//admin
app.get('/api/all-ingredients', async (req, res) => {
    try {
      const data = await Ingredient.find();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch ingredients' });
    }
  });
  app.put('/api/update-ingredient/:id', async (req, res) => {
    try {
      const updated = await Ingredient.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updated);
    } catch (error) {
      res.status(400).json({ error: 'Failed to update ingredient' });
    }
  });
  
// Start server
const PORT = 6000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
