import React from 'react'
import { connect } from 'react-redux'
import { Home } from './Home'
import { navigate } from '../../actions/navigation'

const mapDispatchToProps = dispatch => ({
  start: () => dispatch(navigate('Configuration'))
})

export const Container = connect(null, mapDispatchToProps)(Home)
