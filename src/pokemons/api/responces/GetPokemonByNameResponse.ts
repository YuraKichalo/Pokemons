export interface GetPokemonByNameResponse {
  name: string
  sprites: {
    'front_default': string
  }
  types: {
    slot: number
    type: {
      name: string
      url: string
    }
  }[],
  order: number
  'base_experience': number
  height: number
  weight: number
}
