import React from 'react'
import { observer } from 'mobx-react'
import { styles } from './styles'
import { Header, Screen, Title } from 'presentation/components'
import { Strings } from 'presentation/assets'
import * as States from './states'
import { PokedexProps } from './PokedexProps'

export const Pokedex = observer(({ viewModel, router }: PokedexProps) => (
  <Screen style={styles.container}>
    <Header
      rightIconTitle='menu'
      onRightIconPress={() => router.navigateToMenuModal()}
    />
    <Title>
      {Strings.pokedex.title}
    </Title>
    {viewModel.pokemons.length === 0 && (
      <States.Loading />
    )}

    {viewModel.pokemons.length !== 0 && (
      <States.Pokemons viewModel={viewModel} />
    )}
  </Screen>
))
