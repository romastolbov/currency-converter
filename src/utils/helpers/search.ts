import { TExchangeModel } from "@/api/exchangeService/exchangeModel";

const search = (currency: TExchangeModel, searchValue: string) => {
  const name = currency.Name.toLowerCase();
  const code = currency.CharCode.toLowerCase();
  const value = searchValue.toLowerCase();

  const nameMatches = name.includes(value);
  const codeMatches = code.includes(value);

  if (nameMatches) return nameMatches;
  if (codeMatches) return codeMatches;
  else return false;
};

export default search;
