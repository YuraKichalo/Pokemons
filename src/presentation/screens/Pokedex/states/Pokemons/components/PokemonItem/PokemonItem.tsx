import React from 'react'
import { styles } from './styles'
import { Body } from 'presentation/components'
import { PokemonItemProps } from './PokemonItemProps'

export const PokemonItem = (props: PokemonItemProps) => (
  <Body style={styles.tempTextStyles}>
    {props.name}
  </Body>
)
