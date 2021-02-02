import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { styles } from './styles'
import { Header, Screen, Title } from 'presentation/components'
import { Strings } from 'presentation/assets'
import { PokedexViewModel } from './PokedexViewModel'
import * as States from './states'

export const Pokedex = observer(() => {
  const [viewModel] = useState(() => new PokedexViewModel())

  return (
    <Screen style={styles.container}>
      <Header rightIconTitle='menu' />
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
  )
})
