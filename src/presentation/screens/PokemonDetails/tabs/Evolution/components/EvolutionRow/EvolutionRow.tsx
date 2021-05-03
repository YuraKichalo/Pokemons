import React from 'react'
import { Image, View } from 'react-native'
import { EvolutionRowProps } from './EvolutionRowProps'
import { Body, Icon } from 'presentation/components'
import { COLORS } from 'presentation/assets'
import { styles } from './styles'

export const EvolutionRow = (props: EvolutionRowProps) => (
  <View
    {...props}
    style={[styles.container, props.style]}
  >
    <Image
      source={{ uri: props.fromIconUri }}
      style={styles.pokemonImage}
    />
    <View style={styles.levelContainer}>
      <Icon
        size={30}
        color={COLORS.gray}
        name='arrow-forward-circle'
      />
      <Body style={styles.level}>
        Lvl {props.level}
      </Body>
    </View>
    <Image
      source={{ uri: props.toIconUri }}
      style={styles.pokemonImage}
    />
  </View>
)
