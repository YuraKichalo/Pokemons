import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Body } from 'presentation/components'
import { CategoryButtonProps } from './CategoryButtonProps'
import { styles } from './styles'

export const CategoryButton = (props: CategoryButtonProps) => (
  <TouchableOpacity
    {...props}
    style={[
      styles.container,
      props.style,
      { backgroundColor: props.color, shadowColor: props.color }
    ]}
  >
    <Body style={styles.title}>
      {props.title}
    </Body>
  </TouchableOpacity>
)
