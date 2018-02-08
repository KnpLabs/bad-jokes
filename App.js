import React from 'react';
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
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

const App = () => (
  <RootStack />
);

export default App;
