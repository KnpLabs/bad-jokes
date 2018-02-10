import React from 'react'
import { View } from 'react-native'
import { RkText } from 'react-native-ui-kitten'
import { globalStyles } from '../../styles/Global'

export const Scores = (props) => (
  <View style={globalStyles.scoreViewWrapper}>
    <View style={globalStyles.scoreView}>
      <RkText>{props.teams.first.name}</RkText>
      <RkText>&nbsp;: </RkText>
      <RkText style={globalStyles.scoreCount}>{props.teams.first.score}</RkText>
      <RkText> points</RkText>
    </View>
    <View style={globalStyles.scoreView}>
      <RkText>{props.teams.second.name}</RkText>
      <RkText>&nbsp;: </RkText>
      <RkText style={globalStyles.scoreCount}>{props.teams.second.score}</RkText>
      <RkText> points</RkText>
    </View>
  </View>
)
