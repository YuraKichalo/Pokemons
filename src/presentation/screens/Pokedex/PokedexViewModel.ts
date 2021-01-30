import { makeAutoObservable } from 'mobx'
import { PokemonApi } from 'pokemons'

export class PokedexViewModel {
  public pokemonNames: string[] = []

  public constructor() {
    makeAutoObservable(this)
    this.getPokemonNames()
  }

  public getPokemonNames = async () => {
    const pokemonNames = await PokemonApi.getPokemonNames()
    this.pokemonNames = pokemonNames!
  }

  public setPokemonNames = (names: string[]) => {
    this.pokemonNames = names
  }
}
