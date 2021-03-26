import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { Body } from 'presentation/components'
import { Strings } from 'presentation/assets'

export const About = () => (
  <View style={styles.container}>
    <Body style={styles.description}>
      Lorem ipsum dolor sit amet, mel te ocurreret vituperata,
      at his cibo summo. Iusto meliore veritus est an, ex idque etiam cum,
      cu odio vivendo mel.
    </Body>
    <View style={styles.heightAndWeightContainer}>
      <View style={styles.heightContainer}>
        <Body style={styles.measureType}>
          Height
        </Body>
        <Body style={styles.measureValue}>
          132123123
        </Body>
      </View>
      <View>
        <Body style={styles.measureType}>
          Weight
        </Body>
        <Body style={styles.measureValue}>
          1314534435
        </Body>
      </View>
    </View>
    <Body style={styles.subtitle}>
      {Strings.pokemonDetails.about.breeding}
    </Body>
    <Body style={styles.subtitle}>
      {Strings.pokemonDetails.about.location}
    </Body>
    <Body style={styles.subtitle}>
      {Strings.pokemonDetails.about.training}
    </Body>
  </View>
)
