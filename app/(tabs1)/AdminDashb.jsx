import React, { useEffect, useState } from 'react';
import { Text ,FlatList ,TouchableOpacity} from 'react-native';
import axios from 'axios';
import ProductCard from '../ProductCard'; // make sure the path is correct

export default function AdminProductScreen() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://192.168.22.241:5000/api/products');
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    
    <FlatList
      data={products}
      keyExtractor={item => item._id}
      renderItem={({ item }) => (
        <ProductCard item={item} onUpdated={fetchProducts} />
      )}
    />
    
    
  );
}
