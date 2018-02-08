import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Home } from './src/Home';
import { NewGame } from './src/NewGame';

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home
    },
    NewGame: {
      screen: NewGame
    }
  },
  {
    initialRouteName: 'Home'
  }
)

const App = () => (
  <RootStack />
)

export default App;
