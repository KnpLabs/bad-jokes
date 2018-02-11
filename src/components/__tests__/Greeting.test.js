import React from 'react'
import renderer from 'react-test-renderer'
import { Greeting } from '../Greeting'

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

  const rendered = renderer.create(<Greeting teams={teams} />).toJSON()
  expect(rendered).toBeTruthy()
});


