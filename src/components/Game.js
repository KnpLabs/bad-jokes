import React from 'react';
import { View } from 'react-native';
import { RkText, RkButton } from 'react-native-ui-kitten';
import { TeamBadge } from './TeamBadge';
import { globalStyles } from '../styles/Global';

export const Game = (props) => {
  let round = Math.floor(props.game.jokesCount / 2) + props.game.jokesCount % 2;

  return (
    <View style={[globalStyles.container, globalStyles.horizontalCenter]}>
      <RkText style={globalStyles.dockedToTop}>Manche {round} / 5</RkText>
      <RkText>{props.joke.text}</RkText>
      <View style={[globalStyles.container, globalStyles.dockedToBottom, globalStyles.teamBadges]}>
        <TeamBadge style={globalStyles.teamBadge} team={props.teams.first} onButtonPress={props.firstTeamScores} />
        <TeamBadge style={globalStyles.teamBadge} team={props.teams.second} onButtonPress={props.secondTeamScores} />
      </View>
      <RkButton onPress={props.nextJoke}>Next Joke</RkButton>
    </View>
  );
};
