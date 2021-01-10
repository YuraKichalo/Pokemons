import React from 'react'
import { styles } from './styles'
import { Header, Screen, Title } from 'presentation/components'
import { Strings } from '../../assets'

export const Pokedex = () => (
  <Screen style={styles.container}>
    <Header
      rightIconTitle='menu'
      style={styles.header}
    />
    <Title>
      {Strings.pokedex.title}
    </Title>
  </Screen>
)
