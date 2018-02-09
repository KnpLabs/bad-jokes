import React from 'react';
import { View } from 'react-native';
import { RkButton, RkText } from 'react-native-ui-kitten';
import { globalStyles } from '../styles/Global';

const styleSelector = active => active ? globalStyles.teamBadgeInnerActive : globalStyles.teamBadgeInnerInactive;

export const TeamBadge = (props) => (
  <View style={[globalStyles.container, globalStyles.horizontalCenter, globalStyles.teamBadgeInner, styleSelector(props.team.active)]}>
    <RkText rkType='large'>{props.team.name}</RkText>
    <RkText>Score&nbsp;: {props.team.score}</RkText>
    <RkButton style={globalStyles.redBtn} onPress={props.onButtonPress}>+ 1</RkButton>
  </View>
);
