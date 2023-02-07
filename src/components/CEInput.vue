<script setup lang="ts">
import type { TExchangeModel } from "@/api/exchangeService/exchangeModel";

defineProps<{
  placeholder: string;
  value: string | null;
  currency: string;
  options: TExchangeModel[];
  fieldNames: {};
  disabled?: boolean;
}>();

const emit = defineEmits(["onInput", "onSelect"]);

const inputHandler = (value: string) => emit("onInput", value);

const selectHandler = (value: string, selectedOption: TExchangeModel) =>
  emit("onSelect", selectedOption);
</script>

<template>
  <a-form-item>
    <a-input-number
      size="large"
      :placeholder="placeholder"
      :value="value"
      :disabled="disabled"
      :controls="false"
      type="number"
      @input="inputHandler"
    >
      <template #addonAfter>
        <a-select
          :value="currency"
          :options="options"
          :fieldNames="fieldNames"
          style="width: 100px"
          @select="selectHandler"
        />
      </template>
    </a-input-number>
  </a-form-item>
</template>
