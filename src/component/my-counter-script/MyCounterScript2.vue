<template>
  <section>
    <h3>Counter {{ counter }}</h3>
    <h3>Square {{ squareCounter }}</h3>
    <div>
      <button class="p-5" v-on:click="counter += 1">+1</button>
      <button v-on:click="counter -= 1">-1</button>
    </div>
  </section>
</template>

<script lang="ts" src="./MyCounterScript2.ts"></script>

<style scoped>
h1 {
  color: green;
}
</style>
