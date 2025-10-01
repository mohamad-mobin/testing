<template>
    <div class="relative top-[400px] flex justify-center items-center border-t pt-5 border-black/20">
        <div>
            <p class="text-center text-2xl pb-3">ToDo List</p>
            <div class="flex justify-center items-center">
                <div class="flex relative w-fit">
                    <input @keyup.enter="addToUserTodo" v-model="todoText" class="bg-[#cbd5da] w-72 rounded-3xl px-4 outline-none py-2" type="text" placeholder="Add Your Task">
                    <button @click="addToUserTodo" class="absolute right-0 cursor-pointer hover:bg-[#00fc00] duration-300 bg-[#31CC31] p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" /></svg>
                    </button>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center gap-2 pt-2">
                <div v-for="(todo, index) in todos" :key="index" class="bg-[#e4e8eb] w-60 px-5 py-2 rounded-xl relative">
                    <p> {{ todo }} </p>
    
                    <!-- remove -->
                    <button @click="removeTodoHandler(index)" class="absolute z-20 after:-z-10 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:size-0 hover:after:size-10 after:duration-300 after:bg-red-500/70 after:absolute top-2 right-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>
                        
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex';

export default {
    name:'todoList',
    data() {
        return {
            todoText: ''
        }
    },
    methods: {
        addToUserTodo(){
            if(this.todoText){
                this.addToTodo(this.todoText)
                this.todoText = '';
            }
        },
        removeTodoHandler(index){
            this.removeTodo(index)
        },
        ...mapMutations(['addToTodo','removeTodo'])
    },
    computed:{
        ...mapState(['todos']),
    }
}
</script>
<style>
    
</style>