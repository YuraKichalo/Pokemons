import React from 'react'
import { View, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { ScreenProps } from './ScreenProps'
import { styles } from './styles'

export const Screen = (props: ScreenProps) => {
  const screen = (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        {...props}
        style={[styles.screen, props.style]}
      />
    </TouchableWithoutFeedback>
  )

  return screen
}
