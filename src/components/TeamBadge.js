import React from 'react';
import { View } from 'react-native';
import { RkButton, RkText } from 'react-native-ui-kitten';
import { globalStyles } from '../styles/Global';

export const TeamBadge = (props) => (
  <View style={globalStyles.container}>
    <RkText rkType='xxlarge'>{props.team.name}</RkText>
    <RkText>Score&nbsp;: {props.team.score}</RkText>
    <RkButton onPress={props.onButtonPress}>+ 1</RkButton>
  </View>
);
