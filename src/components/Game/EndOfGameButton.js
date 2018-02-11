import React from 'react'
import { RkButton } from 'react-native-ui-kitten'
import { globalStyles as styles } from '../../styles/Global'

export const EndOfGameButton = ({endOfGame}) => (
  <RkButton
    rkType='stretch'
    style={styles.nextJokeBtn}
    contentStyle={styles.boldBtnContent}
    onPress={endOfGame}
  >
    Fin du jeu
  </RkButton>
)

