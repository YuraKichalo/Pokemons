import { GetPokemonByNameResponse } from '../responces'
import { Pokemon } from '../../Pokemon'
import _ from 'lodash'

export const deserializeGetPokemonByNameResponse = (data: GetPokemonByNameResponse) => (<Pokemon>{
  name: data.name,
  sprite: data.sprites.front_default,
  types: data.types.map(typeItem => typeItem.type.name),
  order: data.order,
  baseExperience: data.base_experience,
  height: data.height,
  weight: data.weight,
  gender: {
    malePercentage: _.random(0, 100)
  }
})
