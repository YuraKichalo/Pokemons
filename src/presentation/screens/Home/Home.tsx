import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react'
import { COLORS, Strings } from 'presentation/assets'
import { Body, Screen, TextInput, Title, Row, Divider } from 'presentation/components'
import { styles } from './styles'
import { CategoryButton, NewsItem } from './components'
import { HomeViewModel } from './HomeViewModel'
import { HomeRouter } from './HomeRouter'
import { HomeNavigationProp } from './HomeNavigationProp'

const CATEGORIES = [
  { title: Strings.home.categories.pokedex, color: COLORS.green },
  { title: Strings.home.categories.moves, color: COLORS.red },
  { title: Strings.home.categories.abilities, color: COLORS.blue },
  { title: Strings.home.categories.items, color: COLORS.yellow },
  { title: Strings.home.categories.locations, color: COLORS.purple },
  { title: Strings.home.categories.typeCharts, color: COLORS.brown }
]

export const Home = observer(() => {
  const navigation = useNavigation<HomeNavigationProp>()
  const [router] = useState(() => new HomeRouter(navigation))
  const [viewModel] = useState(() => new HomeViewModel(router))

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
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
                onPress={() => viewModel.onCategoryPress(category.title)}
              />
            ))}
          </View>
        </View>
        <View style={styles.bottomContentContainer}>
          <Row
            centered
            style={styles.bottomContentHeaderContainer}
          >
            <Body style={styles.bottomContentTitle}>
              {Strings.home.pokemonNews}
            </Body>
            <Body
              style={styles.viewAll}
              onPress={() => true}
            >
              {Strings.home.viewAll}
            </Body>
          </Row>
          <View style={styles.newsItemsContainer}>
            {viewModel.pokemonNews.map((newsItem, index) => (
              <React.Fragment key={index}>
                <NewsItem
                  title={newsItem.title}
                  date={newsItem.date}
                  imageSource={newsItem.imageSource}
                />
                {index !== viewModel.pokemonNews.length - 1 && (
                  <Divider
                    height={1}
                    color={COLORS.gray}
                    style={styles.divider}
                  />
                )}
              </React.Fragment>
            ))}
          </View>
        </View>
      </Screen>
    </ScrollView>
  )
})
