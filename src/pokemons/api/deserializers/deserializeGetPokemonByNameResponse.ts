import { GetPokemonByNameResponse } from '../responces'
import { Pokemon } from '../../Pokemon'

export const deserializeGetPokemonByNameResponse = (data: GetPokemonByNameResponse) => (<Pokemon>{
  name: data.name,
  sprite: data.sprites.front_default,
  types: data.types.map(typeItem => typeItem.type.name),
  order: data.order
})
