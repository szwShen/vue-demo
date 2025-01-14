import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const  voteStore=defineStore('vote',()=>{
   const s=ref(10)
   const add=()=>{
    s.value++
   }
   const doubles=computed(()=>s.value*2)
   return {s,add}

})