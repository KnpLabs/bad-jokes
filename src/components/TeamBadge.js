import React from 'react';
import { View } from 'react-native';
import { RkButton, RkText } from 'react-native-ui-kitten';
import { globalStyles } from '../styles/Global';

const styleSelector = active => active ? globalStyles.teamBadgeInnerActive : globalStyles.teamBadgeInnerInactive;

export const TeamBadge = (props) => (
  <View style={[globalStyles.container, globalStyles.horizontalCenter, globalStyles.teamBadgeInner, styleSelector(props.team.active)]}>
    <RkText rkType='xxlarge'>{props.team.name}</RkText>
    <RkText style={globalStyles.teamScore}>Score&nbsp;: {props.team.score}</RkText>
    <RkButton rkType='small' style={globalStyles.redBtn} contentStyle={globalStyles.boldBtnContent} onPress={props.onButtonPress}>+ 1</RkButton>
  </View>
);
