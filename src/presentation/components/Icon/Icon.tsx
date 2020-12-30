import React from 'react'
import { View } from 'react-native'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import { IconProps } from './IconProps'
import { styles } from './styles'

export const Icon = (props: IconProps) => (
  <View
    {...props}
    style={[styles.container, props.style]}
  >
    <IconIonicons
      name={props.name}
      size={props.size}
      color={props.color}
    />
  </View>
)
