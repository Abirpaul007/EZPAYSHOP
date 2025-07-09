const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB mongodb+srv://abirpaulbkp:IoHpDrUCl12xCl8t@cluster0.jmnactn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
mongoose.connect('mongodb+srv://abirpaulbkp:IoHpDrUCl12xCl8t@cluster0.jmnactn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB error:", err));

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// POST endpoint to register user
app.post('/api/signup', async (req, res) => {
  const { name, email, contact, password } = req.body;

  if (!name || !email || !contact || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newUser = new User({ name, email, contact, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
