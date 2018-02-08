import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export const Home = ({navigation}) => (
  <View style={styles.container}>
    <Text>Home Screen</Text>
    <Button
      title="Start a new game"
      onPress={() => navigation.navigate('NewGame')}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
