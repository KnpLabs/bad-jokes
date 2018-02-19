import React from 'react';
import { connect } from 'react-redux';
import { Game } from './Game';
import {
  firstTeamScores,
  secondTeamScores,
  nextJoke,
  endOfGame,
  skipJoke
} from '../../actions/game';

class GameContainer extends React.Component {
  nextJoke() {
    if (this.props.game.jokesCount >= this.props.game.jokesNumber) {
      this.props.endOfGame();
      this.props.navigation.navigate('Finish');
    } else {
      this.props.nextJoke();
    }
  }

  render() {
    return <Game
      joke={this.props.joke}
      manner={this.props.manner}
      teams={this.props.teams}
      game={this.props.game}
      firstTeamScores={this.props.firstTeamScores}
      secondTeamScores={this.props.secondTeamScores}
      nextJoke={this.nextJoke.bind(this)}
      skipJoke={this.props.skipJoke}
      navigation={this.props.navigation}
    />
  }
};

const generateNumberInInterval = (min, max) => {
  return Math.floor(Math.random() * parseInt(max)) + parseInt(min);
};

const mapStateToProps = (state) => ({
  joke: state.game.jokes[state.game.jokesIndex],
  manner: ((generateNumberInInterval(0, 100) < 60)
    ? state.game.manners[generateNumberInInterval(0, state.game.manners.length)]
    : ''),
  teams: state.game.teams,
  game: state.game,
});

const mapDispatchToProps = (dispatch) => ({
  firstTeamScores: () => dispatch(firstTeamScores()),
  secondTeamScores: () => dispatch(secondTeamScores()),
  nextJoke: () => dispatch(nextJoke()),
  endOfGame: () => dispatch(endOfGame()),
  skipJoke: () => dispatch(skipJoke()),
})

export const Container = connect(mapStateToProps, mapDispatchToProps)(GameContainer);
