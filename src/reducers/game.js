import { EDIT_TEAMS_NAMES } from '../actions/game';
import { NEW_GAME } from '../actions/game';
import { NEXT_JOKE } from '../actions/game';
import { END_GAME } from '../actions/game';
import { FIRST_TEAM_SCORES } from '../actions/game';
import { SECOND_TEAM_SCORES } from '../actions/game';
import { jokes } from '../../assets/jokes';

const initialState = {
  jokes: Object.entries(jokes).map((joke) => {
    return {
      uuid: joke[0],
      text: joke[1],
    }
  }),
  teams: {
    first: {
      name: '',
      score: 0,
      active: true,
    },
    second: {
      name: '',
      score: 0,
      active: false,
    }
  },
  jokesCount: 0,
  jokesIndex: 0,
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...state,
        teams: initialState.teams,
        jokesCount: initialState.jokesCount,
      };

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

    case FIRST_TEAM_SCORES:
      return {
        ...state,
        teams: {
          ...state.teams,
          first: {
            ...state.teams.first,
            score: state.teams.first.score + 1,
          },
        }
      };

    case SECOND_TEAM_SCORES:
      return {
        ...state,
        teams: {
          ...state.teams,
          second: {
            ...state.teams.second,
            score: state.teams.second.score + 1,
          },
        }
      };

    case NEXT_JOKE:
      return {
        ...state,
        jokesIndex: state.jokesIndex + 1,
        jokesCount: state.jokesCount + 1,
        teams: {
          first: {
            ...state.teams.first,
            active: !state.teams.first.active,
          },
          second: {
            ...state.teams.second,
            active: !state.teams.second.active,
          }
        }
      }

    case END_GAME:
      return {
        ...state,
        jokesIndex: state.jokesIndex + 1,
      }

    default:
      return state
  }
}

export default gameReducer;
