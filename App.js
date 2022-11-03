/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React from 'react'
 import Login from './screens/Login'
 
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 
 const Stack = createStackNavigator();
 
 export default function App() {
   return (
     <NavigationContainer>
         <Stack.Navigator screenOptions={{
           headerShown: false,
         }}>
         <Stack.Screen name="Login" component={Login} />
     </Stack.Navigator>
     </NavigationContainer>
   
   )
 }
