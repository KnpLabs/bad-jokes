import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
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
        <RkText style={globalStyles.jokeManner}>{props.manner.text}</RkText>
        <RkText style={globalStyles.jokeText}>{props.joke.text}</RkText>
        <View style={globalStyles.skipWrapper}>
          <RkText style={globalStyles.skipJokeText} onPress={props.skipJoke}>
            <Ionicons name="md-sync" size={42} color="red" />
          </RkText>
          <RkButton rkType='stretch' style={globalStyles.nextJokeBtn} contentStyle={globalStyles.boldBtnContent} onPress={props.nextJoke}>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Suivant »</Text>
          </RkButton>
        </View>
      </ScrollView>
      <View style={globalStyles.teamBadges}>
        <TeamBadge team={props.teams.first} onButtonPress={props.firstTeamScores} />
        <TeamBadge team={props.teams.second} onButtonPress={props.secondTeamScores} />
      </View>
    </View>
  );
};
