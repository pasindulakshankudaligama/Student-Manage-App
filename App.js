import React from 'react'
import Login from './screens/Login';
import Register from './screens/Register';
 
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';

 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import StudentDetails from './screens/StudentDetails';
 
 const Stack = createStackNavigator();
 const Tab = createBottomTabNavigator();
 
 export default function App() {
   return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Details" component={VehicleForm} options={{headerShown: true}}/> */}
      </Stack.Navigator>

      
    </NavigationContainer>
   
   )
 }

 function Root() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Add') {
              iconName = focused ? 'create' : 'create-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#469AFF',
          tabBarInactiveTintColor: 'gray',
        })}
      >

      <Tab.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Tab.Screen options={{ headerShown: false }} name="Add" component={StudentDetails} />
    </Tab.Navigator>
  );
}
