import { makeAutoObservable } from 'mobx'
import { PokemonNewsDataSource } from 'pokemonNews'

export class HomeViewModel {
  public get pokemonNews() {
    return PokemonNewsDataSource
  }

  public constructor() {
    makeAutoObservable(this)
  }
}
