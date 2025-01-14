<template>
  <button @click="send">send</button>
</template>
<script setup lang="ts">
import $bus from "../utils";
const send = () => {
  $bus.emit("hehe", "ganniniang");
};
</script>
