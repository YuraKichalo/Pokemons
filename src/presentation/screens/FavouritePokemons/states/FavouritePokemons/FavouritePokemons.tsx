import React from 'react'
import { FlatList, Image, TouchableOpacity } from 'react-native'
import { FavouritePokemonsProps } from './FavouritePokemonsProps'
import { styles } from './styles'

export const FavouritePokemons = ({ viewModel }: FavouritePokemonsProps) => (
  <>
    <FlatList
      keyExtractor={(pokemon) => pokemon.name}
      data={viewModel.favouritePokemons}
      numColumns={2}
      contentContainerStyle={styles.scrollContentContainer}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.pokemonImageContainer}>
          <Image
            source={{ uri: item.sprite }}
            style={styles.pokemonImage}
          />
        </TouchableOpacity>
      )}
    />
  </>
)
