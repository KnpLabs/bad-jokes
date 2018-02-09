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

  text: {
    textAlign: 'center',
    fontSize: 30,
    paddingTop: 30,
  },

  finishContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  finishText: {
    textAlign: 'center',
    fontSize: 40,
    paddingTop: 20,
  },

  finishStrong: {
    textAlign: 'center',
    fontSize: 40,
    color: 'red',
    fontWeight: 'bold', 
  },

  error: {
    color: 'red',
    fontSize: 15,
    textAlign: 'center',
    paddingTop: 10,
  },

  field: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 0,
  },

  input: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 20,
    textAlign: 'center'
  },

  btn: {
    backgroundColor: 'red',
    position: 'absolute',
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
