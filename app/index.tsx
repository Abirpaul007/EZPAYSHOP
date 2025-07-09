import React from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import Header from "./components/Header";
import Page2 from "./components/Page2";
import Features from "./components/Features"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Header />
        <Page2 />
        <Features/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollView: { flexGrow: 1 },
});
