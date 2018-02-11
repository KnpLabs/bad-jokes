import React from 'react'
import { RkText } from 'react-native-ui-kitten'
import { globalStyles as styles } from '../../styles/Global'

export const SkipJokeButton = ({skipJoke}) => (
  <RkText
    style={styles.skipJokeText}
    onPress={skipJoke}
  >
    Changer de joke
  </RkText>
)
