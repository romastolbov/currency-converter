import { API_URL } from "@/utils/constants";

import type { TExchangeModel } from "./exchangeModel";
import type { TExchangeService } from "./types";

export const exchangeService: TExchangeService = () => {
  return {
    getRates: async () => {
      try {
        const response = await (await fetch(API_URL)).json();

        if (!response || !response?.Valute) return [];

        // @ts-ignore
        const result: TExchangeModel[] = Object.values(response?.Valute);
        return result;
      } catch (e: unknown) {
        console.debug(e);
        throw e;
      }
    },
  };
};
