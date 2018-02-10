import { connect } from 'react-redux'
import { Screen } from './Screen'

const mapStateToProps = (state) => ({
  screen: state.navigation.screen,
})

export const Container = connect(mapStateToProps)(Screen)
