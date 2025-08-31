<template>
  <baseMain />
  <gallery />
  <tab />
  <TshirtShop />
  <router-view />
  <todoList />
</template>

<script>
import { onMounted, onBeforeUnmount } from "vue"
import { initLenis, destroyLenis } from '@/library/lenis.js'

import baseMain from "./baseMain.vue"
import gallery from "./gallery.vue"
import tab from "./tab.vue"
import TshirtShop from "./Tshirt-shop.vue"
import todoList from "./todoList.vue"

export default {
  name: "app",
  components: {
    baseMain,
    gallery,
    tab,
    TshirtShop,
    todoList,
  },
  setup(){
    onMounted(() => {
       initLenis()
    })

    onBeforeUnmount(() => {
       destroyLenis()
    })
  }
}
</script>

<style>
body {
  padding-bottom: 500px;
}
</style>
