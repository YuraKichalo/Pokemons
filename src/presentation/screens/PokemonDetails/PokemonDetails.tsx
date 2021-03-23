import React from 'react'
import { Image, StatusBar, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useRoute } from '@react-navigation/native'
import { styles } from './styles'
import { Body, Header, Row, Screen, Title } from 'presentation/components'
import { PokemonDetailsRouteProp } from './PokemonDetailsRouteProp'
import { capitalize, getTypeColor } from 'presentation/utils'

const formatPokemonsOrder = (number: number) => {
  if (number >= 100) {
    return `#${number}`
  } else if (number >= 10) {
    return `#0${number}`
  } else {
    return `#00${number}`
  }
}

export const PokemonDetails = () => {
  const route = useRoute<PokemonDetailsRouteProp>()
  const { pokemon } = route.params

  return (
    <Screen style={{ backgroundColor: getTypeColor(pokemon.types[0]) }}>
      <StatusBar barStyle='light-content' />
      <LinearGradient
        colors={
          pokemon.types.length > 1
            ? [getTypeColor(pokemon.types[0])!, getTypeColor(pokemon.types[1])!]
            : [getTypeColor(pokemon.types[0])!, getTypeColor(pokemon.types[0])!]
        }
        locations={[0.6, 0]}
        style={styles.container}
      >
        <Header
          theme='light'
          rightIconTitle='ios-heart-outline'
          onRightIconPress={() => true}
        />
        <Row
          centered
          style={styles.titleContainer}
        >
          <Title style={styles.title}>
            {capitalize(pokemon.name)}
          </Title>
          <Body style={styles.order}>
            {formatPokemonsOrder(pokemon.order)}
          </Body>
        </Row>
        <Row>
          {pokemon.types.map(type => (
            <View
              key={type}
              style={styles.typeContainer}
            >
              <Body style={styles.type}>
                {type}
              </Body>
            </View>
          ))}
        </Row>
      </LinearGradient>
      <View style={styles.bottomContentContainer}>
        <Image
          source={{
            uri: pokemon.sprite
          }}
          style={styles.pokemonImage}
        />
      </View>
    </Screen>
  )
}
