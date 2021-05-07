import { makeAutoObservable } from 'mobx'
import { Pokemon } from './Pokemon'

export const PokemonsStore = new class {
  public fetchedPokemons: Pokemon[] = []
  public favouritePokemons: Pokemon[] = []

  constructor() {
    makeAutoObservable(this)
  }

  public setFetchedPokemons = (pokemon: Pokemon) => {
    this.fetchedPokemons.push(pokemon)
  }

  public setFavouritePokemons = (pokemon: Pokemon) => {
    this.favouritePokemons.push(pokemon)
  }
}()
