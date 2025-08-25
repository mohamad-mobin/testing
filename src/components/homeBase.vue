<template>
    <baseMain/>
    <gallery />
    <tab />
    <TshirtShop/>
    <router-view />
</template>

<script>

import baseMain from './baseMain.vue'
import gallery from './gallery.vue';
import tab from './tab.vue';
import TshirtShop from './Tshirt-shop.vue';

export default {
    name:'app',
    components:{
        baseMain,
        gallery,
        tab,
        TshirtShop
    }
}
</script>

<style>


body{
    padding-bottom: 500px;
}

</style>