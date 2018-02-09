import React from 'react';
import { View, ScrollView } from 'react-native';
import { RkText, RkButton } from 'react-native-ui-kitten';
import { TeamBadge } from './TeamBadge';
import { globalStyles } from '../styles/Global';

export const Game = (props) => {
  let round = Math.floor(props.game.jokesCount / 2) + props.game.jokesCount % 2;

  return (
    <View style={[globalStyles.container, globalStyles.horizontalCenter]}>
      <View style={globalStyles.roundCounterWrapper}>
        <RkText>Manche {round}&nbsp;/&nbsp;5</RkText>
      </View>
      <ScrollView style={globalStyles.jokeTextWrapper}>
        <RkText style={globalStyles.jokeText}>{props.joke.text}</RkText>
        {(
          props.game.jokesCount >= 10
            ? <RkButton rkType='stretch' style={globalStyles.nextJokeBtn} onPress={props.endOfGame}>Fin du jeu</RkButton>
            : <RkButton rkType='stretch' style={globalStyles.nextJokeBtn} onPress={props.nextJoke}>Suivant »</RkButton>
        )}
      </ScrollView>
      <View style={globalStyles.teamBadges}>
        <TeamBadge team={props.teams.first} onButtonPress={props.firstTeamScores} />
        <TeamBadge team={props.teams.second} onButtonPress={props.secondTeamScores} />
      </View>
    </View>
  );
};
