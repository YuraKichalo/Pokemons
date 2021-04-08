import React from 'react'
import { Image, View } from 'react-native'
import { styles } from './styles'
import { Body, Divider, Icon, Row } from 'presentation/components'
import { COLORS, Strings } from 'presentation/assets'
import { EvolutionProps } from './EvolutionProps'

export const Evolution = ({ pokemon }: EvolutionProps) => (
  <View style={styles.container}>
    <Body style={styles.subtitle}>
      {Strings.pokemonDetails.evolution.chain}
    </Body>
    <Row
      centered
      style={styles.chainRow}
    >
      <Image
        source={{ uri: pokemon.sprite }}
        style={styles.pokemonImage}
      />
      <View style={styles.levelContainer}>
        <Icon
          size={30}
          name='arrow-forward-circle'
        />
        <Body style={styles.level}>
          Lvl 34
        </Body>
      </View>
      <Image
        source={{ uri: pokemon.sprite }}
        style={styles.pokemonImage}
      />
    </Row>

    <Divider
      height={1}
      color={COLORS.gray}
      style={styles.divider}
    />

    <Row
      centered
      style={styles.chainRow}
    >
      <Image
        source={{ uri: pokemon.sprite }}
        style={styles.pokemonImage}
      />
      <View style={styles.levelContainer}>
        <Icon
          size={30}
          name='arrow-forward-circle'
        />
        <Body style={styles.level}>
          Lvl 34
        </Body>
      </View>
      <Image
        source={{ uri: pokemon.sprite }}
        style={styles.pokemonImage}
      />
    </Row>
  </View>
)
