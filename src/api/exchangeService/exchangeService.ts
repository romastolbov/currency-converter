import { API_URL } from "@/utils/constants"

import type { TExchangeService } from "./types"

export const exchangeService: TExchangeService = () => {
  return {
    getRates: async () => {
      try {
        const res = await (await fetch(API_URL)).json()
        return res.Valute
      } catch (e: unknown) {
        console.debug(e)
        throw e
      }
    }
  }
}
