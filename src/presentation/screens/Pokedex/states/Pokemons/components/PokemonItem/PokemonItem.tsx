import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Body, ChildrenSpacing } from 'presentation/components'
import { PokemonItemProps } from './PokemonItemProps'
import { capitalize } from 'presentation/utils'
import { getTypeColor } from '../../getTypeColor'

export const PokemonItem = (props: PokemonItemProps) => (
  <TouchableOpacity
    {...props}
    style={[
      styles.container,
      { backgroundColor: getTypeColor(props.types[0]) },
      props.style
    ]}
  >
    <Body style={styles.name}>
      {capitalize(props.name)}
    </Body>
    <ChildrenSpacing spacing={8}>
      {props.types.map(type => (
        <View style={styles.typeContainer}>
          <Body style={styles.type}>
            {type}
          </Body>
        </View>
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
