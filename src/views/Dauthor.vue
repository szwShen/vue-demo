<template>
     <span>{{ money }}</span>    
     <button @click="handle($parent)">zi</button>
     <Sunzi></Sunzi>
     <Sunzi2></Sunzi2>
</template>
 
    
<script setup lang='ts'>

import { ref } from 'vue';
import Sunzi from './Sunzi.vue';
import Sunzi2 from './Sunzi2.vue';

const money= ref(500)   
const handle=($parent:any)=>{
    console.log($parent);
    $parent.money-=100
    
}
defineExpose({money})
</script>
    
<style>
    
</style>