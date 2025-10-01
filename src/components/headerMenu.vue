<template>

<header class="bg-white shadow-md fixed w-full top-0 left-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      
      <!-- Logo -->
      <div class="flex-shrink-0 text-2xl font-bold text-indigo-600">
        MyWebsite
      </div>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex space-x-8">
        <a href="#" class="text-gray-700 hover:text-indigo-600 transition">خانه</a>
        <a href="#" class="text-gray-700 hover:text-indigo-600 transition">درباره ما</a>
        <a href="#" class="text-gray-700 hover:text-indigo-600 transition">خدمات</a>
        <a href="#" class="text-gray-700 hover:text-indigo-600 transition">تماس</a>
      </nav>

      <!-- SVG Button (Desktop) -->
       <div class="flex gap-2">
           <div class="hidden relative md:block cursor-pointer p-2 rounded-xl bg-pink-600 text-white">
             <svg @click="cartHandler" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
               <path stroke-linecap="round" stroke-linejoin="round"
                     d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
             </svg>
             <!-- menu -->
             <div :class="{ 'block' :showCart, 'hidden':!showCart }" class="w-56 h-96 bg-gray-200 border border-black/10 shadow-2xl absolute top-13 rounded-2xl -left-20">

             </div>
           </div>
           <div class="hidden relative md:block cursor-pointer p-2 rounded-xl bg-indigo-600 text-white">
             <svg @click="personalHandler" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
            <!-- menu -->
             <div :class="{ 'block' :showPersonal, 'hidden':!showPersonal }" class="w-56 h-52 bg-gray-200 border border-black/10 shadow-2xl absolute top-13 rounded-2xl -left-32">

             </div>
           </div>
       </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <div @click="changeMenuStatus" id="menu-btn" class="focus:outline-none z-50">
            
            <button v-if="!menuStatus" class="p-3 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center
               hover:bg-indigo-100 hover:scale-110 transition transform duration-200 active:scale-95">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            <button v-if="menuStatus" class="p-3 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center
               hover:bg-red-100 hover:scale-110 transition transform duration-200 active:scale-95">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                    class="w-6 h-6 text-red-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

        </div>
      </div>

    </div>
  </div>

  <!-- Mobile Menu -->
  <div id="mobile-menu" class="hidden md:hidden bg-white shadow-md">
    <nav class="px-4 py-2 space-y-2">
      <router-link to="/" href="#" class="block text-gray-700 hover:text-indigo-600 transition">خانه</router-link>
      <a href="#" class="block text-gray-700 hover:text-indigo-600 transition">درباره ما</a>
      <a href="#" class="block text-gray-700 hover:text-indigo-600 transition">خدمات</a>
      <a href="#" class="block text-gray-700 hover:text-indigo-600 transition">تماس</a>
      <!-- SVG Button (Mobile) -->
      <div class="block cursor-pointer text-gray-700 hover:text-indigo-600 transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      </div>
    </nav>
  </div>

</header>

    <div @click="goToTopHandler" :class="{ 'fixed' : showGoToTop , 'hidden' : !showGoToTop  }" class="bottom-5 left-5 w-13 h-13 bg-white rounded-full shadow-xl border border-gray-300 flex justify-center items-center cursor-pointer
                transition-transform duration-200 hover:scale-110 hover:shadow-2xl active:scale-95">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-indigo-600">
            <path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
        </svg>
    </div>

    <div :class="{ 'mr-0': menuStatus } " class="bg-red-200 z-40 h-screen w-1/2 fixed right-0 top-0 duration-300 -mr-[500px] md:hidden">

    </div>


</template>

<script>

export default {
    name:'header',
    data() {
        return {
            showCart : false,
            showPersonal : false,
            showGoToTop : false,
            menuStatus : false
        }
    },
    methods: {
        cartHandler(){
            this.showPersonal = false        
            this.showCart = !this.showCart
        },
        personalHandler(){
            this.showCart = false        
            this.showPersonal = !this.showPersonal 
        },
        goToTopEvent(){
            window.scrollY > 200 ? this.showGoToTop = true : this.showGoToTop = false
        },
        goToTopHandler(){
            window.scrollTo({
            top:0,
            behavior: 'smooth'
            })
        },
        changeMenuStatus (){
            this.menuStatus = !this.menuStatus
        }
    },
    mounted() {
        document.addEventListener('scroll',this.goToTopEvent)
    },
    destroyed() {
        document.removeEventListener('scroll',this.goToTopEvent)
    },


}

</script>