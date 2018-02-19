import React from 'react';
import { connect } from 'react-redux';
import { Game } from './Game';
import {
  skipJoke,
  nextJoke,
  endOfGame,
  firstTeamScores,
  secondTeamScores
} from '../../actions/game';

const mapStateToProps = state => ({
  joke: state.game.jokes[state.game.jokesIndex],
  manner: ((generateNumberInInterval(0, 100) < 60)
    ? state.game.manners[generateNumberInInterval(0, state.game.manners.length)]
    : ''),
  teams: state.game.teams,
  jokesCount: state.game.jokesCount,
  round: Math.floor(state.game.jokesCount / 2) + state.game.jokesCount % 2,
});

const mapDispatchToProps = (dispatch) => ({
  firstTeamScores: () => dispatch(firstTeamScores()),
  secondTeamScores: () => dispatch(secondTeamScores()),
  nextJoke: () => dispatch(nextJoke()),
  endOfGame: () => dispatch(endOfGame()),
  skipJoke: () => dispatch(skipJoke()),
})

export const Container = connect(mapStateToProps, mapDispatchToProps)(Game);
