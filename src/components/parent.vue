<template>

    <ul class="flex items-center gap-5">
        <button @click="$router.go(1)" class="bg-red-500 cursor-pointer m-2 p-2">prev</button>

        <router-link class="bg-gray-400 py-2 px-10 rounded-xl" :to="{ name: 'home' }">home</router-link>

        <router-link class="bg-gray-400 py-2 px-10 rounded-xl" :to="{ name: 'about' }">about</router-link>

        <button @click="$router.go(-1)" class="bg-green-500 cursor-pointer m-2 p-2">next</button>
    </ul>

    <router-view />

</template>
