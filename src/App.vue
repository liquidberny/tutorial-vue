<template>
  <h1>mi primera app</h1>
  <hr>
  <MyCounter :value="5"/>
  <hr>
  <MyCounterScript :value="5"/>
</template>

<script lang="ts" setup>
import MyCounter from './component/MyCounter.vue';
import MyCounterScript from './component/MyCounterScript.vue';

</script>
