import React from 'react';
import { View } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import { TeamBadge } from './TeamBadge';
import { globalStyles } from '../styles/Global';

export const Game = (props) => (
  <View style={[globalStyles.container, globalStyles.horizontalCenter]}>
    <RkText style={globalStyles.dockedToTop}>Manche 1 / 5</RkText>
    <RkText>{props.joke.text}</RkText>
    <View style={[globalStyles.container, globalStyles.dockedToBottom, globalStyles.teamBadges]}>
      <TeamBadge style={globalStyles.teamBadge} team={props.teams.first} />
      <TeamBadge style={globalStyles.teamBadge} team={props.teams.second} />
    </View>
  </View>
);
