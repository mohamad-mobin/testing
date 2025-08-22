<template>
    <router-view />
    <header />
    <baseMain/>
    <gallery />
    <tab />
</template>

<script>

import header from './components/header.vue'
import baseMain from './components/baseMain.vue'
import gallery from './components/gallery.vue';
import tab from './components/tab.vue';

export default {
    name:'app',
    components:{
        header,
        baseMain,
        gallery,
        tab
    }
}
</script>

<style>

body{
    padding-top: 80px;
    padding-bottom: 2000px;
}

</style>

