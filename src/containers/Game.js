import React from 'react';
import { connect } from 'react-redux';
import { Game as GameComponent } from '../components/Game';
import { firstTeamScores, secondTeamScores, nextJoke } from '../actions/game';

class GameContainer extends React.Component {
  render() {
    return <GameComponent
      joke={this.props.joke}
      teams={this.props.teams}
      game={this.props.game}
      firstTeamScores={this.props.firstTeamScores}
      secondTeamScores={this.props.secondTeamScores}
      nextJoke={this.props.nextJoke}
    />
  }
};

const mapStateToProps = (state) => ({
  joke: state.game.jokes[state.game.jokesIndex],
  teams: state.game.teams,
  game: state.game,
});

const mapDispatchToProps = (dispatch) => ({
  firstTeamScores: () => dispatch(firstTeamScores()),
  secondTeamScores: () => dispatch(secondTeamScores()),
  nextJoke: () => dispatch(nextJoke()),
})

export const Game = connect(mapStateToProps, mapDispatchToProps)(GameContainer);
