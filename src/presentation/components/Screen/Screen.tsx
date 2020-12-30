import React from 'react'
import { View } from 'react-native'
import { ScreenProps } from './ScreenProps'
import { styles } from './styles'

export const Screen = (props: ScreenProps) => (
  <View
    {...props}
    style={[styles.screen, props.style]}
  >
    {props.children}
  </View>
)
