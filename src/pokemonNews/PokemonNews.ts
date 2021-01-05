import { ImageSourcePropType } from 'react-native'

export type PokemonNews = {
  title: string
  description: string
  date: string
  imageSource: ImageSourcePropType
}[]
