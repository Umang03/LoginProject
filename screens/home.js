import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View,SafeAreaView,ScrollView,ImageBackground } from 'react-native'
import { auth } from '../firebase';
import AppLoading from 'expo-app-loading';
import { useFonts} from 'expo-font';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { LinearGradient } from 'expo-linear-gradient';
import 'react-native-gesture-handler';

const HomeScreen = () => {

  const navigation = useNavigation()

 
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


const next=()=>{
  navigation.navigate('Welcome') ;

}
  return (
  
    <SafeAreaView style={{flex: 1, backgroundColor:'#f0f2f5'}}>
    <ScrollView>
      
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}style={styles.container}>
        <Text style={{fontSize: 18, color:'white'}}>
          Hello, 
          Umang 
        </Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <ImageBackground
            source={require('../public/images/UJF.jpg')}
            style={{width: 50, height: 50}}
            imageStyle={{borderRadius: 25}}
          />
        </TouchableOpacity>
      </LinearGradient>
     
      <View style={{flex:1}} >
        <Card  style={{borderRadius:25,shadowColor: '#171717',
          shadowOffset: {width: -2, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,}}>

          <View  style={styles.cardtitle}>
            <TouchableOpacity >
             <ImageBackground
               source={require('../public/images/Advocate.fw_-300x298.png')}
               style={{width:100, height: 100}}
               imageStyle={{borderRadius: 25}}
              />
            </TouchableOpacity>
            <Text style={{fontSize:28, color:'white',marginRight:80,}}>
              Legal Expert
            </Text>
          </View>
          <CardContent text="Voluptate tempor nisi aliquip nisi aute id sunt sint.Excepteur excepteur consequat nulla aute reprehenderit eu dolor aliqua excepteur cupidatat in ullamco." />
            <CardAction 
            separator={true} 
            inColumn={false}>
            <CardButton
             onPress={() => {}}    
              title="Share"
               color="#FEB557"
            />
            <CardButton
              onPress={() => {}}
              title="Explore"
              color="#FEB557"
              />
          </CardAction>
        </Card>
        <Card  style={{borderRadius:25,shadowColor: '#171717',
          shadowOffset: {width: -2, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,}}>

          <View  style={{    flex:1,
            flexDirection: 'row',
            width:'100%',
            alignItems:'center',
            paddingRight:15,
            height:120,
            backgroundColor:'#6346bc',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,}}
          >
            <TouchableOpacity >
             <ImageBackground
               source={require('../public/images/Advocate.fw_-300x298.png')}
               style={{width:100, height: 100}}
               imageStyle={{borderRadius: 25}}
              />
            </TouchableOpacity>
            <Text style={{fontSize:28, color:'white',marginRight:80,}}>
              Educational
            </Text>
          </View>
          <CardContent text="Voluptate tempor nisi aliquip nisi aute id sunt sint.Excepteur excepteur consequat nulla aute reprehenderit eu dolor aliqua excepteur cupidatat in ullamco." />
            <CardAction 
            separator={true} 
            inColumn={false}>
            <CardButton
             onPress={() => {}}    
              title="Share"
               color="#FEB557"
            />
            <CardButton
              onPress={() => {}}
              title="Explore"
              color="#FEB557"
              />
          </CardAction>
        </Card>
        <Card  style={{borderRadius:25,shadowColor: '#171717',
          shadowOffset: {width: -2, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,}}>
          <View  style={{    flex:1,
            flexDirection: 'row',
            width:'100%',
            alignItems:'center',
            paddingRight:15,
            height:120,
            backgroundColor:'#85309a',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,}}
          >
            <TouchableOpacity >
             <ImageBackground
               source={require('../public/images/Advocate.fw_-300x298.png')}
               style={{width:100, height: 100}}
               imageStyle={{borderRadius: 25}}
              />
            </TouchableOpacity>
            <Text style={{fontSize:28, color:'white',marginRight:80,}}>
              Medical
            </Text>
          </View>
          <CardContent text="Voluptate tempor nisi aliquip nisi aute id sunt sint.Excepteur excepteur consequat nulla aute reprehenderit eu dolor aliqua excepteur cupidatat in ullamco." />
            <CardAction 
            separator={true} 
            inColumn={false}>
            <CardButton
             onPress={() => {}}    
              title="Share"
               color="#FEB557"
            />
            <CardButton
              onPress={() => {}}
              title="Explore"
              color="#FEB557"
              />
          </CardAction>
        </Card>
        <Card  style={{borderRadius:25,shadowColor: '#171717',
          shadowOffset: {width: -2, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,}}>

          <View  style={{    flex:1,
            flexDirection: 'row',
            width:'100%',
            alignItems:'center',
            paddingRight:15,
            height:120,
            backgroundColor:'#a81e79',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,}}
          >
            <TouchableOpacity >
             <ImageBackground
               source={require('../public/images/Advocate.fw_-300x298.png')}
               style={{width:100, height: 100}}
               imageStyle={{borderRadius: 25}}
              />
            </TouchableOpacity>
            <Text style={{fontSize:28, color:'white',marginRight:80,}}>
              Environment
            </Text>
          </View>
          <CardContent text="Voluptate tempor nisi aliquip nisi aute id sunt sint.Excepteur excepteur consequat nulla aute reprehenderit eu dolor aliqua excepteur cupidatat in ullamco." />
            <CardAction 
            separator={true} 
            inColumn={false}>
            <CardButton
             onPress={() => {}}    
              title="Share"
               color="#FEB557"
            />
            <CardButton
              onPress={() => {}}
              title="Explore"
              color="#FEB557"
              />
          </CardAction>
        </Card>
        <Card  style={{borderRadius:25,shadowColor: '#171717',
          shadowOffset: {width: -2, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,}}>

          <View  style={{    flex:1,
            flexDirection: 'row',
            width:'100%',
            alignItems:'center',
            paddingRight:15,
            height:120,
            backgroundColor:'#d73b4d',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,}}
          >
            <TouchableOpacity >
             <ImageBackground
               source={require('../public/images/Advocate.fw_-300x298.png')}
               style={{width:100, height: 100}}
               imageStyle={{borderRadius: 25}}
              />
            </TouchableOpacity>
            <Text style={{fontSize:28, color:'white',marginRight:80,}}>
              MOU
            </Text>
          </View>
          <CardContent text="Voluptate tempor nisi aliquip nisi aute id sunt sint.Excepteur excepteur consequat nulla aute reprehenderit eu dolor aliqua excepteur cupidatat in ullamco." />
            <CardAction 
            separator={true} 
            inColumn={false}>
            <CardButton
             onPress={() => {}}    
              title="Share"
               color="#FEB557"
            />
            <CardButton
              onPress={() => {}}
              title="Explore"
              color="#FEB557"
              />
          </CardAction>
        </Card>
      </View>
      
    </ScrollView>
  </SafeAreaView>
)  }



export default HomeScreen

const styles = StyleSheet.create({
container: {
  flex:1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  width:'100%',
  paddingLeft:20,
  paddingRight:20,
  alignItems:'center',
  height:120,
  //backgroundColor:'#4a4a4c',
  backgroundColor: 'linear-gradient(to right bottom, rgb(77, 84, 209), rgb(165, 28, 123) 5%, rgb(238, 74, 55) 5%) center center',
  borderBottomRightRadius: 50,
  marginBottom:20,
},
cardtitle:{
  flex:1,
  flexDirection: 'row',
  width:'100%',
  alignItems:'center',
  paddingRight:15,
  height:120,
  //backgroundColor:'#192f6a',
  backgroundColor:'black',
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
},
 button: {
  backgroundColor: '#0782F9',
  width: '60%',
  padding: 15,
  borderRadius: 10,
  alignItems: 'center',
  marginTop: 40,
},
buttonText: {
  color: 'white',
  fontWeight: '700',
  fontSize: 16,
},
})
