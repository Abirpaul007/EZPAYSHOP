import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import axios from 'axios';

export default function ProductCard({ item, onUpdated }) {
  const [price, setPrice] = useState(String(item.price));
  const [quantity, setQuantity] = useState(String(item.quantity));

  const updateProduct = async () => {
    try {
      await axios.put(`http://192.168.22.241:5000/api/products/${item._id}`, {
        price: parseFloat(price),
        quantity: parseInt(quantity)
      });
      onUpdated();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>

      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <Text style={styles.label}>Quantity</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />

      <Button title="Update" onPress={updateProduct} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f1f8e9',
    borderRadius: 10,
    margin: 10,
    padding: 15,
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 5
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10
  },
  label: {
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginLeft: 10
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff'
  }
});
