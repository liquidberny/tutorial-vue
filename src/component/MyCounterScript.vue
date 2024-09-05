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

<script lang="ts">
import { computed, defineComponent,  ref } from 'vue';

export default defineComponent({
  props: {
    value: {type: Number, required: true, }
  },
  setup(){
    const counter = ref(5);
    const squareCounter = computed(() => counter.value * counter.value)
    return{
      counter: counter,
      squareCounter: squareCounter,
    }
  }
})

</script>

<style scoped>
h1 {
  color: green;
}
</style>
