import { combineReducers } from 'redux'
import { reducer as gameReducer } from './game'
import { reducer as navigationReducer } from './navigation'

export const rootReducer = combineReducers({
  game: gameReducer,
  navigation: navigationReducer,
});
