// LandingPage.js
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Using Expo for icons
import { LinearGradient } from "expo-linear-gradient"; // For gradient buttons
import { Linking } from "react-native"; // Import Linking API
import Page1 from "../components/Header"; // Assuming this is a custom component
import { useRouter } from "expo-router";

const LandingPage = ({ navigation }) => {
  const router = useRouter(); 
  const handleFindProductPress = () => {
    const url = "https://app.mappedin.com/map/67e8c201104606000b7c8901";
    // Open the URL directly in the browser
    Linking.openURL(url).catch((err) => console.error("An error occurred", err));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container1}>
        <Page1 />
        <View style={styles.heroImage}>
          <Image
            source={require("../components/home-removebg-preview.png")}
            style={styles.image1}
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity style={styles.accountIcon} onPress={() =>  router.push("Account")}>
          <Ionicons name="person-circle-outline" size={32} color="black" />
        </TouchableOpacity>

        <Text style={styles.heading}>Welcome to Our Store</Text>

        {/* Gradient Buttons */}
        <GradientButton title="Enter a Store" iconName="storefront-outline" onPress={() => router.push("Qr")} />
        
        <GradientButton title="My Purchases" iconName="cart-outline" onPress={() => router.push("MyPurchases")} />
        <GradientButton title="Total Expenses" iconName="cash-outline" onPress={() => router.push("TotalExpenses")} />
           <GradientButton title="Customer Review" iconName="cart-outline"/>
      </View>
    </ScrollView>
  );
};

const GradientButton = ({ title, iconName, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
    <LinearGradient colors={["#007bff", "#0056b3"]} style={styles.button}>
      <Ionicons name={iconName} size={22} color="white" style={styles.buttonIcon} />
      <Text style={styles.buttonText}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 40,
  },
  container1: {
    alignItems: "center",
    width: "100%",
  },
  accountIcon: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 1,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  buttonContainer: {
    width: "80%",
    marginVertical: 10,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 10,
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  heroImage: {
    width: "100%",
    alignItems: "center",
    marginBottom: 35,
  },
  image1: {
    width: 300,
    height: 300,
  },
  exploreBtn: {
    backgroundColor: "#6c63ff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    margin: 25,
  },
  exploreText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default LandingPage;
