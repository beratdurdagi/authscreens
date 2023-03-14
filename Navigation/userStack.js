import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../src/screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack=createStackNavigator()



export default function UserStack() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}