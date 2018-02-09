import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { Game } from './src/containers/Game';
import { Player } from './src/Player';
import { Home } from './src/components/Home';
import store from './src/store';

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Player: {
      screen: Player,
    },
    Game: {
      screen: Game,
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const App = () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
);

export default App;
