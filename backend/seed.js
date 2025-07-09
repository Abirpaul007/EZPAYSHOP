const mongoose = require('mongoose');
const Ingredient = require('./models/Ingredient'); // Adjust path if needed

mongoose.connect('mongodb+srv://abirpaulbkp:IoHpDrUCl12xCl8t@cluster0.jmnactn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ingredients = [
  // Chicken Biryani
  { name: 'Chicken', dish: 'Chicken Biryani', section: 'Meat', rack: '1A', price: 200  },
  { name: 'Basmati Rice', dish: 'Chicken Biryani', section: 'Grains', rack: '2B', price: 120 },
  { name: 'Yogurt', dish: 'Chicken Biryani', section: 'Dairy', rack: '3C', price: 50 },
  { name: 'Biryani Masala', dish: 'Chicken Biryani', section: 'Spices', rack: '4D', price: 40 },
  { name: 'Onions', dish: 'Chicken Biryani', section: 'Vegetables', rack: '2A', price: 30 },
  { name: 'Garlic', dish: 'Chicken Biryani', section: 'Vegetables', rack: '2A', price: 20 },

  // Shorshe Ilish
  { name: 'Hilsa Fish', dish: 'Shorshe Ilish', section: 'Fish', rack: '1B', price: 400 },
  { name: 'Mustard Seeds', dish: 'Shorshe Ilish', section: 'Spices', rack: '4B', price: 35 },
  { name: 'Green Chilies', dish: 'Shorshe Ilish', section: 'Vegetables', rack: '2C', price: 15 },
  { name: 'Mustard Oil', dish: 'Shorshe Ilish', section: 'Oils', rack: '3B', price: 70 },

  // Aloo Posto
  { name: 'Potatoes', dish: 'Aloo Posto', section: 'Vegetables', rack: '2C', price: 25 },
  { name: 'Poppy Seeds', dish: 'Aloo Posto', section: 'Spices', rack: '4C', price: 50 },
  { name: 'Green Chilies', dish: 'Aloo Posto', section: 'Vegetables', rack: '2C', price: 15 },
  { name: 'Mustard Oil', dish: 'Aloo Posto', section: 'Oils', rack: '3B', price: 70 },

  // Chingri Malai Curry
  { name: 'Prawns', dish: 'Chingri Malai Curry', section: 'Fish', rack: '1C', price: 350 },
  { name: 'Coconut Milk', dish: 'Chingri Malai Curry', section: 'Dairy', rack: '3A', price: 60 },
  { name: 'Ginger', dish: 'Chingri Malai Curry', section: 'Vegetables', rack: '2A', price: 20 },
  { name: 'Turmeric', dish: 'Chingri Malai Curry', section: 'Spices', rack: '4C', price: 10 },

  // Begun Bharta
  { name: 'Eggplant', dish: 'Begun Bharta', section: 'Vegetables', rack: '2C', price: 30 },
  { name: 'Mustard Oil', dish: 'Begun Bharta', section: 'Oils', rack: '3B', price: 70 },
  { name: 'Garlic', dish: 'Begun Bharta', section: 'Vegetables', rack: '2A', price: 20 },

  // Macher Jhol
  { name: 'Rohu Fish', dish: 'Macher Jhol', section: 'Fish', rack: '1B', price: 220 },
  { name: 'Potatoes', dish: 'Macher Jhol', section: 'Vegetables', rack: '2C', price: 25 },
  { name: 'Tomatoes', dish: 'Macher Jhol', section: 'Vegetables', rack: '2C', price: 30 },
  { name: 'Cumin Powder', dish: 'Macher Jhol', section: 'Spices', rack: '4B', price: 20 },

  // Kosha Mangsho
  { name: 'Mutton', dish: 'Kosha Mangsho', section: 'Meat', rack: '1A', price: 400 },
  { name: 'Yogurt', dish: 'Kosha Mangsho', section: 'Dairy', rack: '3C', price: 50 },
  { name: 'Onions', dish: 'Kosha Mangsho', section: 'Vegetables', rack: '2A', price: 30 },
  { name: 'Spice Mix', dish: 'Kosha Mangsho', section: 'Spices', rack: '4D', price: 45 },
];

const seed = async () => {
  await Ingredient.deleteMany({});
  await Ingredient.insertMany(ingredients);
  console.log('✅ Seed data inserted');
  mongoose.disconnect();
};

seed();
