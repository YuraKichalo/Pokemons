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
  const [viewModel] = useState(() => new EvolutionViewModel(pokemon.name))

  return (
    <View style={styles.container}>
      <Body style={styles.subtitle}>
        {Strings.pokemonDetails.evolution.chain} #{viewModel.evolutionChainId}
      </Body>
      <EvolutionRow
        fromIconUri={viewModel.pokemonsFirstEvolutionImage!}
        toIconUri={viewModel.pokemonsSecondEvolutionImage!}
        level={viewModel.firstEvolutionTriggeringLevel ?? Strings.pokemonDetails.evolution.unknownLevel}
      />
      <Divider
        height={1}
        color={COLORS.gray}
        style={styles.divider}
      />
      <EvolutionRow
        fromIconUri={viewModel.pokemonsSecondEvolutionImage!}
        toIconUri={viewModel.pokemonsThirdEvolutionImage!}
        level={viewModel.secondEvolutionTriggeringLevel ?? Strings.pokemonDetails.evolution.unknownLevel}
      />
      <Body>
        Lorem ipsum dolor sit amet, mel te ocurreret vituperata,
        at his cibo summo. Iusto meliore veritus est an, ex idque etiam cum,
        cu odio vivendo mel. Etiam dicit ea usu, ea eos affert omnium, id eum
        elit oblique urbanitas. Cum recteque appellantur te. His in tollit doctus
        inciderint, ubique mediocrem reformidans his ut. Falli oratio torquatos ne
        duo, qui ei dolor nostrud definitiones. Lorem ipsum dolor sit amet, mel te ocurreret vituperata,
        at his cibo summo. Iusto meliore veritus est an, ex idque etiam cum,
        cu odio vivendo mel. Etiam dicit ea usu, ea eos affert omnium, id eum
        elit oblique urbanitas. Cum recteque appellantur te. His in tollit doctus
        inciderint, ubique mediocrem reformidans his ut. Falli oratio torquatos ne
        duo, qui ei dolor nostrud definitiones. Lorem ipsum dolor sit amet, mel te ocurreret vituperata,
        at his cibo summo. Iusto meliore veritus est an, ex idque etiam cum,
        cu odio vivendo mel. Etiam dicit ea usu, ea eos affert omnium, id eum
        elit oblique urbanitas. Cum recteque appellantur te. His in tollit doctus
        inciderint, ubique mediocrem reformidans his ut. Falli oratio torquatos ne
        duo, qui ei dolor nostrud definitiones. Lorem ipsum dolor sit amet, mel te ocurreret vituperata,
        at his cibo summo. Iusto meliore veritus est an, ex idque etiam cum,
        cu odio vivendo mel. Etiam dicit ea usu, ea eos affert omnium, id eum
        elit oblique urbanitas. Cum recteque appellantur te. His in tollit doctus
        inciderint, ubique mediocrem reformidans his ut. Falli oratio torquatos ne
        duo, qui ei dolor nostrud definitiones. Lorem ipsum dolor sit amet, mel te ocurreret vituperata,
        at his cibo summo. Iusto meliore veritus est an, ex idque etiam cum,
        cu odio vivendo mel. Etiam dicit ea usu, ea eos affert omnium, id eum
        elit oblique urbanitas. Cum recteque appellantur te.
      </Body>
    </View>
  )
})
