import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { RkText, RkButton } from 'react-native-ui-kitten'
import { TeamBadge } from '../TeamBadge'
import { globalStyles } from '../../styles/Global'

export const Game = (props) => {
  let round = Math.floor(props.game.jokesCount / 2) + props.game.jokesCount % 2;

  return (
    <View style={[globalStyles.container, globalStyles.horizontalCenter]}>
      <View style={globalStyles.roundCounterWrapper}>
        <RkText style={globalStyles.roundCounter}>Manche {round}&nbsp;/&nbsp;{props.game.jokesNumber / 2}</RkText>
      </View>
      <ScrollView style={globalStyles.jokeTextWrapper}>
        <RkText style={globalStyles.jokeText}>{props.joke.text}</RkText>
        <RkButton rkType='stretch' style={globalStyles.nextJokeBtn} contentStyle={globalStyles.boldBtnContent} onPress={props.nextJoke}>
          <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Suivant »</Text>
        </RkButton>
        <RkText style={globalStyles.skipJokeText} onPress={props.skipJoke}>Changer de joke</RkText>
      </ScrollView>
      <View style={globalStyles.teamBadges}>
        <TeamBadge team={props.teams.first} onButtonPress={props.firstTeamScores} />
        <TeamBadge team={props.teams.second} onButtonPress={props.secondTeamScores} />
      </View>
    </View>
  );
};
