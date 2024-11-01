import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SavedScreen from '../screens/SavedScreen';
import RentSaleScreen from '../screens/RentSaleScreen';
import LikedScreen from '../screens/LikedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MainScreen from '../screens/MainScreen';
import Register from '../screens/Register';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const StackNavigator = () => {
  function BottomTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#6D31EDFF"
        inactiveColor="gray"
        barStyle={{backgroundColor: 'white', elevation: 10}}>
        <Tab.Screen name="Home" component={HomeScreen} />

        <Tab.Screen name="Saved" component={SavedScreen} />

        <Tab.Screen name="Rent/Sale" component={RentSaleScreen} />

        <Tab.Screen name="Liked" component={LikedScreen} />

        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
