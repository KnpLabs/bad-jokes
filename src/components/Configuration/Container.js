import React from 'react';
import { connect } from 'react-redux';
import { Configuration } from './Configuration';
import { editConfiguration } from '../../actions/game';

class ConfigurationContainer extends React.Component {
  render() {
    return <Configuration
      navigation={this.props.navigation}
      teams={this.props.teams}
      jokesNumber={this.props.jokesNumber}
      editConfiguration={this.props.editConfiguration}
    />
  }
};

const mapStateToProps = (state) => ({
  teams: state.game.teams,
  jokesNumber: state.game.jokesNumber,
});

const mapDispatchToProps = (dispatch) => {
  return {
    editConfiguration: (firstTeam, secondTeam, rounds) => {
      dispatch(editConfiguration(firstTeam, secondTeam, rounds))
    }
  };
};

export const Container = connect(mapStateToProps, mapDispatchToProps)(ConfigurationContainer);
