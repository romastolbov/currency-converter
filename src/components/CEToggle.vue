<script setup lang="ts">
import { SwapOutlined } from "@ant-design/icons-vue";

defineProps<{
  disabled: boolean;
}>();

const emit = defineEmits(["onClick"]);

const clickHandler = () => emit("onClick");
</script>

<template>
  <a-form-item>
    <a-button size="large" @click="clickHandler" :disabled="disabled">
      <swap-outlined />
    </a-button>
  </a-form-item>
</template>
