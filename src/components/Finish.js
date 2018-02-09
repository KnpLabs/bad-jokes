import React from 'react';
import { View } from 'react-native';
import { RkButton, RkText } from 'react-native-ui-kitten';
import { globalStyles } from '../styles/Global';
import { Greeting } from "./Greeting";

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
