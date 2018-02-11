import React from 'react'
import renderer from 'react-test-renderer'
import { F } from 'lodash/fp'
import { EndOfGameButton } from '../EndOfGameButton'

it('renders without crashing', () => {
  const rendered = renderer.create(<EndOfGameButton endOfGame={F} />).toJSON()
  expect(rendered).toBeTruthy()
});


