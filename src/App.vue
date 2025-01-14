<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { Plus } from "@element-plus/icons-vue";
</script>

<template>
  <svg-icon name="phone" color="red"></svg-icon>
  <el-button type="primary" :icon="Plus">Primary</el-button>
  <div class="header">aaaaaaaaaaaaaa</div>
</template>

<style scoped lang="scss">
 
.header {
  color: $color;
}
</style>
