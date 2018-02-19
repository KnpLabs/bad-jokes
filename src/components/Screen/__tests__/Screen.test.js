import React from 'react'
import renderer from 'react-test-renderer'
import { View } from 'react-native'
import { Screen } from '../Screen'
import { F } from 'lodash/fp'

it('renders without crashing', () => {
  const rendered = renderer.create(
    <Screen name='foo' component={View} screen='foo' />
  ).toJSON()
  expect(rendered).toBeTruthy()
})

it('renders the component', () => {
  const rendered = renderer.create(
    <Screen name='foo' component={View} screen='foo' />
  ).toJSON()

  expect(rendered).not.toBe(null)
  expect(rendered.type).toBe('View')
})

it('does not render the component', () => {
  const rendered = renderer.create(
    <Screen name='foo' component={View} screen='bar' />
  ).toJSON()

  expect(rendered).toBe(null)
})
