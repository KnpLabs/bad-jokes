import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  dockedToTop: {
    position: 'absolute',
    top: 0,
  },

  dockedToBottom: {
    position: 'absolute',
    bottom: 0,
  },

  homeImg: {
    flex: 0.8,
    width: undefined,
    height: undefined,
  },

  homeBtn: {
    flex: 0.2,
    position: 'absolute',
    backgroundColor: 'red',
    bottom: 20,
    left: 20,
    right: 20,
  },

  teamBadges: {
    flexDirection: 'row',
    borderColor: 'gray',
    borderTopWidth: 0.5,
  },

  teamBadge: {
    flex: 0.5,
  },
});
