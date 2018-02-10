import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { Container as Home } from './src/components/Home/Container';
import { Container as Configuration } from './src/components/Configuration/Container';
import { Container as Game } from './src/components/Game/Container';
import { Container as Finish } from './src/components/Finish/Container';

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Configuration: {
      screen: Configuration,
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
