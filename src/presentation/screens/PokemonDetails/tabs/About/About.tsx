import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { Body, ChildrenSpacing, Icon, Row } from 'presentation/components'
import { COLORS, Strings } from 'presentation/assets'

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
    <Row>
      <View style={styles.breedingSubtitlesContainer}>
        <ChildrenSpacing spacing={13}>
          <Body style={styles.breedingSubtitle}>
            {Strings.pokemonDetails.about.gender}
          </Body>
          <Body style={styles.breedingSubtitle}>
            {Strings.pokemonDetails.about.eggGroups}
          </Body>
          <Body style={styles.breedingSubtitle}>
            {Strings.pokemonDetails.about.eggCycle}
          </Body>
        </ChildrenSpacing>
      </View>
      <View>
        <ChildrenSpacing spacing={13}>
          <Row>
            <Row
              centered
              style={styles.maleIconAndValueContainer}
            >
              <Icon
                size={15}
                name='male'
                color={COLORS.blue}
                style={styles.genderIcon}
              />
              <Body>87%</Body>
            </Row>
            <Row centered>
              <Icon
                size={15}
                name='female'
                color={COLORS.red}
                style={styles.genderIcon}
              />
              <Body>13%</Body>
            </Row>
          </Row>
          <Body>Monster</Body>
          <Body>Grass</Body>
        </ChildrenSpacing>
      </View>
    </Row>
    <Body style={styles.subtitle}>
      {Strings.pokemonDetails.about.location}
    </Body>
    <Body style={styles.subtitle}>
      {Strings.pokemonDetails.about.training}
    </Body>
  </View>
)
