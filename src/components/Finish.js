import React from 'react';
import { View } from 'react-native';
import { RkButton, RkText } from 'react-native-ui-kitten';
import { globalStyles } from '../styles/Global';

function Greeting(props) {
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
}

export const Finish = (props, navigation) => (
    <View style={globalStyles.container}>
        <View style={globalStyles.finishContainer}>
            <Greeting teams={props.teams} />
        </View>
        <RkButton style={globalStyles.homeBtn}
                  rkType='xlarge'
                  onPress={() => props.navigation.navigate('Player')}
                  contentStyle={{color: 'white'}}>Nouvelle partie</RkButton>
    </View>
);
