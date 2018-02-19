import React from 'react'
import renderer from 'react-test-renderer'
import { F } from 'lodash/fp'
import { SkipJokeButton } from '../SkipJokeButton'

it('renders without crashing', () => {
  const rendered = renderer.create(
    <SkipJokeButton skipJoke={F} />
  ).toJSON()
  expect(rendered).toBeTruthy()
});


