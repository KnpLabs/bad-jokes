import React from 'react'
import { View, ScrollView } from 'react-native'
import { RkText, RkButton } from 'react-native-ui-kitten'
import { EndOfGameButton } from './EndOfGameButton'
import { NextJokeButton } from './NextJokeButton'
import { SkipJokeButton } from './SkipJokeButton'
import { TeamBadge } from '../TeamBadge'
import { globalStyles as styles } from '../../styles/Global'

export const Game = ({
  jokesCount,
  round,
  joke,
  manner,
  teams,
  nextJoke,
  skipJoke,
  endOfGame,
  firstTeamScores,
  secondTeamScores
}) => (
  <View style={[styles.container, styles.horizontalCenter]}>
    <View style={styles.roundCounterWrapper}>
      <RkText style={styles.roundCounter}>Manche {round}&nbsp;/&nbsp;5</RkText>
    </View>
    <ScrollView style={styles.jokeTextWrapper}>
      <RkText style={styles.jokeManner}>{manner.text}</RkText>
      <RkText style={styles.jokeText}>{joke.text}</RkText>
      <View style={styles.skipWrapper}>
        <SkipJokeButton skipJoke={skipJoke} />
        <NextJokeButton nextJoke={nextJoke} />
      </View>
    </ScrollView>
    <View style={styles.teamBadges}>
      <TeamBadge team={teams.first} onButtonPress={firstTeamScores} />
      <TeamBadge team={teams.second} onButtonPress={secondTeamScores} />
    </View>
  </View>
);
