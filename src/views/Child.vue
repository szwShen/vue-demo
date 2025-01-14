<template>
  <div>
    <button @click="handle(1, 2, $event)">dianwochuanzu</button>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps(["name"]);
const $emit = defineEmits(["xxx"]);
const handle = () => {
  $emit("xxx", "1", 2);
};
</script>
