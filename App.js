import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/store';
import { Home } from './src/components/Home';
import { Player } from './src/containers/Player';
import { Game } from './src/containers/Game';
import { Finish } from './src/containers/Finish';

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
    },
    Finish: {
      screen: Finish,
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
