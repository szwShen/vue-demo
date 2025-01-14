<script setup lang="ts">
 import { useAttrs } from "vue";

let $attrs = useAttrs();
console.log($attrs);
 
</script>

 <template>
  <el-button :title="$attrs.title" > {{ $attrs.a }}</el-button>
 </template>