<script>
import { h,ref } from "vue";
import btn from "./btn.vue";
export default {
  name: "counter",
  setup() {
    let counter = ref(1)
    const counterHandler = ()=>{
        counter.value++
    }

  return () =>
    h(
    btn,
    { onClick:counterHandler },
    'number of | ' + counter.value);
}

};
</script>
