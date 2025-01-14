<template>
  <div>
    <span>{{ money }}</span>
    <!-- <Child4 :modelValue="money" @update:modelValue="handle"></Child4> -->
    <Child4 v-model="money"></Child4>
  </div>
</template>
<script setup lang="ts">
import Child4 from "./Child4.vue";
import { ref } from "vue";
const money = ref(5000);
const handle = (val) => {
  money.value = val;
};
</script>
