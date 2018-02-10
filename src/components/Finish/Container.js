import React from 'react'
import { connect } from 'react-redux'
import { Finish } from './Finish'
import { newGame } from '../../actions/game'

class FinishContainer extends React.Component {
  newGame() {
    this.props.newGame();
    this.props.navigation.navigate('Player');
  }

  render() {
    return <Finish teams={this.props.teams} newGame={this.newGame.bind(this)} />
  }
};

const mapStateToProps = (state) => ({
  teams: state.game.teams,
});

const mapDispatchToProps = (dispatch) => ({
  newGame: () => dispatch(newGame()),
});

export const Container = connect(mapStateToProps, mapDispatchToProps)(FinishContainer);
