import { makeAutoObservable } from 'mobx'
import { EvolutionApi } from 'evolution'

export class EvolutionViewModel {
  public firstEvolutionTriggeringLevel = 0
  public secondEvolutionTriggeringLevel = 0

  private id: number

  public constructor(id: number) {
    makeAutoObservable(this)
    this.id = id

    this.getEvolutionChain()
  }

  public getEvolutionChain = async () => {
    const evolutionChain = await EvolutionApi.getEvolutionChain(this.id)

    if (evolutionChain) {
      this.firstEvolutionTriggeringLevel = evolutionChain.chain.evolvesTo.minEvolutionLevel
      this.secondEvolutionTriggeringLevel = evolutionChain.chain.evolvesTo.evolvesTo.minEvolutionLevel
    }
  }
}
