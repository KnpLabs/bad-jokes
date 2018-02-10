import { combineReducers } from 'redux';
import GameReducer from './Game';

export const RootReducer = combineReducers({
  game: GameReducer,
});
