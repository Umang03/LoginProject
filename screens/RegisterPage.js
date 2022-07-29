import React, { useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/core';
import { auth,createUserDocument } from '../firebase';
import { ImageBackground, View, Text, StyleSheet,KeyboardAvoidingView, TouchableOpacity, TextInput, Platform,Image, Alert, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createUserWithEmailAndPassword } from 'firebase/auth';
const RegisterPage = () => 

{

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [UserName, setUserName] = useState('');
  const [Phoneno, setPhoneNumber] = useState('');
  
  const navigation = useNavigation();
  
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       navigation.replace("Home")
  //     }
  //   })
  //   return unsubscribe
  // }, [])

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth,email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
       createUserDocument(user,{UserName},{Phoneno});
        console.log('Registered with:', user.email);
      })  
      .catch(error => alert(error.message))
  };
  const Login = () => {
    navigation.navigate("Login")
 
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
    <KeyboardAwareScrollView keyboardShouldPersistTaps ='always'>
      <View style={styles.card} >
        <Image style={styles.loginlogo}  source={require('../public/icons/UJF-128.jpg')}/>
          <View style={styles.inputs}>
            <TextInput style={styles.input} placeholder="UserName" autoCapitalize="none" value={UserName} onChangeText={text => setUserName(text)}></TextInput>
            <TextInput style={styles.input} placeholder="Email id" autoCapitalize="none" value={email} onChangeText={text => setEmail(text)}></TextInput>
            <TextInput secureTextEntry={true} style={styles.input} autoCapitalize="none" placeholder="Password" autoCorrect={false} value={password} onChangeText={text => setPassword(text)}></TextInput>
            <TextInput style={styles.input} placeholder="Mobile No." autoCapitalize="none" value={Phoneno} onChangeText={Number => setPhoneNumber(Number)}></TextInput>
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
              <Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.create} onPress={Login}>
              <Text style={styles.createText}>Already Have An Account ?</Text>
            </TouchableOpacity>
          </View>
      </View> 
    </KeyboardAwareScrollView>
        
  );
};
  
const styles = StyleSheet.create({   
  card: {
    backgroundColor: 'white',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'space-around',
    paddingTop:34,
    height:800,
    flex: 1,
  },
  loginlogo: {
    resizeMode: 'contain',
    alignSelf:'center',
  },
  form: {
    flex: 1,
    justifyContent: 'space-between', 
  },
  inputs: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',  
    backgroundColor: 'white',
    marginTop: 12,
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
  button: {
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
    right:60,
  },
  createText: {
    fontSize:14,
    fontFamily:'Roboto-Regular',   
    color: '#04AA6D',
  },
});
export default RegisterPage;