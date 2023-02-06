const exchanger = (
  nominalBaseCurrency: number,
  firstCurrency,
  secondCurrency
) => {
  if (secondCurrency.CharCode === "RUB") {
    return firstCurrency.Value;
  }

  if (firstCurrency.CharCode === "RUB") {
    if (secondCurrency.Nominal > 1) {
      return secondCurrency.Nominal / secondCurrency.Value;
    } else return nominalBaseCurrency / secondCurrency.Value;
  }

  if (nominalBaseCurrency > 1 && secondCurrency.Nominal <= 1) {
    const rubles = firstCurrency.Value / nominalBaseCurrency;

    return (rubles / secondCurrency.Value) * nominalBaseCurrency;
  }

  if (secondCurrency.Nominal > 1 && nominalBaseCurrency <= 1) {
    return (
      (nominalBaseCurrency / secondCurrency.Value) *
      firstCurrency.Value *
      secondCurrency.Nominal
    );
  }

  if (
    nominalBaseCurrency > 1 &&
    secondCurrency.Nominal > 1 &&
    secondCurrency.Nominal > nominalBaseCurrency
  ) {
    return (
      (nominalBaseCurrency / secondCurrency.Value) *
      firstCurrency.Value *
      firstCurrency.Nominal
    );
  }

  if (nominalBaseCurrency > 1 && secondCurrency.Nominal > 1) {
    return (
      ((nominalBaseCurrency / secondCurrency.Value) * firstCurrency.Value) /
      secondCurrency.Nominal
    );
  }

  return (nominalBaseCurrency / secondCurrency.Value) * firstCurrency.Value;
};

export default exchanger;
