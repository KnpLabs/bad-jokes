import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/store'
import { Application } from './src/components/Application'
import { Container as Home } from './src/components/Home/Container'

const App = () => (
  <Provider store={store}>
    <Application />
  </Provider>
);

export default App;
