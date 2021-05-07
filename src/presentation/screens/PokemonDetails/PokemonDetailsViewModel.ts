import { makeAutoObservable } from 'mobx'
import { Pokemon, PokemonsStore } from 'pokemons'

export class PokemonDetailsViewModel {
  public swiperActiveIndex = 0
  public isPokemonFavourite = false

  public constructor() {
    makeAutoObservable(this)
  }

  public setSwiperActiveIndex = (index: number) => {
    this.swiperActiveIndex = index
  }

  public setIsPokemonFavourite = (isFavourite: boolean) => {
    this.isPokemonFavourite = isFavourite
  }

  public setFavouritePokemons = (pokemon: Pokemon) => {
    PokemonsStore.setFavouritePokemons(pokemon)
  }
}
