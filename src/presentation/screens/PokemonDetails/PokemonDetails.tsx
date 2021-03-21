import React from 'react'
import { styles } from './styles'
import { Body, Header, Screen } from 'presentation/components'

export const PokemonDetails = () => (
  <Screen style={styles.container}>
    <Header />
    <Body>
      PokemonDetails
    </Body>
  </Screen>
)
