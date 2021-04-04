import { Stat } from './Stat'

export type Pokemon = {
  name: string
  sprite: string
  types: string[]
  order: number
  baseExperience: number
  height: number
  weight: number
  gender: {
    malePercentage: number
  }
  stats: Stat[]
}
