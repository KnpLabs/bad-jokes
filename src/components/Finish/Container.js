import React from 'react'
import { connect } from 'react-redux'
import { Finish } from './Finish'
import { newGame } from '../../actions/game'

const mapStateToProps = state => ({
  teams: state.game.teams,
})

const mapDispatchToProps = dispatch => ({
  newGame: () => dispatch(newGame()),
})

export const Container = connect(mapStateToProps, mapDispatchToProps)(Finish)
