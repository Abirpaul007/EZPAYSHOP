import React, { useEffect, useState } from 'react';
import { View, Text, Button,TouchableOpacity, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import uuid from 'react-native-uuid';

import { useRouter } from "expo-router";

const Qr = () => {
  const [qrValue, setQrValue] = useState('');
  const [countdown, setCountdown] = useState(20);
  
  const router = useRouter();

  useEffect(() => {
    generateNewQR();
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          generateNewQR();
          return 20;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const generateNewQR = () => {
    const newQR = uuid.v4();
 // or use timestamp
    setQrValue(newQR);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QR Code (Valid for {countdown}s)</Text>
      <QRCode value={qrValue || 'Generating...'} size={250} />
      <Text style={styles.qrValue}>{qrValue}</Text>
      <TouchableOpacity
        style={styles.exploreBtn}
        onPress={() => router.push("Payment")} // Navigate to /login
      >
        <Text style={styles.exploreText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Qr;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  qrValue: {
    marginTop: 20,
    fontSize: 12,
    color: 'gray',
  },
  buttonContainer: {
    marginTop: 50,
    width: '100%',
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
