import React from "react";
import { WebView } from "react-native-webview";
import { View, StyleSheet, Text } from "react-native";

const WebViewScreen = ({ route }) => {
  const { url } = route.params;

  return (
    <View style={styles.container}>
      {url ? (
        <WebView source={{ uri: url }} style={styles.webview} />
      ) : (
        <Text style={styles.errorText}>No URL provided</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  webview: {
    flex: 1,
  },
  errorText: {
    textAlign: "center",
    marginTop: 20,
    color: "red",
    fontSize: 18,
  },
});

export default WebViewScreen;
