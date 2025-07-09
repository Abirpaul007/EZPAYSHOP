import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const recipes = [
  {
    name: 'Chicken Biryani',
    image: 'https://www.thespruceeats.com/thmb/SalyKjzBU-K1Bv-FTFWnbd6ckjY=/2121x1414/filters:fill(auto,1)/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg',
  },
  {
    name: 'Shorshe Ilish',
    image: 'https://1.bp.blogspot.com/-UmFfW08kniE/X0zPa8XdKAI/AAAAAAAAG2Q/_5VEwC2U06M6ljuhNxIZY4Gbq3k1ais4QCLcBGAsYHQ/s2048/PicsArt_08-30-11.51.22.jpg',
  },
  {
    name: 'Aloo Posto',
    image: 'https://th.bing.com/th/id/R.a9d4b4ecabd22b315fb61fe91fca1fb0?rik=HOsOpC6eIjaaOw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-xgGY7XL5oc0%2fVBVE3RhpNGI%2fAAAAAAAAJAg%2fkDnbZ96HV3Q%2fs1600%2fAloo-Posto.jpg&ehk=6GOM%2bXIaqlMtEHw9eqVp18qXi9tnuYHcV4h%2bYWpzYyg%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    name: 'Chingri Malai Curry',
    image: 'https://thaka.bing.com/th/id/OIP.vQDXOw-S2YGi_CVMarqAqgHaLG?w=801&h=1200&rs=1&pid=ImgDetMain',
  },
  {
    name: 'Begun Bharta',
    image: 'https://vegecravings.com/wp-content/uploads/2023/01/Baingan-Bharta-Recipe-Step-By-Step-Instructions-scaled.jpg',
  },
  {
    name: 'Macher Jhol',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiczfZ4kKvouIi86OaTm2L22yw0gIukYqKVxnH2qr76LYAnEbqTLbc034bT4anZULTDqoBr5e4_gXVqIwIkFq5Q2RlXrd8hEhe1-YcUk4Tq0UghQ93_7BSWNLBEolvxYIkKBEdGJF9mhPM/s1600/Rui+Macher+Jhol+2.JPG',
  },
  {
    name: 'Pulao',
    image: 'https://kohinoor-joy.com/wp-content/uploads/2020/11/veg-pulao.jpg',
  },
  {
    name: 'Kosha Mangsho',
    image: 'https://www.whiskaffair.com/wp-content/uploads/2019/02/Kosha-Mangsho-2-2.jpg',
  },
];

export default function RecipeScreen() {
  const [selected, setSelected] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  const fetchIngredients = async (dish) => {
    try {
      const res = await axios.get(`http://192.168.22.99:6000/api/ingredients?dish=${dish}`);
      setIngredients(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Explore Recipes</Text>
      {recipes.map((recipe, index) => (
        <View key={index} style={styles.recipeCard}>
          <TouchableOpacity
            onPress={() => {
              setSelected(recipe.name);
              fetchIngredients(recipe.name);
            }}
            style={styles.touchWrapper}
          >
            <Image source={{ uri: recipe.image }} style={styles.image} />
            <Text style={styles.recipeTitle}>{recipe.name}</Text>
          </TouchableOpacity>

          {selected === recipe.name && (
            <View style={styles.ingredientsSection}>
              <Text style={styles.ingredientHeader}>Ingredients</Text>
              {ingredients.map((item, idx) => (
                <View key={idx} style={styles.ingredientBox}>
                  <Text style={styles.ingredientText}>🧂 {item.name}</Text>
                  <Text style={styles.detailText}>Section: {item.section}</Text>
                  <Text style={styles.detailText}>Rack: {item.rack}</Text>
                  <Text style={styles.detailText}>Price: ₹{item.price}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f6f9fe',
    paddingBottom: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2d3436',
  },
  recipeCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  touchWrapper: {
    alignItems: 'center',
    padding: 12,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#34495e',
    textAlign: 'center',
  },
  ingredientsSection: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  ingredientHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginVertical: 10,
  },
  ingredientBox: {
    backgroundColor: '#ecf0f1',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
  },
  ingredientText: {
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 2,
  },
  detailText: {
    fontSize: 13,
    color: '#555',
  },
});
