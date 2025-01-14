<template>
    <span>{{ count.num }}</span> <br>
    <span>{{ count.doubleState }}</span>
     <span>{{ vote.s }}</span> <br>
     <button @click="ssss">sss</button>
</template>
 
<script setup lang='ts'>
import { voteStore } from '@/stores/Vote';
import {countStore} from '../stores/counter'
 const vote=voteStore()
const count =countStore()
 const ssss=()=>{
    vote.add()
 }
</script>
 
<style>
 
</style>