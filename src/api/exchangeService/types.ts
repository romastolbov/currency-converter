import type { TExchangeModel } from "./exchangeModel";

export type TExchangeService<T = TExchangeModel> = () => {
  getRates: () => Promise<T[]>;
};
