import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { auth } from '../firebase';
import { ImageBackground, View, Text, StyleSheet,KeyboardAvoidingView, TouchableOpacity, TextInput, Platform,Image, Alert } from 'react-native';
import { useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

const WelcomePage = () =>{
    const navigation = useNavigation();
    const Login = () => {
        navigation.navigate("Login")
     
      };
    const Register = () => {
        navigation.navigate("Register")
     
      };
    let [fontsLoaded] = useFonts({
        'Roboto-Bold': require('../public/fonts/Roboto-Bold.ttf'),
        'Roboto-BoldItalic': require('../public/fonts/Roboto-BoldItalic.ttf'),
        'Roboto-Regular': require('../public/fonts/Roboto-Regular.ttf'),
        'Roboto-Italic': require('../public/fonts/Roboto-Italic.ttf'),
        'Roboto-Medium': require('../public/fonts/Roboto-Medium.ttf'),
        'Roboto-Black': require('../public/fonts/Roboto-Black.ttf'),
        'Roboto-MediumItalic': require('../public/fonts/Roboto-MediumItalic.ttf'),
      });
    
    if (!fontsLoaded) {
        return <AppLoading/>;
    } 


    return(
        <View style={styles.main}>
           <Image style={styles.loginlogo}  source={require('../public/icons/UJF-128.jpg')}/>
           <View style={styles.Head}>
               <Text style={styles.header}>Hey! Welcome</Text>
               <Text></Text>
           </View>
           <TouchableOpacity style={styles.button} onPress={Register}>
             <Text style={styles.buttonText} >Get Started</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.create} onPress={Login}>
              <Text style={styles.createText} >I Already Have An Account</Text>
            </TouchableOpacity>
        </View>
    );
    
  
}
const styles = StyleSheet.create({
    main:{
       flex:1,
       backgroundColor:'white',
       width:'100%',
       justifyContent:'center',
       alignItems:'center',
    },
    loginlogo:{
      marginBottom:20,
    }, 
    header:{
       fontSize:28,
       fontFamily:'Roboto-Medium',
    },
    button: {
        marginTop:'10%',
        marginBottom:20,
        width: '80%',
        backgroundColor: '#ffde69',
        height: 55,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontFamily:'Roboto-Medium',
    },
    createText: {
        fontSize:14, 
        color: 'black',
        fontFamily:'Roboto-Regular',
    },
});
export default WelcomePage;