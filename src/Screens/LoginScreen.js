import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { TextInput, Checkbox } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const [loginClicked, setLoginClicked] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    setLoginClicked(true);

    try {
      const response = await axios.post('http://134.209.155.122:8084/api/v1/auth', {
        username,
        password,
      });

      if (response.status === 200) {
        // Assuming the backend sends a token or success message
        navigation.navigate('Home'); // Navigate to the Home screen on successful login
      } else {
        // Handle non-200 responses
        Alert.alert('Login failed', response.data.message);
      }
    } catch (error) {
      // Handle errors
      Alert.alert('Login error', error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.heading}>Order Management</Text>

        <View style={{ height: 200 }}>
          <LottieView
            style={styles.animate}
            source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/Animation2.json')}
            autoPlay
            loop
          />
        </View>

        <View style={styles.usernameContainer}>
          <TextInput
            style={styles.inputText}
            mode="outlined"
            label="User Name"
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        <View style={styles.passwordContainer}>
          <TextInput
            mode="outlined"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.passwordInput}
            label="Password"
          />
          <TouchableOpacity style={styles.iconContainer} onPress={toggleShowPassword}>
            <MaterialCommunityIcons
              name={showPassword ? 'eye-off' : 'eye'}
              size={24}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.rememberContainer}>
        <Text style={styles.bottomtext}>Remember me</Text>

        <Checkbox
          style={styles.checkboxs}
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
      </View>

      <View style={styles.thirdview}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttons}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  animate: {
    flex: 1,
    height: 180,
    width: 180,
    marginBottom: 20,
  },
  wrapper: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  passwordContainer: {
    width: 300,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  usernameContainer: {
    width: 300,
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginLeft: 35,
    marginRight: 30,
  },
  passwordInput: {
    flex: 1,
    backgroundColor: 'white',
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
    paddingRight: 10,
    alignItems: 'center',
  },
  thirdview: {
    justifyContent: 'center',
  },
  inputText: {
    width: 300,
    backgroundColor: 'white',
    activeOutlineColor: 'black',
    marginBottom: 10,
  },
  icon: {
    color: 'black',
    paddingTop: 20,
  },
  heading: {
    fontWeight: 'bold',
    paddingTop: 20,
    fontSize: 21,
    textAlign: 'center',
    paddingTop: 35,
    paddingBottom: 80,
    color: 'black',
  },
  bottomtext: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxs: {
    alignItems: 'flex-end',
    backgroundColor: 'black',
  },
  loginButton: {
    backgroundColor: 'black',
    alignItems: 'center',
    textAlign: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
  },
  buttons: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
