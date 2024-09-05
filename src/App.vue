<template>
  <h1 className="text-3xl font-bold underline">Hello world!</h1>
  <hr />
  <MyCounter :value="5" />
  <hr />
  <MyCounterScript :value="4" />
  <hr />
  <MyCounterScript2 :value="6" />
</template>

<script lang="ts" setup>
import MyCounter from './component/MyCounter.vue';
import MyCounterScript from './component/MyCounterScript.vue';
import MyCounterScript2 from './component/my-counter-script/MyCounterScript2.vue';
</script>
