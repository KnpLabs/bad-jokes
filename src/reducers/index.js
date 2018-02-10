import { combineReducers } from 'redux'
import { reducer as gameReducer } from './game'

export const rootReducer = combineReducers({
  game: gameReducer,
});
