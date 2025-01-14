<template>
   <ul v-for="(item,index) in arr">
   <slot :$item="item" :$index="index"></slot>
   </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
const arr = ref([
  { name: "szw", age: 11 },
  { name: "szw2", age: 13 },
]);
</script>

<style></style>
