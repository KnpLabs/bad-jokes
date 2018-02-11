import React from 'react'
import renderer from 'react-test-renderer'
import { F } from 'lodash/fp'
import { Finish } from '../Finish'

it('renders without crashing', () => {
  const teams = {
    first: {
      name: 'foo',
      score: 3,
    },
    second: {
      name: 'foo',
      score: 2,
    }
  }

  const rendered = renderer.create(<Finish teams={teams} newGame={F} />).toJSON()
  expect(rendered).toBeTruthy()
});

