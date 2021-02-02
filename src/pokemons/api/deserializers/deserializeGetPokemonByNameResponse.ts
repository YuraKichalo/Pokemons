import { GetPokemonByNameResponse } from '../responces'
import { Pokemon } from '../../Pokemon'

export const deserializeGetPokemonByNameResponse = (data: GetPokemonByNameResponse) => (<Pokemon>{
  name: data.name,
  types: data.types.map(typeItem => typeItem.type.name)
})
