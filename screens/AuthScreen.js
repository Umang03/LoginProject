import React, { useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/core';
import { auth } from '../firebase';
import {signInWithEmailAndPassword} from 'firebase/auth' ;
import { ImageBackground, View, Text, StyleSheet,KeyboardAvoidingView, TouchableOpacity, TextInput, Platform,Image, Alert } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppLoading from 'expo-app-loading';
import { useFonts} from 'expo-font';
//import { signInWithEmailAndPassword } from 'firebase/auth';
const AuthScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])


  const handleLogin = () => {
    
      signInWithEmailAndPassword(auth,email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }


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
  return (
    <KeyboardAwareScrollView extraHeight={120} keyboardShouldPersistTaps='always'> 
      <View style={styles.card}>
        <Image style={styles.loginlogo}  source={require('../public/icons/UJF-128.jpg')}/>
          <View style={styles.inputs}>
             <TextInput style={styles.input} placeholder="Email id" autoCapitalize="none" value={email} onChangeText={text => setEmail(text)}></TextInput>
             <TextInput secureTextEntry={true} style={styles.input} autoCapitalize="none" placeholder="Password" autoCorrect={false} value={password} onChangeText={text => setPassword(text)}></TextInput>
             <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Log in</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.create} onPress={Register}>
               <Text style={styles.createText}>Create new Account ?</Text>
             </TouchableOpacity>
          </View>    
       </View> 
      </KeyboardAwareScrollView> 
        
    );
};

const styles = StyleSheet.create({
     
  card:{
    backgroundColor: 'white',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    paddingTop:10,
    paddingBottom:80,
    height:750,
    flex: 1,
  },   
  loginlogo: {
    resizeMode: 'contain',
    alignSelf:'center',
    marginTop:50,
  },
  inputs: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',  
    backgroundColor: 'white',
    
  },  
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom:20,
    fontSize: 16, 
    fontFamily:'Roboto-Regular', 
    minHeight: 40,
  },
  button:{
    marginTop:'20%',
    marginBottom:20,
    width: '80%',
    backgroundColor: 'black',
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily:'Roboto-Medium',
  },
  create:{
    textAlign: 'left',
    position:'relative',
    right:75,
  },
  createText: {
    fontSize:14,
    fontFamily:'Roboto-Regular',  
    color: '#04AA6D',
  },
});

export default AuthScreen;