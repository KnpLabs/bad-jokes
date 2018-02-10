import React from 'react'

export const Screen = ({screen, name, component: Component}) => screen === name ? (<Component />) : null
