<script setup lang="ts">
import type { TExchangeModel } from "@/api/exchangeService/exchangeModel";

defineProps<{
  label: string;
  value: string;
  options: TExchangeModel[];
}>();

const emit = defineEmits(["onSelect"]);

const fieldNames = {
  label: "selectLabel",
  value: "selectValue",
};

const selectHandler = (value: string, selectedOption: TExchangeModel) =>
  emit("onSelect", selectedOption);
</script>

<template>
  <a-form layout="vertical">
    <a-form-item :label="label">
      <a-select
        :value="value"
        :options="options"
        :fieldNames="fieldNames"
        @select="selectHandler"
      />
    </a-form-item>
  </a-form>
</template>
