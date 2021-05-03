import { Api } from '../../api'
import * as Deserializers from './deserializers'

export const EvolutionApi = new class extends Api {
  public getEvolutionChain = async (id: number) => {
    const url = `evolution-chain/${id}`

    try {
      const response = await this.api.get(url)
      return Deserializers.deserializeGetEvolutionChainResponse(response.data)
    } catch (error) {
      console.error(`${error.message} on URL: ${url}`)
    }
  }
}()
