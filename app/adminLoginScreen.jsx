import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AdminImage from './components/admin-removebg-preview.png'; // Adjust the path
import { useRouter } from "expo-router";


const AdminLoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminKey, setAdminKey] = useState('');
  const [twoFA, setTwoFA] = useState('');
  const navigation = useNavigation();
  const router = useRouter();

  const handleAdminLogin = async () => {
    const isAdmin =
      email === 'admin@store.com' &&
      password === 'admin123' &&
      adminKey === 'SECRET2024' &&
      twoFA === '000000';

    if (isAdmin) {
      try {
        await fetch('http://192.168.22.241:2000/api/admin-login-log', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            loginTime: new Date().toISOString(),
          }),
        });

        Alert.alert('Access Granted', 'Welcome, Admin!', [
          { text: 'Continue', onPress: () => router.push('AdminDashb') },
        ]);
      } catch (error) {
        console.error('Error logging admin login:', error);
      }
    } else {
      Alert.alert('Login Failed', 'Invalid credentials. Redirecting to Customer Login...', [
        { text: 'OK', onPress: () => router.push('login') },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#4b2fdd', '#c96cfb']} style={styles.header}>
        <Text style={styles.headerText}>Admin Login</Text>
      </LinearGradient>

      <Image source={AdminImage} style={styles.adminImage} />

      <View style={styles.form}>
        <Text style={styles.label}>Admin Email</Text>
        <TextInput
          style={styles.input}
          placeholder="admin@store.com"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Text style={styles.label}>Secret Admin Key</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your admin key"
          value={adminKey}
          onChangeText={setAdminKey}
          secureTextEntry
        />

        <Text style={styles.label}>2FA Code</Text>
        <TextInput
          style={styles.input}
          placeholder="000000"
          value={twoFA}
          onChangeText={setTwoFA}
          keyboardType="numeric"
        />

        <TouchableOpacity onPress={handleAdminLogin}>
          <LinearGradient colors={['#4b2fdd', '#c96cfb']} style={styles.loginButton}>
            <Text style={styles.loginText}>Login as Admin</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fc',
  },
  header: {
    height: '30%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  headerText: {
    top: -70,
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    left: 10,
  },
  adminImage: {
    resizeMode: 'contain',
    alignSelf: 'center',
    position: 'absolute',
    top: 90,
    left: 50,
    width: 290,
    height: 170,
  },
  form: {
    padding: 25,
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: '#333',
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 14,
    marginBottom: 15,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  loginButton: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AdminLoginScreen;
