<template>

<div class="m-5 space-y-2 flex-col flex items-end">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis sit, nihil veniam blanditiis facere vero dolores temporibus. Doloribus necessitatibus error ut! Iure esse voluptate eos. Maxime magni beatae quas quisquam.
    <div class="flex items-center gap-2 select-none">
        <label for="samsung" class="cursor-pointer">samsung</label>
        <input value="samsung" v-model="userFilter" class="size-5 cursor-pointer" id="samsung" type="checkbox">
    </div>
    <div class="flex items-center gap-2 select-none">
        <label for="apple" class="cursor-pointer">apple</label>
        <input value="apple" v-model="userFilter" class="size-5 cursor-pointer" id="apple" type="checkbox">
    </div>
    <div class="flex items-center gap-2 select-none">
        <label for="google" class="cursor-pointer">google</label>
        <input value="google" v-model="userFilter" class="size-5 cursor-pointer" id="google" type="checkbox">
    </div>
    <div class="flex items-center gap-2 select-none">
        <label for="nothing" class="cursor-pointer">nothing</label>
        <input value="nothing" v-model="userFilter" class="size-5 cursor-pointer" id="nothing" type="checkbox">
    </div>

</div>




<div class="flex justify-center items-center">
    <div class="bg-gray-200 rounded-2xl py-4 px-5 w-60 gap-2 flex flex-col h-52 relative border border-black/10">
        
        <div @click="removeItem(index)" v-for="(filter,index) in userFilter" class="border hover:bg-red-300 duration-500 hover:text-red-500 border-black px-5 py-0.5 relative w-fit h-fit cursor-pointer">
            {{ filter }}
            <div class="bg-red-400 absolute top-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-3"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>
            </div>
        </div>

        <div @click="removeAll" class="bg-red-400 hover:bg-red-600 duration-300 w-fit px-3 py-1 rounded-full text-red-900 hover:text-red-950 select-none absolute bottom-5 right-5 cursor-pointer">
            X
        </div>
    </div>
</div>


</template>

<script>
export default {
    name:"baseMain",

    data() {
        return {
            userFilter : []
            
        }
    },

    methods: {
        removeAll(){
            this.userFilter = []
        },
        removeItem(index){
            this.userFilter.splice(index,1)
            
        },
    },
}
</script>