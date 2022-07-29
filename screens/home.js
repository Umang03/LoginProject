import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import AppLoading from 'expo-app-loading';
import { useFonts} from 'expo-font';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { ScrollView } from 'react-native-gesture-handler'


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
    // <View style={styles.container}>
    //   <Text>Email: {auth.currentUser?.email}</Text>
    //   <TouchableOpacity
    //     onPress={handleSignOut}
    //     style={styles.button}
    //   >
    //     <Text style={styles.buttonText}>Sign out</Text>
    //   </TouchableOpacity>
    // </View>
    <ScrollView>
 
  <Card>
    <CardImage 
      source={{uri: 'http://bit.ly/2GfzooV'}} 
      title="Top 10 South African beaches"
    />
    <CardTitle
      subtitle="Number g4tggt5"
    />
    <CardContent text="Clifton, Western Cape" />
    <CardAction 
      separator={true} 
      inColumn={false}>
      <CardButton
        onPress={next}
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
  <Card>
    <CardImage 
      source={{uri: 'http://bit.ly/2GfzooV'}} 
      title="Top 10 South African beaches"
    />
    <CardTitle
      subtitle="Number 6"
    />
    <CardContent text="Clifton, Western Cape" />
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
  </Card><Card>
    <CardImage 
      source={{uri: 'http://bit.ly/2GfzooV'}} 
      title="Top 10 South African beaches"
    />
    <CardTitle
      subtitle="Number 6"
    />
    <CardContent text="Clifton, Western Cape" />
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
  </Card><Card>
    <CardImage 
      source={{uri: 'http://bit.ly/2GfzooV'}} 
      title="Top 10 South African beaches"
    />
    <CardTitle
      subtitle="Number 6"
    />
    <CardContent text="Clifton, Western Cape" />
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
  </Card><Card>
    <CardImage 
      source={{uri: 'http://bit.ly/2GfzooV'}} 
      title="Top 10 South African beaches"
    />
    <CardTitle
      subtitle="Number 6"
    />
    <CardContent text="Clifton, Western Cape" />
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
  </Card><Card>
    <CardImage 
      source={{uri: 'http://bit.ly/2GfzooV'}} 
      title="Top 10 South African beaches"
    />
    <CardTitle
      subtitle="Number 6"
    />
    <CardContent text="Clifton, Western Cape" />
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
  </Card><Card>
    <CardImage 
      source={{uri: 'http://bit.ly/2GfzooV'}} 
      title="Top 10 South African beaches"
    />
    <CardTitle
      subtitle="Number 6"
    />
    <CardContent text="Clifton, Western Cape" />
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
</ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
