<template>
    <section>
      <h3>Counter {{ counter }}</h3>
      <h3>Square {{ squareCounter }}</h3>
      <div>
        <button v-on:click="counter += 1">+1</button>
        <button v-on:click="counter -= 1">-1</button>
      </div>
    </section>
  </template>
  
  <script lang="ts" setup>
import { useCounter } from '../composables/useCounter';

  const { counter, squareCounter } =useCounter(6)
  // import { computed, ref } from 'vue';

  // interface Props{
  //   value?: number;
  // }
  // const props = defineProps<Props>()
  
  // const counter = ref(props.value ?? 10);
  // const squareCounter = computed(() => counter.value * counter.value);
  </script>
  
  <style scoped>
  h1 {
    color: green;
  }
  </style>