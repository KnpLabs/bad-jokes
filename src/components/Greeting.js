import React from 'react';
import { View } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import { globalStyles as styles } from '../styles/Global';

export const Greeting = ({teams}) => {
  if (teams.first.score > teams.second.score) {
    return (
      <View>
        <RkText style={styles.finishStrong}>{teams.first.name}</RkText>
        <RkText style={styles.finishText}>a gagné !</RkText>
      </View>
    );
  } else if (teams.first.score < teams.second.score) {
    return (
      <View>
        <RkText style={styles.finishStrong}>{teams.second.name}</RkText>
        <RkText style={styles.finishText}>a gagné !</RkText>
      </View>
    );
  }

  // Same score => equality
  return (
    <View>
      <RkText style={styles.finishStrong}>Égalité&nbsp;!</RkText>
      <RkText style={styles.finishText}>Bande de losers&nbsp;!</RkText>
    </View>
  );
};
