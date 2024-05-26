import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen';
import CustomerScreen from '../Screens/CustomerScreen';
import OrderEntry from '../Screens/OrderEntry';
import ProductCategory from '../Screens/ProductCategory';
import HomeAcces from '../Screens/HomeAccess';
import Stationary from '../Screens/Stationary';
import TwoWheelers from '../Screens/TwoWheelers';
import FourWheelers from '../Screens/FourWheelers';
import ElectronicItems from '../Screens/ElectronicItems';
import ProductMaster from '../Screens/ProductMaster';


const Stack = createNativeStackNavigator();

const Navigation=()=> {
  return (
    <NavigationContainer>
    <Stack.Navigator>     
      <Stack.Screen name='Customer' component={CustomerScreen} options={{headerShown:false}} />
      <Stack.Screen name='Two' component={TwoWheelers} options={{headerShown:false}}/>
      <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}} />
      <Stack.Screen name='HomeA' component={HomeAcces} options={{headerShown:false}}/>
      <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name='Order' component={OrderEntry} options={{headerShown:false}}/>
      <Stack.Screen name='Product' component={ProductCategory} options={{headerShown:false}}/>
      <Stack.Screen name='Sta' component={Stationary} options={{headerShown:false}}/>
      <Stack.Screen name='Four' component={FourWheelers} options={{headerShown:false}}/>
      <Stack.Screen name='EI' component={ElectronicItems} options={{headerShown:false}}/>
      <Stack.Screen name='Master' component={ProductMaster} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default Navigation;
