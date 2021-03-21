import { PokedexNavigationProp } from './PokedexNavigationProp'
import { PokedexRoutes } from './PokedexRoutes'
import { AppRoutes } from 'presentation'

export class PokedexRouter {
  private navigation: PokedexNavigationProp

  public constructor(navigation: PokedexNavigationProp) {
    this.navigation = navigation
  }

  public navigateToMenuModal = () => {
    this.navigation.navigate(PokedexRoutes.MenuModal)
  }

  public navigateToPokemonDetail = () => {
    this.navigation.navigate(AppRoutes.PokemonDetails)
  }
}
