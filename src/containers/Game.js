import React from 'react';
import { connect } from 'react-redux';
import { Game as GameComponent } from '../components/Game';

class GameContainer extends React.Component {
  render() {
    return <GameComponent joke={this.props.joke} teams={this.props.teams} />
  }
};

const mapStateToProps = (state) => ({
  joke: state.game.jokes[state.game.jokesIndex],
  teams: state.game.teams,
});

export const Game = connect(mapStateToProps)(GameContainer);
