import React from 'react';
import { View } from 'react-native';
import { RkButton, RkText } from 'react-native-ui-kitten';
import { globalStyles } from '../styles/Global';
import { Greeting } from "./Greeting";

export const Finish = (props) => (
    <View style={globalStyles.container}>
        <View style={globalStyles.finishContainer}>
            <Greeting teams={props.teams} />
        </View>
        <RkButton style={globalStyles.homeBtn}
                  rkType='xlarge'
                  onPress={props.newGame}
                  contentStyle={{color: 'white'}}>Nouvelle partie</RkButton>
    </View>
);
