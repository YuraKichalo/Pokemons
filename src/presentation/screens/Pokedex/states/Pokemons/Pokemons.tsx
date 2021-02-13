import React from 'react'
import { FlatList, View } from 'react-native'
import { PokemonsProps } from './PokemonsProps'
import { styles } from './styles'
import { PokemonItem } from './components'

export const Pokemons = ({ viewModel }: PokemonsProps) => (
  <View style={styles.container}>
    <FlatList
      keyExtractor={(pokemon) => pokemon.name}
      data={viewModel.pokemons}
      contentContainerStyle={styles.pokemonsList}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      renderItem={({ item }) => (
        <PokemonItem
          name={item.name}
          types={item.types}
          sprite={item.sprite}
        />
      )}
    />
  </View>
)
