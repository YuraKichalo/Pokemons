import { ImageSourcePropType, ViewProps } from 'react-native'

export interface NewsItemProps extends ViewProps {
  title: string
  date: string
  imageSource: ImageSourcePropType
}
