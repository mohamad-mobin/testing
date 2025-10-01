<template>
  
  <div class="flex justify-center items-center py-20">
      <div class="lg:w-1/3">
          <ul class="grid grid-cols-1 lg:grid-cols-3 pb-5 text-xl text-[#fbaa33] box-shadows rounded-md z-30">
                <a
                                       class="flex cursor-pointer gap-x-2 py-4 w-40 pl-4 duration-200"
                                       :class="openTab === 'profile' ? 'bg-[#fbaa33] text-white' : 'bg-white text-[#fbaa33]'"
                                       @click="openTab = 'profile'"
                                       >
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path>
                                            </svg>
                                          Profile
                </a>
                <a
                                      class="flex cursor-pointer gap-x-2 py-4 w-40 pl-4 duration-200"
                                      :class="openTab === 'skills' ? 'bg-[#fbaa33] text-white' : 'bg-white text-[#fbaa33]'"
                                       @click="openTab = 'skills'"
                                      >
                                          <svg data-id="Skills" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                              <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"></path>
                                            </svg>
                                          Skills
                </a>
                <a
                                      class="flex cursor-pointer gap-x-2 py-4 w-40 pl-4 duration-200"
                                      :class="openTab === 'awards' ? 'bg-[#fbaa33] text-white' : 'bg-white text-[#fbaa33]'"
                                      @click="openTab = 'awards'"
                                      >
                                          <svg data-id="Awards" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"></path>
                                            </svg>
                                            Awards
                </a>
          </ul>
          <!-- profile -->
           <div class="md:pb-0 pb-20">
               <div class="duration-500 absolute left-4 md:left-auto" :class="openTab === 'profile' ? 'visible opacity-100' : 'invisible opacity-0'">
                                   <h1 class="text-2xl text-stroke-black">HELLO, I AM MIKE JOJO</h1>
                                   <h1 class="text-xl pt-2 pb-6 text-[#fbaa33]">From NYC, America</h1>
                                   <p class="text-[#666] pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae rerum nesciunt esse similique possimus excepturi quam accusantium, maiores minima sapiente, harum distinctio, doloremque sunt.</p>
                                   <p class="text-[#666]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae rerum nesciunt esse similique.</p>
           
                                   <a class="bg-[#fbaa33] font-bold text-white clip-polygon py-4 px-7 mt-5 mb-10 flex gap-x-2 justify-between items-center w-fit relative" href="#">
                                       <span>Read More</span>
                                                   
                                   </a>
                                   <!-- social media -->
                                   <ul class="flex gap-x-4">
                                       <li class="group"><a href="#"><i class="text-[#666] group-hover:text-[#fbaa33] duration-300 rounded-full shadow-lg p-4 fa fa-facebook"></i></a></li>
                                       <li class="group"><a href="#"><i class="text-[#666] group-hover:text-[#fbaa33] duration-300 rounded-full shadow-lg p-4 fa fa-instagram"></i></a></li>
                                       <li class="group"><a href="#"><i class="text-[#666] group-hover:text-[#fbaa33] duration-300 rounded-full shadow-lg p-4 fa fa-linkedin"></i></a></li>
                                       <li class="group"><a href="#"><i class="text-[#666] group-hover:text-[#fbaa33] duration-300 rounded-full shadow-lg p-4 fa fa-twitter"></i></a></li>
                                   </ul>
               </div>
               <!-- skills -->
               <div class="duration-500 absolute left-4 md:left-auto" :class="openTab === 'skills' ? 'visible opacity-100' : 'invisible opacity-0'">
                                       <h1 class="text-2xl text-stroke-black">HELLO, I AM MIKE JOJO</h1>
                                       <h1 class="text-xl pt-2 pb-6 text-[#fbaa33]">My Latest Skills</h1>
                                       <label class="text-[#636363] font-bold">HTML/CSS</label>
                                       <div class="w-4/5 h-5 bg-[#d5d7d9] rounded relative mb-5">
                                           <div class="absolute w-[90%] h-5 rounded bg-[#fbaa33]"></div>
                                       </div>
                                       <label class="text-[#636363] font-bold">PHP</label>
                                       <div class="w-2/3 h-5 bg-[#d5d7d9] rounded relative mb-5">
                                           <div class="absolute w-[80%] h-5 rounded bg-[#fbaa33]"></div>
                                       </div>
                                       <label class="text-[#636363] font-bold">PYTHON</label>
                                       <div class="w-1/2 h-5 bg-[#d5d7d9] rounded relative mb-5">
                                           <div class="absolute w-[60%] h-5 rounded bg-[#fbaa33]"></div>
                                       </div>
               </div>
               <!-- awards -->
               <div class="duration-500 absolute left-4 md:left-auto" :class="openTab === 'awards' ? 'visible opacity-100' : 'invisible opacity-0'">
                                       <h1 class="text-2xl text-stroke-black">HELLO, I AM MIKE JOJO</h1>
                                       <h1 class="text-xl pt-2 pb-6 text-[#fbaa33]">From NYC, America</h1>
                                       <p class="text-[#666] pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae rerum nesciunt esse similique possimus excepturi quam accusantium, maiores minima sapiente, harum distinctio, doloremque sunt.</p>
           
                                       <div class="flex items-center gap-x-3 mb-3">
                                           <span class="bg-[#fbaa33] text-white p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                                               <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"></path>
                                             </svg></span>
                                           <span class="text-lg"> Best Web Designer Award 2019</span>
                                       </div>
                                       <div class="flex items-center gap-x-3 mb-3">
                                           <span class="bg-[#fbaa33] text-white p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                                               <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"></path>
                                             </svg></span>
                                           <span class="text-lg"> Top Mentor Award 2020</span>
                                       </div>
                                       <div class="flex items-center gap-x-3 mb-3">
                                           <span class="bg-[#fbaa33] text-white p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                                               <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"></path>
                                             </svg></span>
                                           <span class="text-lg"> Youngest programmer award</span>
                                       </div>
               </div>
           </div>
      </div>
  </div>

</template>

<script>

export default {
    name:'tab',
    data() {
        return {
            openTab: 'profile'
        }
    },
}
</script>
