import React from 'react'
import { FlatList, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FavouritePokemonsProps } from './FavouritePokemonsProps'
import { styles } from './styles'
import { Pokemon } from 'pokemons'
import { AppRoutes } from 'presentation'

export const FavouritePokemons = ({ viewModel }: FavouritePokemonsProps) => {
  const navigation = useNavigation()

  const navigateToPokemonDetails = (pokemon: Pokemon) => {
    navigation.navigate(AppRoutes.PokemonDetails, { pokemon })
  }

  return (
    <>
      <FlatList
        keyExtractor={(pokemon) => pokemon.name}
        data={viewModel.favouritePokemons}
        numColumns={2}
        contentContainerStyle={styles.scrollContentContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.pokemonImageContainer}
            onPress={() => navigateToPokemonDetails(item)}
          >
            <Image
              source={{ uri: item.sprite }}
              style={styles.pokemonImage}
            />
          </TouchableOpacity>
        )}
      />
    </>
  )
}
