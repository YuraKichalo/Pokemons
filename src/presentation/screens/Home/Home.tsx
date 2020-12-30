import React from 'react'
import { View } from 'react-native'
import { Strings } from 'presentation/assets'
import { Body, Screen, TextInput, Title } from 'presentation/components'
import { styles } from './styles'

export const Home = () => (
  <Screen style={styles.container}>
    <View style={styles.topContentContainer}>
      <Title
        style={styles.title}
      >
        {Strings.home.title}
      </Title>
      <TextInput
        placeholder='Search for pokemons'
        style={{ marginTop: 200 }}
      />
    </View>
    <View style={styles.bottomContentContainer}>
      <Body>
        Placeholder
      </Body>
    </View>
  </Screen>
)
