import { LOAD_JOKE } from '../actions/jokes';
import { jokes } from '../../assets/jokes';

const initialState = {
  jokes: Object.values(jokes),
}

const jokesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default jokesReducer;
