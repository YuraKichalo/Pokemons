import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { Body, Divider } from 'presentation/components'
import { COLORS, Strings } from 'presentation/assets'
import { EvolutionProps } from './EvolutionProps'
import { EvolutionRow } from './components/EvolutionRow'

export const Evolution = ({ pokemon }: EvolutionProps) => (
  <View style={styles.container}>
    <Body style={styles.subtitle}>
      {Strings.pokemonDetails.evolution.chain}
    </Body>
    <EvolutionRow
      fromIconUri={pokemon.sprite}
      toIconUri={pokemon.sprite}
      level={34}
    />
    <Divider
      height={1}
      color={COLORS.gray}
      style={styles.divider}
    />
    <EvolutionRow
      fromIconUri={pokemon.sprite}
      toIconUri={pokemon.sprite}
      level={34}
    />
  </View>
)
