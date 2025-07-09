import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Page2 = () => {
    return (
        <View style={styles.heroSection}>
            <View style={styles.heroText}>
                <Text style={styles.title}>Buy <FontAwesome name="shopping-cart" size={30} color="#416088" /> Whatever Makes You Happy</Text>
                <View style={styles.divider}></View>
                <View style={styles.heroImage}>
                <Image source={require("./3d17b514-8192-46e2-9c6f-59ac400cb7c4.png")} style={styles.image} resizeMode="contain" />
            </View>
                <Text style={styles.description}>Get whatever you want at our shop.</Text>
                
               
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    heroSection: {
        flex: 1,
        flexDirection: "column", 
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 20,
    },
    heroText: {
        alignItems: "center",
        textAlign: "center",
        marginBottom: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#416088",
        textAlign: "center",
    },
    divider: {
        width: "70%",
        height: 5,
        backgroundColor: "#416088",
        marginVertical: 5,
    },
    description: {
        fontSize: 16,
        color: "#416088",
    },
    heroImage: {
        width: "100%",
        alignItems: "center",
    },
    image: {
        width: 300,
        height: 300,
    },
});

export default Page2;
