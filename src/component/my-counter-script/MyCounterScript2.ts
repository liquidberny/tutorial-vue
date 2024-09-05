import {  defineComponent   } from 'vue';
import { useCounter } from '../../composables/useCounter';

export default defineComponent({
  props: {
    value: {type: Number, required: true, }
  },
  setup(){
    const { counter, squareCounter } =useCounter(6)

    // const counter = ref(5);
    // const squareCounter = computed(() => counter.value * counter.value)
    return{
      counter: counter,
      squareCounter: squareCounter,
    }
  }
})