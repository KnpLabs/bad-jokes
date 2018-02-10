import React from 'react'
import { View } from 'react-native'
import { RkButton } from 'react-native-ui-kitten'
import { globalStyles } from '../../styles/Global'
import { Greeting } from '../Greeting'
import { Scores } from './Scores'

export const Finish = (props) => (
  <View style={globalStyles.container}>
    <View style={globalStyles.finishContainer}>
      <Greeting teams={props.teams} />
      <Scores teams={props.teams} />
    </View>
    <RkButton style={globalStyles.newGameBtn}
              contentStyle={globalStyles.boldBtnContent}
              rkType='xlarge'
              onPress={props.newGame}>Nouvelle partie</RkButton>
  </View>
)
