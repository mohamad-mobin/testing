<template>
    <h1 class="bg-green-200 text-2xl"> this page is home</h1>
    <router-link :to="{name : 'home',params: {id: 1}}">go</router-link>
    <router-view />
</template>

