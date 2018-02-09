import React from 'react';
import { connect } from 'react-redux';
import { Finish as FinishComponent } from '../components/Finish';

class FinishContainer extends React.Component {
    render() {
        return <FinishComponent teams={this.props.teams} navigation={this.props.navigation} />
    }
};

const mapStateToProps = (state) => ({
    teams: state.game.teams,
});

export const Finish = connect(mapStateToProps)(FinishContainer);
