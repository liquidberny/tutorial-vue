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