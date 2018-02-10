import React from 'react'
import { View, Image, Text } from 'react-native'
import { RkButton } from 'react-native-ui-kitten'
import { globalStyles } from '../../styles/Global'

export const Home = ({navigation}) => (
  <View style={globalStyles.container}>
    <Image
      style={globalStyles.homeImg}
      source={require('../../assets/img/logo.jpg')}
    />
    <RkButton
      style={[globalStyles.bigBottomBtn, globalStyles.homeBtn]}
      contentStyle={globalStyles.boldBtnContent}
      rkType='xlarge'
      onPress={() => navigation.navigate('Player')}
    >
      <Text style={{ color: 'white', fontSize: 20 }}>Démarrer une partie</Text>
    </RkButton>
  </View>
);
