import React from 'react';
import { connect } from 'react-redux';
import { Player } from './Player';
import { editTeamsNames } from '../../actions/game';

class PlayerContainer extends React.Component {
  render() {
    return <Player
      navigation={this.props.navigation}
      teams={this.props.teams}
      editTeamsNames={this.props.editTeamsNames}
    />
  }
};

const mapStateToProps = (state) => ({
  teams: state.game.teams,
});

const mapDispatchToProps = (dispatch) => {
  return {
    editTeamsNames: (firstTeam, secondTeam) => {
      dispatch(editTeamsNames(firstTeam, secondTeam))
    }
  };
};

export const Container = connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
