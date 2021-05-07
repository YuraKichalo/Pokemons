import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { styles } from './styles'
import { Header, Screen, Title } from 'presentation/components'
import { Strings } from 'presentation/assets'
import { FavouritePokemonsViewModel } from './FavouritePokemonsViewModel'
import * as States from './states'

export const FavouritePokemons = observer(() => {
  const [viewModel] = useState(() => new FavouritePokemonsViewModel())

  return (
    <Screen style={styles.container}>
      <Header />
      <Title style={styles.title}>
        {Strings.favouritePokemons.title}
      </Title>
      {viewModel.favouritePokemons.length === 0 && (
        <States.FavouritePokemonsNotSelected />
      )}
      {viewModel.favouritePokemons.length !== 0 && (
        <States.FavouritePokemons viewModel={viewModel} />
      )}
    </Screen>
  )
})
