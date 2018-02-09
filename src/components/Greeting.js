import React from 'react';
import { View } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import { globalStyles } from '../styles/Global';

export const Greeting = (props) => {
    const teams = props.teams;

    if (teams.first.score > teams.second.score) {
        return (
            <View>
                <RkText style={globalStyles.finishStrong}>{teams.first.name}</RkText>
                <RkText style={globalStyles.finishText}>a gagné !</RkText>
            </View>
        );
    } else if (teams.first.score < teams.second.score) {
        return (
            <View>
                <RkText style={globalStyles.finishStrong}>{teams.second.name}</RkText>
                <RkText style={globalStyles.finishText}>a gagné !</RkText>
            </View>
        );
    }

    // Same score => equality
    return (
        <View>
            <RkText style={globalStyles.finishStrong}>Egalité !</RkText>
            <RkText style={globalStyles.finishText}>Bande de loosers !</RkText>
        </View>
    );
};
