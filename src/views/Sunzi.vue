<template>
       <span>{{ count.num }}</span> <br>
       
       <button @click="add">add</button>
</template>
    
<script setup lang='ts'>
import {countStore} from '../stores/counter'
const count =countStore()
const add=()=>{
    count.increment(2)
}
 
</script>
    
<style>
    
</style>