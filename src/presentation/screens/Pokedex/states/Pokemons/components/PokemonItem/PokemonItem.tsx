import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Body, ChildrenSpacing } from 'presentation/components'
import { PokemonItemProps } from './PokemonItemProps'
import { capitalize } from 'presentation/utils'

export const PokemonItem = (props: PokemonItemProps) => (
  <TouchableOpacity
    {...props}
    style={styles.container}
  >
    <Body style={styles.name}>
      {capitalize(props.name)}
    </Body>
    <ChildrenSpacing spacing={8}>
      {props.types.map(type => (
        <Body style={styles.type}>
          {type}
        </Body>
      ))}
    </ChildrenSpacing>
    <Image
      source={{
        uri: props.sprite
      }}
      style={styles.pokemonImage}
    />
  </TouchableOpacity>
)
