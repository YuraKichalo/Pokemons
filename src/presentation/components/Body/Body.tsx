import React from 'react'
import { Text } from 'react-native'
import { BodyProps } from './BodyProps'
import { styles } from './styles'
import { useThemeColor } from 'presentation/utils'

export const Body = (props: BodyProps) => (
  <Text
    {...props}
    style={[
      styles.text,
      props.style,
      { color: useThemeColor(props.color!) }
    ]}
  >
    {props.children}
  </Text>
)
