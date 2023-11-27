// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Otp from './src/Otp';
import phoneNumber from './src/phoneNumber';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="phoneNumber">
        <Stack.Screen  options={{ headerShown: false }} name="Otp" component={Otp} />
        <Stack.Screen
         options={{ headerShown: false }}
        name="phoneNumber" component={phoneNumber} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
