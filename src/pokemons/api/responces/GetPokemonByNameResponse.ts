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
  }[]
}
