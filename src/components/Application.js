import React from 'react'
import { View } from 'react-native'
import { Container as Screen } from './Screen/Container'
import { Container as Home } from './Home/Container'
import { Container as Configuration} from './Configuration/Container'
import { Container as Game } from './Game/Container'
import { Container as Finish } from './Finish/Container'
import { globalStyles as styles } from '../styles/Global'

export const Application = () => (
  <View style={styles.container}>
    <Screen name='Home' component={Home} />
    <Screen name='Configuration' component={Configuration} />
    <Screen name='Game' component={Game} />
    <Screen name='Finish' component={Finish} />
  </View>
)
