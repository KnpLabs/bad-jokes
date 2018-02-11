import React from 'react'

export const Screen = ({
  name,
  component: Component,
  screen
}) => null !== screen.match(name)
  ? <Component />
  : null
