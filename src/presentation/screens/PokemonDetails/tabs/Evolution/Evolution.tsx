import React, { useState } from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { Body, Divider } from 'presentation/components'
import { COLORS, Strings } from 'presentation/assets'
import { EvolutionProps } from './EvolutionProps'
import { EvolutionRow } from './components/EvolutionRow'
import { observer } from 'mobx-react'
import { EvolutionViewModel } from './EvolutionViewModel'

export const Evolution = observer(({ pokemon }: EvolutionProps) => {
  const [viewModel] = useState(() => new EvolutionViewModel(pokemon.id))

  return (
    <View style={styles.container}>
      <Body style={styles.subtitle}>
        {Strings.pokemonDetails.evolution.chain}
      </Body>
      <EvolutionRow
        fromIconUri={pokemon.sprite}
        toIconUri={pokemon.sprite}
        level={viewModel.firstEvolutionTriggeringLevel}
      />
      <Divider
        height={1}
        color={COLORS.gray}
        style={styles.divider}
      />
      <EvolutionRow
        fromIconUri={pokemon.sprite}
        toIconUri={pokemon.sprite}
        level={viewModel.secondEvolutionTriggeringLevel}
      />
    </View>
  )
})
