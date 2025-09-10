<template>
  <baseMain />
  <gallery />
  <tab />
  <TshirtShop />
  <router-view />
  <todoList />
  <counter />
</template>

<script>
import { onMounted, onBeforeUnmount } from "vue";
import { initLenis, destroyLenis } from "@/library/lenis.js";

import baseMain from "@/components/baseMain.vue";
import gallery from "@/components/gallery.vue";
import tab from "@/components/tab.vue";
import TshirtShop from "@/components/Tshirt-shop.vue";
import todoList from "@/components/todoList.vue";
import counter from "@/components/counter.vue";

export default {
  name: "app",
  components: {
    baseMain,
    gallery,
    tab,
    TshirtShop,
    todoList,
    counter,
  },
  mounted(){
    document.body.style.paddingBottom = '500px'
  },
  setup() {
    onMounted(() => {
      initLenis();
    });

    onBeforeUnmount(() => {
      destroyLenis();
    });
  },
};
</script>