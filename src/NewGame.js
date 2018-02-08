import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export const NewGame = () => (
  <View style={styles.container}>
    <Text>New game</Text>
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
