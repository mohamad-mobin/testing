<template>
    <div class="relative top-80 flex justify-center">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
            <router-link :to="{ name:'productPage', params: { id: product.id } }" class="flex flex-col justify-center items-center bg-gray-200 hover:bg-gray-400 duration-300 p-2 cursor-pointer" title="click to buy" v-for="product in products" :key="product.id">
                <img draggable="false" class="w-52" :src="product.src" alt="">
                <p> {{ product.name }} </p>
                <p> {{ product.price }} </p>
            </router-link>
        </div>
    </div>
</template>
<script>

import { mapState } from 'vuex'

export default {
    name:'Tshirt-shop',
    computed:{
        ...mapState(['products'])
    },
}
</script>
<style>
    
</style>