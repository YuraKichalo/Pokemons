import { ViewProps } from 'react-native'

export interface HeaderProps extends ViewProps {
  rightIconTitle?: string
  onRightIconPress?: () => void
}
