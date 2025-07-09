import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const Features = () => {
  const router = useRouter(); // Initialize router

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.header}>Let us help you shop smarter and faster</Text>
        <Text style={styles.subHeader}>
          With cutting-edge technology for a seamless shopping experience
        </Text>
      </View>

      {[
        {
          title: "No Queues, No Hassle",
          desc: "Pick up what you need and walk out! No waiting in long lines. Experience the future of retail with instant checkouts and seamless shopping.",
          img: require("./QUEUEfree.jpg"),
        },
        {
          title: "Biometric Entry",
          desc: "Access the store securely with fingerprint or Face ID. Your shopping journey begins with just a touch or a glance, ensuring security and ease.",
          img: require("./WhatsApp Image 2025-03-31 at 11.45.24_5812b223.jpg"),
        },
        {
          title: "Smart Store Navigation",
          desc: "Locate products instantly using our interactive store map. Never waste time searching; get exactly what you need, when you need it.",
          img: require("./storenav.jpg"),
        },
        {
          title: "Mobile-First Checkout",
          desc: "Pay instantly via your smartphone; no cash or card swiping needed. Enjoy the freedom of a checkout-free shopping experience.",
          img: require("./Firstmobile.jpg"),
        },
        {
          title: "Smart Carts",
          desc: "Automatic item detection and real-time billing. Our intelligent carts track your selections, ensuring accuracy and a hassle-free checkout.",
          img: require("./WhatsApp_Image_2025-03-31_at_11.38.27_dcc736b4-removebg-preview.png"),
        },
        {
          title: "Contactless & Digital Payments",
          desc: "Pay via UPI, cards, crypto, or digital wallets. Enjoy a frictionless transaction process tailored to your convenience.",
          img: require("./digitalpayment-removebg-preview.png"),
        },
        {
          title: "24/7 Open – Shop Anytime",
          desc: "No staff, no closing hours – convenience at your fingertips. Shop whenever you want, without restrictions.",
          img: require("./hours-removebg-preview.png"),
        },
        {
          title: "Seamless Integration with Loyalty Programs",
          desc: "Earn and redeem rewards while you shop. Maximize your benefits with exclusive offers and cashback opportunities.",
          img: require("./Loyality-removebg-preview.png"),
        },
      ].map((feature, index) => (
        <View key={index} style={styles.section}>
          <Image source={feature.img} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{feature.title}</Text>
            <Text style={styles.description}>{feature.desc}</Text>
          </View>
        </View>
      ))}

      <TouchableOpacity
        style={styles.exploreBtn}
        onPress={() => router.push("/login")} // Navigate to /login
      >
        <Text style={styles.exploreText}>Explore now</Text>
      </TouchableOpacity>
      <View style={styles.containers}>
      <View style={styles.line} />
      <Text style={styles.text}>OR</Text>
      <View style={styles.line} />
    </View>
      <TouchableOpacity
        style={styles.exploreBtn}
        onPress={() => router.push("adminLoginScreen")} // Navigate to /login
      >
        <Text style={styles.exploreText}>Admin Login</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>EZPAYSHOP © 2025 | All Rights Reserved</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 0,
    alignItems: "center",
  },
  wrapper: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
    lineHeight: 22,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 10,
  },
  section: {
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 10,
    width: "90%",
  },
  footer: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: "#b0b8c1",
    width: "100%",
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#333",
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  buttonFind: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#60659E",
  },
  buttonFindText: {
    color: "#60659E",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonApp: {
    backgroundColor: "#4f46e5",
  },
  buttonAppText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  text: {
    marginHorizontal: 10,
    color: '#333',
    fontWeight: 'bold',
  },
  containers: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },

});

export default Features;
