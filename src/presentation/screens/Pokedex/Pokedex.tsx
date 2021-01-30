import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { styles } from './styles'
import { Body, Header, Screen, Title } from 'presentation/components'
import { COLORS, Strings } from 'presentation/assets'
import { PokedexViewModel } from './PokedexViewModel'
import { ActivityIndicator, View } from 'react-native'

export const Pokedex = observer(() => {
  const [viewModel] = useState(() => new PokedexViewModel())

  return (
    <Screen style={styles.container}>
      <Header rightIconTitle='menu' />
      <Title>
        {Strings.pokedex.title}
      </Title>
      {viewModel.pokemonNames.length === 0 && (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator
            size={'large'}
            color={COLORS.green}
          />
        </View>
      )}

      {viewModel.pokemonNames.length !== 0 && (
        viewModel.pokemonNames.map(item => (
          <Body key={item}>
            {item}
          </Body>
        ))
      )}
    </Screen>
  )
})
