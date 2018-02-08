import { LOAD_JOKE } from '../actions/jokes';

const initialState = {
  jokes: [],
}

const jokesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_JOKE:
      return {
        ...state
      }
    default:
      return state
  }
}

export default jokesReducer;
