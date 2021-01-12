import React, { useState } from 'react'
import { Divider, Header, Screen } from 'presentation/components'
import { styles } from './styles'
import { ScrollView } from 'react-native'
import { NewsViewModel } from './NewsViewModel'
import { NewsItem } from './components/NewsItem'
import { COLORS } from '../../assets/theme'

export const News = () => {
  const [viewModel] = useState(() => new NewsViewModel())

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
    >
      <Screen style={styles.container}>
        <Header />
        {viewModel.news.map((newsItem, index) => (
          <React.Fragment key={index}>
            <NewsItem
              imageSource={newsItem.imageSource}
              title={newsItem.title}
              date={newsItem.date}
              text={newsItem.text}
            />
            {viewModel.news.length !== index + 1 && (
              <Divider
                height={2}
                color={COLORS.darkGray}
                style={styles.divider}
              />
            )}
          </React.Fragment>
        ))}
      </Screen>
    </ScrollView>
  )
}
