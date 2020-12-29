import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const App = () => (
  <View style={styles.container}>
    <Text>WELCOME</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
