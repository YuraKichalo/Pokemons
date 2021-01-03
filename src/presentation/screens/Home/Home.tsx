import React from 'react'
import { View, ScrollView } from 'react-native'
import { COLORS, Strings } from 'presentation/assets'
import { Body, Screen, TextInput, Title } from 'presentation/components'
import { styles } from './styles'
import { CategoryButton } from './components'

const CATEGORIES = [
  { title: Strings.home.categories.pokedex, color: COLORS.green },
  { title: Strings.home.categories.moves, color: COLORS.red },
  { title: Strings.home.categories.abilities, color: COLORS.blue },
  { title: Strings.home.categories.items, color: COLORS.yellow },
  { title: Strings.home.categories.locations, color: COLORS.purple },
  { title: Strings.home.categories.typeCharts, color: COLORS.brown }
]

export const Home = () => (
  <ScrollView
    contentContainerStyle={[styles.scrollContainer, { backgroundColor: 'red' }]}
  >
    <Screen style={styles.container}>
      <View style={styles.topContentContainer}>
        <Title
          style={styles.title}
        >
          {Strings.home.title}
        </Title>
        <TextInput
          placeholder={Strings.home.inputPlaceholder}
          containerStyles={styles.inputContainer}
        />
        <View style={styles.categoriesContainer}>
          {CATEGORIES.map((category) => (
            <CategoryButton
              key={category.title}
              title={category.title}
              color={category.color}
              style={styles.categoryButton}
            />
          ))}
        </View>
      </View>
      <View style={styles.bottomContentContainer}>
        <Body>
          Placeholder
        </Body>
      </View>
    </Screen>
  </ScrollView>

)
