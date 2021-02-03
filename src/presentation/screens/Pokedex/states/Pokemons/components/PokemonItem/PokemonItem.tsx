import React from 'react'
import { styles } from './styles'
import { Body, ChildrenSpacing } from 'presentation/components'
import { PokemonItemProps } from './PokemonItemProps'
import { TouchableOpacity, View } from 'react-native'
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
    {/* Here should be an pokemon image */}
    <View style={styles.imagePlaceholder} />
  </TouchableOpacity>
)
