export const EDIT_CONFIGURATION = 'EDIT_CONFIGURATION';
export const NEXT_JOKE = 'NEXT_JOKE';
export const SKIP_JOKE = 'SKIP_JOKE';
export const NEW_GAME = 'NEW_GAME';
export const END_GAME = 'END_GAME';
export const FIRST_TEAM_SCORES = 'FIRST_TEAM_SCORES';
export const SECOND_TEAM_SCORES = 'SECOND_TEAM_SCORES';

export function editConfiguration(firstTeam, secondTeam, rounds) {
  return {
    type: EDIT_CONFIGURATION,
    payload: {
      firstTeam,
      secondTeam,
      rounds
    }
  };
}

export function nextJoke() {
  return {
    type: NEXT_JOKE,
  };
}

export function skipJoke() {
  return {
    type: SKIP_JOKE,
  };
}

export function newGame() {
  return {
    type: NEW_GAME,
  };
}

export function endOfGame() {
  return {
    type: END_GAME,
  };
}

export function firstTeamScores() {
  return {
    type: FIRST_TEAM_SCORES
  }
}

export function secondTeamScores() {
  return {
    type: SECOND_TEAM_SCORES
  }
}
