import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Home } from './src/Home';
import { NewGame } from './src/NewGame';
import store from './src/store';
import { Provider } from 'react-redux';

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
  <Provider store={store}>
    <RootStack />
  </Provider>
)

export default App;
