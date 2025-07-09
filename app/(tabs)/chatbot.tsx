import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import products from '../src/products.json';

export default function ProductChatbot() {
  const [messages, setMessages] = useState([
    { type: 'bot', text: '👋 Hello! Please select a product to know its availability.' }
  ]);
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleProductSelect = (productName) => {
    setSelectedProduct(productName);
    if (!productName) return;

    const product = products.find(p => p.Product === productName);

    // Append user and bot messages
    setMessages(prev => [
      ...prev,
      { type: 'user', text: productName },
      { type: 'bot', text: `✅ Available: ${product.Available_quantity}` },
      { type: 'bot', text: `📝 Message: ${product.Statement}` }
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {messages.map((msg, index) => (
        <View
          key={index}
          style={[styles.messageBubble, msg.type === 'bot' ? styles.bot : styles.user]}
        >
          <Text style={styles.messageText}>{msg.text}</Text>
        </View>
      ))}

      {/* Picker to simulate user input */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue=""
          onValueChange={handleProductSelect}
          style={styles.picker}
        >
          <Picker.Item label="Choose a product..." value="" />
          {products.map((product, index) => (
            <Picker.Item key={index} label={product.Product} value={product.Product} />
          ))}
        </Picker>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60
  },
  messageBubble: {
    padding: 12,
    borderRadius: 15,
    marginVertical: 5,
    maxWidth: '80%'
  },
  bot: {
    backgroundColor: '#e1f5fe',
    alignSelf: 'flex-start'
  },
  user: {
    backgroundColor: '#bbdefb',
    alignSelf: 'flex-end'
  },
  messageText: {
    fontSize: 16
  },
  pickerContainer: {
    marginTop: 15,
    backgroundColor: '#2196f3',
    borderRadius: 15,
    overflow: 'hidden',
    alignSelf: 'center',
    width: '80%'
  },
  picker: {
    height: 50,
    color: '#fff'
  }
});
