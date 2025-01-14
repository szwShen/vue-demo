<template>
  <Child :name="name" @xxx="handle"></Child>
</template>
<script lang="ts" setup>
import Child from "./Child.vue";
import { ref } from "vue";
var name = ref("szw");
const handle = (...params: any[]) => {
  console.log(params);
};
</script>
