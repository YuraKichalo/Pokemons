import { ImageSourcePropType } from 'react-native'

export type News = {
  title: string
  description: string
  date: string
  imageSource: ImageSourcePropType
}[]
