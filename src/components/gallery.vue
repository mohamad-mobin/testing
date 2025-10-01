<template>
    <div class=" flex justify-center items-center flex-col px-5 py-20">
        <div class=" flex items-center h-64 mb-5 relative">

            <div class="absolute w-14 flex justify-center items-center p-1 rounded-4xl top-0 -left-4 bg-amber-300">
                {{ galleryIndex + 1 }}
                /
                {{ gallery.length }}
            </div>

            <button @click="dec" class="p-2 bg-white rounded-full size-fit cursor-pointer hover:bg-amber-200 duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" /></svg>
            </button>
            <div v-for="(item, index) in gallery" :key="index">
                <img 
                :class="{ 'block': galleryIndex === index, 'hidden': galleryIndex !== index }"
                class="w-52 cursor-pointer" 
                draggable="false"
                title="click to show modal"
                @click="showModal(item.img)"
                :src="item.img" alt="">
            </div>
            <button @click="inc" class="p-2 bg-white rounded-full size-fit cursor-pointer hover:bg-amber-200 duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" /></svg>
            </button>
        </div>
    
        <div class="flex items-center bg-amber-300 w-fit px-5 rounded-2xl">
            <div v-for="(item, index) in gallery" :key="index">
                <img
                draggable="false"
                @click="imgHandler(index)" 
                :class="{ 'opacity-100': galleryIndex === index, 'opacity-50': galleryIndex !== index}"
                class="w-20 cursor-pointer" 
                :src="item.img" alt="">
            </div>
        </div>
    </div>

    <!-- modal -->
     <div @click="closeModal" v-if="showModalView" class="bg-black/90 fixed top-0 h-screen w-screen flex justify-center items-center">
        <div @click.stop class="w-[500px] flex justify-center items-center h-52 rounded-md bg-white relative">

            <button title="close" @click="closeModal" class="absolute top-2 left-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" /></svg>
            </button>

            <img class="w-32 drop-shadow-2xl" :src="modalImage" alt="">


        </div>
     </div>

     <div class="text-center">
         <a class="text-red-600 bg-blue-200 px-4 py-2" href="#">go to top and check lenis</a>
     </div>
</template>

<script>
import { onMounted, onBeforeUnmount } from "vue"
import { initLenis, destroyLenis } from '@/library/lenis.js'

import samsungA15 from '../../img/samsung-a15.png'
import nothing from '../../img/nothing.png'
import iphone11pro from '../../img/iphone11pro.png'

    
export default {
    name:'gallery',
    data() {
        return {
            gallery:[
                { img: samsungA15},
                { img: nothing},
                { img: iphone11pro},
            ],
            galleryIndex : 0,
            showModalView : false,
            modalImage : null
        }
    },
    methods: {
        inc(){
            this.galleryIndex++
            if(this.galleryIndex > this.gallery.length - 1){
                this.galleryIndex = 0
            }
        },
        dec(){
            this.galleryIndex--
            if(this.galleryIndex < 0){
                this.galleryIndex = this.gallery.length - 1
            }
        },
        imgHandler(index){
            this.galleryIndex = index
        },
        showModal (img){
            this.showModalView = true
            this.modalImage = img
            document.body.style.overflow = 'hidden'
            
        },
        closeModal(){
            this.showModalView = false
            document.body.style.overflow = 'visible'
        }
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