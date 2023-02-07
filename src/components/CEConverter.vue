<script setup lang="ts">
import { computed } from "vue";

import { useExchangeStore } from "@/stores/exchange";
import { useConverterStore } from "@/stores/converter";

import type { TExchangeModel } from "@/api/exchangeService/exchangeModel";

import CEInput from "@/components/CEInput.vue";
import CEToggle from "@/components/CEToggle.vue";

const fieldNames = {
  label: "CharCode",
  value: "selectValue",
};

const exchange = useExchangeStore();
const converter = useConverterStore();

const options = computed(() => exchange.currenciesSelectOptions);
const baseValue = computed(() => converter.baseValue);
const baseCurrency = computed(() => converter.baseCurrencyId);
const exchangeValue = computed(() => converter.exchangeValue);
const exchangeCurrency = computed(() => converter.exchangeCurrencyId);
const toggleDisabled = computed(() => converter.toggleDisabled);

const inputHandler = (value: string) => {
  converter.setBaseValue(value);
};

const selectBaseHandler = (selectedOption: TExchangeModel) => {
  converter.setBaseCurrency(selectedOption);
};

const selectExchangeHandler = (selectedOption: TExchangeModel) => {
  converter.setExchangeCurrency(selectedOption);
};

const clickHandler = () => {
  converter.toggleCurrencies();
};
</script>

<template>
  <a-form layout="inline">
    <CEInput
      placeholder="Я хочу поменять..."
      :value="baseValue"
      :options="options"
      :currency="baseCurrency"
      :fieldNames="fieldNames"
      @onInput="inputHandler"
      @onSelect="selectBaseHandler"
    />
    <CEToggle @onClick="clickHandler" :disabled="toggleDisabled" />
    <CEInput
      placeholder="Я получу..."
      :value="exchangeValue"
      :options="options"
      :currency="exchangeCurrency"
      :fieldNames="fieldNames"
      :disabled="true"
      @onSelect="selectExchangeHandler"
    />
  </a-form>
</template>
