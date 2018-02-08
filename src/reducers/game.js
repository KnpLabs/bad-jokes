import { EDIT_TEAMS_NAMES } from '../actions/game';

const initialState = {
  teams: {
    first: {
      name: 'Team Ostie',
      score: 0,
      active: true,
    },
    second: {
      name: 'Team Câlisse',
      score: 0,
      active: false,
    }
  },
  currentJoke: {},
  jokesCount: 0,
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_TEAMS_NAMES:
      return {
        ...state,
        teams: {
          first: {
            ...state.teams.first,
            name: action.payload.firstTeam,
          },
          second: {
            ...state.teams.second,
            name: action.payload.secondTeam,
          }
        }
      };

    default:
      return state
  }
}

export default gameReducer;
