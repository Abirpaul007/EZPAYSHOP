import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ShoppingBag } from "lucide-react-native";
import { MotiView } from "moti";


const Page1 = () => {
  return (
    <View style={styles.container}>
      <MotiView
        from={{ opacity: 0, translateX: -50 }}
        animate={{ opacity: 1, translateX: 0 }}
        style={styles.header}
      >
        <ShoppingBag size={32} color="#60659E" />
        <Text style={styles.title}>EZPAYSHOP</Text>
      </MotiView>


      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: "#fff",
    marginTop: 10, // Added margin on the upper side
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20, // Added space below the header
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#60659E",
    marginLeft: 10,
  },
  
});

export default Page1;
