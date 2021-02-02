export interface GetPokemonByNameResponse {
  name: string
  types: {
    slot: number,
    type: {
      name: string,
      utl: string
    }
  }[]
}
