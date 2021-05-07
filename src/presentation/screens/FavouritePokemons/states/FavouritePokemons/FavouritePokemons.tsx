import React from 'react'
import { FlatList } from 'react-native'
import { Body } from 'presentation/components'
import { FavouritePokemonsProps } from './FavouritePokemonsProps'
import { styles } from './styles'

export const FavouritePokemons = ({ viewModel }: FavouritePokemonsProps) => (
  <>
    <FlatList
      keyExtractor={(pokemon) => pokemon.name}
      data={viewModel.favouritePokemons}
      renderItem={({ item }) => (
        <Body style={styles.tempText}>
          {item.name}
        </Body>
      )}
    />
  </>
)
