import React from 'react';
import { View, ScrollView } from 'react-native';
import { RkText, RkButton } from 'react-native-ui-kitten';
import { TeamBadge } from './TeamBadge';
import { globalStyles } from '../styles/Global';

export const Game = (props) => {
  let round = Math.floor(props.game.jokesCount / 2) + props.game.jokesCount % 2;

  return (
    <View style={[globalStyles.container, globalStyles.horizontalCenter]}>
      <RkText style={globalStyles.dockedToTop}>Manche {round} / 5</RkText>
      <ScrollView style={globalStyles.jokeTextWrapper}>
        <RkText style={globalStyles.jokeText}>{props.joke.text}</RkText>
        {(
          props.game.jokesCount >= 10 ?
          <RkButton style={globalStyles.nextJokeBtn} onPress={props.endOfGame}>End of game</RkButton> :
          <RkButton style={globalStyles.nextJokeBtn} onPress={props.nextJoke}>Next »</RkButton>
        )}

      </ScrollView>
      <View style={[globalStyles.container, globalStyles.dockedToBottom, globalStyles.teamBadges]}>
        <TeamBadge style={globalStyles.teamBadge} team={props.teams.first} onButtonPress={props.firstTeamScores} />
        <TeamBadge style={globalStyles.teamBadge} team={props.teams.second} onButtonPress={props.secondTeamScores} />
      </View>
    </View>
  );
};
