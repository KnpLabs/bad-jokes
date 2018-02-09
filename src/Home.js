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
              onPress={() => navigation.navigate('Player')}
              contentStyle={{color: 'white'}}>Démarrer une partie</RkButton>
  </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        flex:0.7,
        height: undefined,
        width: undefined
    },
    button: {
        flex:0.3,
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20
    },
});
