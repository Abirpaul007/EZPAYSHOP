const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

mongoose.connect('mongodb+srv://abirpaulbkp:IoHpDrUCl12xCl8t@cluster0.jmnactn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const ProductSchema = new mongoose.Schema({
  productId: String,
  name: String,
  price: Number
});

const Product = mongoose.model('Product', ProductSchema);

app.get('/api/product/:productId', async (req, res) => {
  const product = await Product.findOne({ productId: req.params.productId });
  if (!product) return res.status(404).send('Product not found');
  res.json(product);
});

app.listen(7000, () => console.log('Server started on port 7000'));
