import React from 'react';
import home from "../screens/home";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AboutScreen } from '../screens/EduScreen';
import MedScreen from '../screens/MedScreen';
import {EnvScreen} from '../screens/EnvScreen';
import {MouScreen} from '../screens/MouScreen';
import {LegalScreen}from '../screens/LegalScreen';
import {EduScreen} from '../screens/EduScreen';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

const AppStack = () =>{

  return (
    
    <Drawer.Navigator initialRouteName="Home" 
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
      headerShown:false,
      drawerActiveBackgroundColor: '#aa18ea',
      drawerActiveTintColor: '#fff',
      drawerInactiveTintColor: '#333',
      drawerLabelStyle: {
        marginLeft: 5,
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
      },
      }}
    >
        <Drawer.Screen name="Home" component={home} 
         options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
          
        }}
        />
        <Drawer.Screen name="Legal" component={LegalScreen} 
        options={{
          title: 'Legal',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerIcon: ({color}) => (
            <FontAwesome name="legal" size={22} color={color} />
          ),
         }}
        />
        <Drawer.Screen name="Educational" component={EduScreen}
         options={{
          title: 'Educational',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerIcon: ({color}) => (
            <Ionicons name="ios-school-outline" size={22} color={color} />
          ),
        }}
        />
        <Drawer.Screen name="Medical" component={MedScreen}
         options={{
          title: 'Medical',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerIcon: ({color}) => (
            <FontAwesome name="stethoscope" size={22} color={color} />
          ),
        }}
        />
        <Drawer.Screen name="Environment" component={EnvScreen}
         options={{
          title: 'Environment',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerIcon: ({color}) => (
            <Ionicons name="earth-outline" size={22} color={color} />
          ),
          
        }}
        />
        <Drawer.Screen name="Mou" component={MouScreen}
         options={{
          title: 'MOU',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerIcon: ({color}) => (
            <FontAwesome name="cube" size={22} color={color} />
          ),
          
        }}
        />
      </Drawer.Navigator>
  
    
  );
}
export default AppStack;