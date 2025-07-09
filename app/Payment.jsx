import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Payment = () => {
  const handleFindProductPress = () => {
    const url = "https://app.mappedin.com/map/67e8c201104606000b7c8901";
    Linking.openURL(url).catch((err) => console.error("An error occurred", err));
  };

  return (
    <View style={styles.wrapper}>
  <Image
    source={require('./components/mappp.jpg')}
    style={styles.topImage}
  />
  <Text style={styles.header}>Welcome to Product Finder</Text>
  <Text style={styles.subHeader}>Easily search and add products to your cart</Text>
  
  <GradientButton title="Find Product" iconName="search-outline" onPress={handleFindProductPress} />
  <GradientButton title="Add Product Cart" iconName="cart-outline" onPress={handleFindProductPress} />
</View>

  );
};

// ✅ Custom GradientButton component
const GradientButton = ({ title, iconName, onPress }) => (
  <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
    <LinearGradient
      colors={["#6c63ff", "#3b5998", "#6c63ff"]}
      style={styles.buttonGradient}
    >
      <Ionicons name={iconName} size={20} color="#fff" style={{ marginRight: 10 }} />
      <Text style={styles.buttonText}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({

  topImage: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#f8f9fa",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 30,
  },
  subHeader: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
  },
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden",
    marginBottom: 20,
  },
  buttonGradient: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Payment;