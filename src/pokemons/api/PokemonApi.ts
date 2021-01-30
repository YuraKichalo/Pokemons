import { Api } from 'api'
import * as Deserializers from './deserializers'

export const PokemonApi = new class extends Api {
  public getPokemonNames = async () => {
    const url = 'pokemon'

    try {
      const response = await this.api.get(url)
      return Deserializers.deserializePokemonNamesResponse(response.data)
    } catch (error) {
      console.error(`${error.message} on URL: ${url}`)
    }
  }
}()
