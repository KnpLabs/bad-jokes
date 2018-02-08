import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';

export const Home = ({navigation}) => (
  <View style={styles.container}>
    <Image style={styles.image}
           resizeMode="cover"
           source={require('../assets/img.jpg')} />
    <RkButton style={styles.button}
              rkType="xlarge"
              onPress={() => navigation.navigate('NewGame')}
              contentStyle={{color: 'white'}}>Démarrer une partie</RkButton>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  image: {
    flex:1,
    height: undefined,
    width: undefined
  },
  button: {
    backgroundColor: 'red',
    marginLeft: 10,
    marginBottom: 20,
    marginRight: 10
  },
});
