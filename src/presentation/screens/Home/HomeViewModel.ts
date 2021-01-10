import { makeAutoObservable } from 'mobx'
import { PokemonNewsDataSource } from 'pokemonNews'
import { HomeRouter } from './HomeRouter'
import { Strings } from 'presentation/assets'

export class HomeViewModel {
  public get pokemonNews() {
    return PokemonNewsDataSource
  }

  private router: HomeRouter

  public constructor(router: HomeRouter) {
    makeAutoObservable(this)
    this.router = router
  }

  public onCategoryPress = (title: string) => {
    switch (title) {
      case Strings.home.categories.pokedex:
        this.router.navigateToPokedex()
    }
  }
}
