import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { observer } from 'mobx-react'
import { styles } from './styles'
import { Body, Header, Screen, Title } from 'presentation/components'
import { Strings } from 'presentation/assets'
import { FavouritePokemonsViewModel } from './FavouritePokemonsViewModel'

export const FavouritePokemons = observer(() => {
  const [viewModel] = useState(() => new FavouritePokemonsViewModel())

  return (
    <Screen style={styles.container}>
      <Header />
      <Title style={styles.title}>
        {Strings.favouritePokemons.title}
      </Title>
      <FlatList
        keyExtractor={(pokemon) => pokemon.name}
        data={viewModel.favouritePokemons}
        renderItem={({ item }) => (
          <Body>
            {item.name}
          </Body>
        )}
      />
    </Screen>
  )
})
