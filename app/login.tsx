import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert, ScrollView } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as LocalAuthentication from 'expo-local-authentication';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import PersonImage from './src/login1.png';
import { AlignCenter } from 'lucide-react-native';


const SignUpScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [biometricAuthenticated, setBiometricAuthenticated] = useState(false);
  const router = useRouter();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleBiometricAuth = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    if (!hasHardware) {
      Alert.alert('Error', 'Biometric authentication is not available on this device.');
      return;
    }

    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    if (!isEnrolled) {
      Alert.alert('Error', 'No biometrics found. Please enroll in settings.');
      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticate to Sign Up',
    });

    if (result.success) {
      Alert.alert('Success', 'Biometric authentication successful!');
      setBiometricAuthenticated(true);
    } else {
      Alert.alert('Error', 'Authentication failed. Try again.');
    }
  };

  const handleSignUp = async () => {
    if (!biometricAuthenticated) {
      Alert.alert('Error', 'You must authenticate with biometrics first.');
      return;
    }
  
    if (!name || !email || !contact || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
  
    try {
      const response = await fetch('http://192.168.22.241:3000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, contact, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        Alert.alert('Success', data.message);
        router.push('/welcome');
      } else {
        Alert.alert('Error', data.message || 'Something went wrong.');
      }
    } catch (error) {
      Alert.alert('Error', 'Network error');
      console.error(error);
    }
  };
  

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
      
      <LinearGradient colors={['#4b2fdd', '#c96cfb']} style={styles.topContainer}>
        
        <View style={styles.inlineTextContainer}>
        <TouchableOpacity
              style={styles.exploreBtn}
              onPress={() => router.push("adminLoginScreen")} // Navigate to /login
            >
              <Text style={styles.exploreText}>Admin Login</Text>
            </TouchableOpacity>
           
          <View style={styles.imageWrapper}>
            
          <Image source={PersonImage} style={styles.simage} />
        </View>
        </View>
      </LinearGradient>
      
      <View style={styles.container}>
       
        <View style={styles.formContainer}>
          
          <Text style={styles.title}>Sign-Up</Text>
          <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
            {image ? (
              <Image source={{ uri: image }} style={styles.image} />
            ) : (
              <Feather name="camera" size={24} color="gray" />
            )}
          </TouchableOpacity>
          <TextInput
            placeholder="Your name"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Your email-id"
            style={styles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Your contact number"
            style={styles.input}
            keyboardType="phone-pad"
            value={contact}
            onChangeText={setContact}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Password"
              style={styles.passwordInput}
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Feather name={passwordVisible ? "eye" : "eye-off"} size={20} color="gray" />
            </TouchableOpacity>
          </View>

          {/* Biometric Button placed before Sign Up */}
          <TouchableOpacity style={styles.biometricButton} onPress={handleBiometricAuth}>
            <MaterialIcons name="fingerprint" size={24} color="#fff" />
            <Text style={styles.biometricButtonText}>Use Biometrics</Text>
          </TouchableOpacity>

          {/* Sign Up Button, disabled until biometric authentication */}
          <TouchableOpacity
            style={[styles.button, !biometricAuthenticated && styles.disabledButton]} 
            onPress={handleSignUp}
            disabled={!biometricAuthenticated}
          >
            <Text style={styles.buttonText} >Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  exploreBtn: {
    backgroundColor: "#6c63ff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    margin: 25,
    zIndex:8,
    left:35,
    top:-30,
    
  },
  exploreText: {
    color: "#fff",
    fontSize: 13,
  },
  topContainer: {
    height: '27.5%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingTop: 50,
    paddingHorizontal: 20,
    position: 'relative',
  },
  adminButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    right:-10,
    top:5,
  },
  
  adminButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  
  inlineTextContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 30,
    right: 20,
    alignItems: 'center',
  },
  getStartedText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 6,
  },
  getStartedButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  getStartedButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  imageWrapper: {
    position: 'absolute',
    top: -30,
    right: -10,
    alignSelf: 'center',
    zIndex: 1,
  },
  simage: {
    width: 360,
    height: 200,
    resizeMode: 'contain',
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f7f7f7', // Lighter background for the overall screen
    paddingBottom: 30,
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heroImage: {
    width: "100%",
    alignItems: "center",
    marginBottom: -68,
  },
  image1: {
    width: 250, // Slightly smaller hero image
    height: 250,
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    alignItems: 'center',
    marginTop: -40,
    paddingBottom: 30,
    zIndex:2, // More space at the bottom
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  imagePicker: {
    width: 90,
    height: 90,
    backgroundColor: '#f0f0f0',
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5, // Slight shadow effect
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
    color: '#333',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#6c63ff',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    elevation: 3, // Subtle shadow on the button
  },
  disabledButton: {
    backgroundColor: '#cccccc', // Disabled button color
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  biometricButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6c53ff',
    padding: 15,
    borderRadius: 12,
    width: '100%',
    justifyContent: 'center',
    elevation: 3,
    marginBottom: 20, // Spacing before Sign Up button
  },
  biometricButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
export default SignUpScreen;