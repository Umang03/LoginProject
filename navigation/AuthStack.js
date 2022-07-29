import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterPage from '../screens/RegisterPage';
import WelcomePage from '../screens/WelcomePage';
import { AuthScreen } from '../screens';
import AppStack from './AppStack';


const Stack = createNativeStackNavigator();

const AuthStack = () =>{

  return (
    
   <Stack.Navigator initialRouteName="Welcome">
     <Stack.Screen name='Welcome' component={WelcomePage}  options={{ headerShown: false }}/>
     <Stack.Screen name="Login" component={AuthScreen} options={{ headerShown: true }}/>
     <Stack.Screen name="Register" component={RegisterPage} options={{ headerShown: true }}/>
     <Stack.Screen name="Home" component={AppStack} options={{ headerShown: false }}/>
   </Stack.Navigator>
  
    
  );
}
export default AuthStack;