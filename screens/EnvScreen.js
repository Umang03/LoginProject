import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Button} from 'react-native';

export function EnvScreen() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.replace('Home')}
        title="Go to Details"
      />
    </View>
  );
}