import React from 'react'
import { Text } from 'react-native'
import { RkButton } from 'react-native-ui-kitten'
import { globalStyles as styles } from '../../styles/Global'

export const NextJokeButton = ({nextJoke}) => (
  <RkButton
    rkType='stretch'
    style={styles.nextJokeBtn}
    contentStyle={styles.boldBtnContent}
    onPress={nextJoke}
  >
    <Text
      style={{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
      }}
    >
      Suivant »
    </Text>
  </RkButton>
)
