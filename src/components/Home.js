import React from 'react';
import { View, Image } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';
import { globalStyles } from '../styles/Global';

export const Home = ({navigation}) => (
  <View style={globalStyles.container}>
    <Image style={globalStyles.homeImg}
           source={require('../../assets/img.jpg')} />
    <RkButton style={globalStyles.homeBtn}
              rkType='xlarge'
              onPress={() => navigation.navigate('Player')}
              contentStyle={{color: 'white'}}>Démarrer une partie</RkButton>
  </View>
);
