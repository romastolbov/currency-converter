<script setup lang="ts">
import { computed } from "vue";

import { useExchangeStore } from "@/stores/exchange";

import type { TExchangeModel } from "@/api/exchangeService/exchangeModel";

import CESearch from "@/components/CESearch.vue";
import CESelectBasePrice from "@/components/CESelectBasePrice.vue";
import CECurrenciesList from "@/components/CECurrenciesList.vue";

const store = useExchangeStore();
const value = computed(() => store.activeBaseCurrencyId);
const options = computed(() => store.currenciesSelectOptions);
const data = computed(() => store.currenciesList);
const activeBaseCurrency = computed(() => store.activeBaseCurrency);
const selectHandler = (selectedOption: TExchangeModel) => {
  store.setActiveBaseCurrency(selectedOption);
};

const searchHandler = (searchValue: string) => {
  store.setSearchValue(searchValue);
};
</script>

<template>
  <CESearch
    label="Поиск"
    placeholder="Введите название или код валюты..."
    @onSearch="searchHandler"
  />
  <CESelectBasePrice
    label="Базовая валюта"
    :value="value"
    :options="options"
    @onSelect="selectHandler"
  />
  <CECurrenciesList
    title="Курс валют"
    :data="data"
    :baseCurrency="activeBaseCurrency"
  />
</template>
