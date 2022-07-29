import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Share,View, Button,Overlay} from 'react-native';
//import {Share} from 'react-native-share' ;

export function EduScreen() {
  const navigation = useNavigation();

  // const customShare= async()=>{
  //   const shareOptions={
  //     message :'This is the message'
  //   }
  //   try{
  //     const ShareResponse = await Share.open(shareOptions) ;
  //   }
  //   catch(error)
  //   {
  //     console.log('Error =>' ,error) ;
  //   }
  // }
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={onShare}
        title="Share it"
      />
    </View>
  );
}