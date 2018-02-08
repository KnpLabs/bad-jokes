import { combineReducers } from 'redux';
import jokesReducer from './jokes';
import gameReducer from './game';

export const rootReducer = combineReducers({
  jokes: jokesReducer,
  game: gameReducer,
});
