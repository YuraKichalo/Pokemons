import React from 'react'
import { useRoute } from '@react-navigation/native'
import { styles } from './styles'
import { Body, Header, Screen } from 'presentation/components'
import { PokemonDetailsRouteProp } from './PokemonDetailsRouteProp'

export const PokemonDetails = () => {
  const route = useRoute<PokemonDetailsRouteProp>()

  return (
    <Screen style={styles.container}>
      <Header />
      <Body>
        {route.params.pokemon.name}
      </Body>
    </Screen>
  )
}
