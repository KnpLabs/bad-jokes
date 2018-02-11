import React from 'react'
import { View, Text } from 'react-native'
import { RkButton } from 'react-native-ui-kitten'
import { globalStyles as style } from '../../styles/Global'
import { Greeting } from '../Greeting'

export const Finish = ({ teams, newGame }) => (
  <View style={style.container}>
    <View style={style.finishContainer}>
      <Greeting teams={teams} />
    </View>
    <RkButton
      style={style.newGameBtn}
      contentStyle={style.boldBtnContent}
      rkType='xlarge'
      onPress={newGame}
    >
      <Text
        style={{
          fontSize: 20,
          color: 'white',
          fontWeight: 'bold'
        }}
      >
        Nouvelle partie
      </Text>
    </RkButton>
  </View>
)
