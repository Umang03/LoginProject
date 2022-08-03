import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterPage from '../screens/RegisterPage';
import WelcomePage from '../screens/WelcomePage';
import { AuthScreen } from '../screens';
import AppStack from './AppStack';


const Stack = createNativeStackNavigator();

const AuthStack = () =>{

  return (
    
   <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
     <Stack.Screen name='Welcome' component={WelcomePage}  />
     <Stack.Screen name="Login" component={AuthScreen} />
     <Stack.Screen name="Register" component={RegisterPage} />
     <Stack.Screen name="Home" component={AppStack} />
   </Stack.Navigator>
  
    
  );
}
export default AuthStack;