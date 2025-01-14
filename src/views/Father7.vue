<template>
  <div>
    <Child7>
      <template #="{ $item, $index }">
        <span :style="{color:$item.age>12?'red':'blue'}"> {{ $item }}-{{ $index }}</span>
      </template>
    </Child7>
  </div>
</template>

<script setup lang="ts">
import Child7 from "./Child7.vue";
</script>

<style></style>
