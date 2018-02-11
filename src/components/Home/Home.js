import React from 'react'
import { View, Image, Text } from 'react-native'
import { RkButton } from 'react-native-ui-kitten'
import { globalStyles as styles } from '../../styles/Global'

export const Home = ({start}) => (
  <View style={styles.container}>
    <Image
      style={styles.homeImg}
      source={require('../../assets/img/logo.jpg')}
    />
    <RkButton
      style={[styles.bigBottomBtn, styles.homeBtn]}
      contentStyle={styles.boldBtnContent}
      rkType='xlarge'
      onPress={start}
    >
      <Text style={{ color: 'white', fontSize: 20 }}>Démarrer une partie</Text>
    </RkButton>
  </View>
);
