import React from 'react';
import { connect } from 'react-redux';
import { Player as PlayerComponent } from '../components/Player';
import { editTeamsNames } from "../actions/game";

class PlayerContainer extends React.Component {
    render() {
        return <PlayerComponent navigation={this.props.navigation}
                                teams={this.props.teams}
                                editTeamsNames={this.props.editTeamsNames} />
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
    }
};

export const Player = connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
