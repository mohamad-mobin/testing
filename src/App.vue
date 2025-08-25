<template>
    <headerMenu />
    <router-view />

</template>

<script>

import headerMenu from './components/headerMenu.vue'

export default {
    name:'app',
    components:{
        headerMenu,
    }
}
</script>

<style>

body{
    padding-top: 80px;
    padding-bottom: 400px;
}

</style>

