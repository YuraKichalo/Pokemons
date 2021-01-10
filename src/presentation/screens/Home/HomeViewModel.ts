import { makeAutoObservable } from 'mobx'
import { NewsDataSource } from 'news'
import { HomeRouter } from './HomeRouter'
import { Strings } from 'presentation/assets'

export class HomeViewModel {
  public get pokemonNews() {
    return NewsDataSource
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

  public onViewAllPress = () => {
    this.router.navigateToNews()
  }
}
