<template>
        <span>{{ money }}</span>
        <Dauthor ref="son"></Dauthor>
        <button @click="handle">handl</button>
        <span>father{{ car }}</span>
</template>
    
<script setup lang='ts'>
import { ref ,provide} from 'vue';
import Dauthor from './Dauthor.vue';
let car=ref("法拉第")
provide('car',car)
const son=ref()
    var money=ref(100)
    const handle=()=>{

        console.log(son.value.money);
    }
    defineExpose({money})
</script>
    
<style>
    
</style>