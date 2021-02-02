import { makeAutoObservable } from 'mobx'
import { Pokemon, PokemonApi } from 'pokemons'

export class PokedexViewModel {
  public pokemonNames: string[] = []
  public pokemons: Pokemon[] = []

  public constructor() {
    makeAutoObservable(this)
    this.getPokemonNames()
      .then(this.getPokemon)
  }

  public getPokemonNames = async () => {
    const pokemonNames = await PokemonApi.getPokemonNames()
    this.pokemonNames = pokemonNames!
  }

  public getPokemon = async () => {
    await Promise.all([
      this.pokemonNames.map(async (name) => {
        const pokemon = await PokemonApi.getPokemonByName(name)
        this.pokemons.push(pokemon!)
      })
    ])
  }
}
