import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Title } from 'presentation/components'
import { Strings } from 'presentation/assets'

export const App = () => (
  <View style={styles.container}>
    <Title>
      {Strings.welcome}
    </Title>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
