<template>
  <div>{{ modelValue }}</div>
  <button @click="send">send</button>
</template>
<script setup lang="ts">
import $bus from "../utils";
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
const send = () => {
  emit("update:modelValue", props.modelValue + 1000);
};
</script>
