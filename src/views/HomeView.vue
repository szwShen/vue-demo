<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome  v-bind="{a:1,b:2}"   title="安纳金"></TheWelcome>
  </main>
</template>
