const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://abirpaulbkp:IoHpDrUCl12xCl8t@cluster0.jmnactn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ProductSchema = new mongoose.Schema({
  name: String,
  stock: Number,
  price: Number,
});

const Product = mongoose.model('Product', ProductSchema);

// GET all products
app.get('/products', async (req, res) => {
    console.log('GET /products hit');
  const products = await Product.find();
  res.json(products);
});

// UPDATE stock or price
app.put('/products/:id', async (req, res) => {
  const { stock, price } = req.body;
  const updated = await Product.findByIdAndUpdate(
    req.params.id,
    { stock, price },
    { new: true }
  );
  res.json(updated);
});

const PORT = 1000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
