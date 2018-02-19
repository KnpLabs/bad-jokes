import React from 'react'
import renderer from 'react-test-renderer'
import { F } from 'lodash/fp'
import { NextJokeButton } from '../NextJokeButton'

it('renders without crashing', () => {
  const rendered = renderer.create(<NextJokeButton nextJoke={F} />).toJSON()
  expect(rendered).toBeTruthy()
});


