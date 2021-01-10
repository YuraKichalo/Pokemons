import React from 'react'
import { TouchableOpacity } from 'react-native'
import { HeaderProps } from './HeaderProps'
import { styles } from './styles'
import { Row, IconGoBack, Icon } from 'presentation/components'

export const Header = (props: HeaderProps) => (
  <Row
    {...props}
    centered
  >
    <IconGoBack style={styles.iconGoBack} />
    <TouchableOpacity
      style={styles.iconMenuContainer}
    >
      <Icon
        size={30}
        name={props.rightIconTitle}
      />
    </TouchableOpacity>
  </Row>
)
