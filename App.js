import React from 'react'
import Login from './screens/Login';
import Register from './screens/Register';
 
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 
 const Stack = createStackNavigator();
 
 export default function App() {
   return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        {/* <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen name="Details" component={VehicleForm} options={{headerShown: true}}/> */}
      </Stack.Navigator>

      
    </NavigationContainer>
   
   )
 }
