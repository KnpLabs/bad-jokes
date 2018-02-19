import when from 'when-switch'
import { NAVIGATE } from '../actions/navigation'

const INITIAL_STATE = {
  screen: 'Home',
}

export const reducer = (
  state = INITIAL_STATE,
  { type, screen = null }
) => console.log(type, screen) || when(type)
  .is(NAVIGATE, {
    ...state,
    screen,
  })
  .else(state)
