import React from 'react'
import renderer from 'react-test-renderer'
import { Game } from '../Game'
import { F } from 'lodash/fp'

it('renders without crashing', () => {
  const joke = { text: 'foo' }
  const teams = {
    first: 'foo',
    second: 'bar',
  }
  const manner = {
    text: 'French accent',
  }

  const rendered = renderer.create(
    <Game
      jokesCount={10}
      joke={joke}
      manner={manner}
      teams={teams}
      firstTeamScores={F}
      secondTeamScores={F}
    />
  ).toJSON()
  expect(rendered).toBeTruthy()
});

