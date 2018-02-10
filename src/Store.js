import { RootReducer } from './reducers/Index';
import { createStore } from 'redux';

const Store = createStore(RootReducer);

export default Store;
