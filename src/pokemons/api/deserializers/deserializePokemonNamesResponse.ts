import { GetPokemonNamesResponse } from '../responces'

export const deserializePokemonNamesResponse = (data: GetPokemonNamesResponse) => (
  data.results.map(pokemon => pokemon.name)
)
