import React from 'react'
import { View } from 'react-native'
import { TabsControllerProps } from './TabsControllerProps'
import { COLORS } from 'presentation/assets'
import { Row } from 'presentation/components'
import { styles } from './styles'

export const TabsController = (props: TabsControllerProps) => (
  <Row
    {...props}
    style={[styles.container, props.style]}
  >
    {Array.from({ length: props.amount }, (_, index) => (
      <View
        style={[
          styles.tab,
          props.selectedTabIndex === index && { backgroundColor: COLORS.black }
        ]}
      />
    ))}
  </Row>
)
