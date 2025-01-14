<template></template>
<script setup lang="ts">
import $bus from "../utils";

import { onMounted } from "vue";
onMounted(() => {
  $bus.on("hehe", (type, e) => {
    console.log(type, e);
  });
});
</script>
