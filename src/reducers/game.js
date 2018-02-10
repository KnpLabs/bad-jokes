import {
  EDIT_CONFIGURATION,
  NEW_GAME,
  NEXT_JOKE,
  END_GAME,
  FIRST_TEAM_SCORES,
  SECOND_TEAM_SCORES,
  SKIP_JOKE
} from '../actions/game';
import { jokes } from '../assets/jokes';

const initialState = {
  jokes: Object.entries(jokes).map((joke) => ({
      uuid: joke[0],
      text: joke[1]['joke'],
      manner: joke[1]['manner'],
  })).sort(() => Math.random() - 0.5),
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
  jokesNumber: 10,
  jokesCount: 1,
  jokesIndex: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...state,
        teams: {
          first: {
            ...state.teams.first,
            score: initialState.teams.first.score,
            active: initialState.teams.first.active,
          },
          second: {
            ...state.teams.second,
            score: initialState.teams.second.score,
            active: initialState.teams.second.active,
          }
        },
        jokesCount: initialState.jokesCount,
      };

    case EDIT_CONFIGURATION:
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
        },
        jokesNumber: action.payload.rounds * 2
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
        jokesIndex: state.jokes[state.jokesIndex + 1] ? state.jokesIndex + 1 : 0,
        jokesCount: state.jokesCount + 1,
        teams: {
          first: {
            ...state.teams.first,
            active: !state.teams.first.active,
          },
          second: {
            ...state.teams.second,
            active: !state.teams.second.active,
          },
        }
      };

    case SKIP_JOKE:
      return {
        ...state,
        jokesIndex: state.jokes[state.jokesIndex + 1] ? state.jokesIndex + 1 : 0,
      };

    case END_GAME:
      return {
        ...state,
        jokesIndex: state.jokesIndex + 1,
        jokesCount: initialState.jokesCount,
      };

    default:
      return state
  }
}
