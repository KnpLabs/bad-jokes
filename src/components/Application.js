import React from 'react'
import { View } from 'react-native'
import { Container as Screen } from './Screen/Container'
import { Container as Home } from './Home/Container'
import { Container as Game } from './Game/Container'

export const Application = () => (
  <View>
    <Screen name='Home' component={Home} />
    <Screen name='Game' component={Game} />
  </View>
)
