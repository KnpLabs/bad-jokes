import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Prehome } from './src/Prehome';
import { Home } from './src/Home';
import { NewGame } from './src/NewGame';

const RootStack = StackNavigator(
  {
    Prehome: {
      screen: Prehome
    },
    Home: {
      screen: Home
    },
    NewGame: {
      screen: NewGame
    }
  },
  {
    initialRouteName: 'Prehome',
    headerMode: 'none',
  }
);

const App = () => (
  <RootStack />
);

export default App;
