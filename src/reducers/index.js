import { combineReducers } from 'redux';
import jokesReducer from './jokes';

const rootReducer = combineReducers({
  jokes: jokes,
});

export default rootReducer;
