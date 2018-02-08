export const EDIT_TEAMS_NAMES = 'EDIT_TEAMS_NAMES';

export function editTeamsNames(firstTeam, secondTeam) {
  return {
    type: EDIT_TEAMS_NAMES,
    payload: {
      firstTeam,
      secondTeam,
    }
  }
}
