export type EvolutionChain = {
  id: number
  chain: {
    pokemonName: string
    evolvesTo: {
      pokemonName: string
      minEvolutionLevel: number
      evolvesTo: {
        pokemonName: string
        minEvolutionLevel: number
      }
    }
  }
}
