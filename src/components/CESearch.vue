<script setup lang="ts">
defineProps<{
  label: string;
  placeholder: string;
}>();

const emit = defineEmits(["onSearch"]);

const searchHandler = (searchValue) => emit("onSearch", searchValue);
</script>

<template>
  <a-form layout="vertical">
    <a-form-item :label="label">
      <a-input-search
        :placeholder="placeholder"
        :allowClear="true"
        @search="searchHandler"
      />
    </a-form-item>
  </a-form>
</template>
