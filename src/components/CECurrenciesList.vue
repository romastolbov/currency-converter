<script setup lang="ts">
import listItemRender from "@/utils/helpers/listItemRender";
import difference from "@/utils/helpers/difference";

import type { TExchangeModel } from "@/api/exchangeService/exchangeModel";

import CEDifferenceTag from "@/components/CEDifferenceTag.vue";

defineProps<{
  title: string;
  data: TExchangeModel[];
  baseCurrency: TExchangeModel;
}>();
</script>

<template>
  <a-list bordered :data-source="data">
    <template #header>
      <div>{{ title }}</div>
    </template>
    <template #renderItem="{ item }">
      <a-list-item>
        {{ listItemRender(baseCurrency, item) }}
        <CEDifferenceTag :difference="difference(baseCurrency, item)" />
      </a-list-item>
    </template>
  </a-list>
</template>
