import React from 'react'
import { View } from 'react-native'
import { PokemonsProps } from './PokemonsProps'
import { Body } from 'presentation/components'
import { styles } from './styles'

export const Pokemons = ({ viewModel }: PokemonsProps) => (
  <View>
    {viewModel.pokemons.map(item => (
      <Body
        key={item.name}
        style={styles.tempTextStyles}
      >
        {item.name}
      </Body>
    ))}
  </View>
)
