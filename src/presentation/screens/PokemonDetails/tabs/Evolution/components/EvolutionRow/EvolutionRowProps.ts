import { ViewProps } from 'react-native'

export interface EvolutionRowProps extends ViewProps {
  fromIconUri: string
  toIconUri: string
  level: number
}
