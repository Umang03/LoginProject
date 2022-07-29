
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './navigation/AuthStack';
import AppStack from './navigation/AppStack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
       <AuthStack /> 
    </NavigationContainer>
    
  );
};
