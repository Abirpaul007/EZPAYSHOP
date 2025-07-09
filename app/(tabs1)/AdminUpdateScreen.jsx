// AdminUpdateScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

export default function AdminUpdateScreen() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState({});

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await axios.get('http://192.168.22.241:6000/api/all-ingredients');
      setItems(res.data);
    } catch (err) {
      console.error("Error fetching items:", err);
    }
  };
  

  const handleUpdate = async (itemId) => {
    await axios.put(`http://192.168.22.122:6000/api/update-ingredient/${itemId}`, editingItem[itemId]);
    fetchItems(); // Refresh data
  };

  const handleChange = (itemId, field, value) => {
    setEditingItem((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        [field]: value,
      },
    }));
  };

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <View style={styles.itemBox}>
          <Text>{item.name}</Text>
          <TextInput
            placeholder="Section"
            value={editingItem[item._id]?.section || item.section}
            onChangeText={(val) => handleChange(item._id, 'section', val)}
            style={styles.input}
          />
          <TextInput
            placeholder="Rack"
            value={editingItem[item._id]?.rack || item.rack}
            onChangeText={(val) => handleChange(item._id, 'rack', val)}
            style={styles.input}
          />
          <TextInput
            placeholder="Price"
            value={editingItem[item._id]?.price?.toString() || item.price.toString()}
            onChangeText={(val) => handleChange(item._id, 'price', val)}
            style={styles.input}
            keyboardType="numeric"
          />
          <Button title="Update" onPress={() => handleUpdate(item._id)} />
        </View>
      )}
      
    />
    
        
    
  );
}

const styles = StyleSheet.create({
  itemBox: { padding: 12, marginBottom: 10, backgroundColor: '#fff' },
  input: { borderBottomWidth: 1, marginBottom: 6 },
});
