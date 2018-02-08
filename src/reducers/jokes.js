import { LOAD_JOKE } from '../actions/jokes';
import { jokes } from '../../assets/jokes';

const initialState = {
  jokes: Object.entries(jokes).map((joke) => {
    return {
      uuid: joke[0],
      text: joke[1],
    }
  }),
}

const jokesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default jokesReducer;
