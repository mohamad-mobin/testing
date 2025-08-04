<template>

    <button @click="postHandler" class="py-2 ml-2 mt-2 px-5 rounded-2xl bg-red-400 cursor-pointer"> click to show users</button>
    <p v-if="errorText" class="bg-red-900 py-2 px-5 m-2 border"> {{ errorText }} </p>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-2 py-2">
    <div v-for="(post, index) in posts" class="bg-gray-300 p-10 rounded-2xl border flex flex-col justify-between items-start">
        <div>
            <p> id: {{ post.id }} </p>
            <br>
            <p> {{ post.title }} </p>
            <br>
        </div>
        <div class="flex gap-x-2">
            <button @click="showMore(post.id)" class="bg-green-300 py-2 px-2 rounded-xl cursor-pointer hover:bg-green-600 duration-300 hover:text-white">Show More</button>
            <button @click="editInfo(post.id)" class="bg-lime-300 py-2 px-2 rounded-xl cursor-pointer hover:bg-lime-600 duration-300 hover:text-white">Edit Info</button>
            <button @click="deleteHandler(post.id,index)" class="bg-red-300 py-2 px-2 rounded-xl cursor-pointer hover:bg-red-600 duration-300 hover:text-white">Delete</button>
        </div>
    </div>
</div>

</template>

<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";
import { assign } from "lodash";

const posts = ref({})
const user = ref({})
const editPost = ref({body:'', id: 55, title:'', userId:''})
const errorText = ref(null)

const errorHandling = (res) =>{
    if(!res.ok){
            throw new Error('Fetch failed'); 
        }else {
            return res.json()
        }
}

const postHandler = async ()=> {
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const data = await errorHandling(res);

        posts.value = data

    } catch(error){
        errorText.value = 'Something went wrong while fetching';
    }

}

const showMore = async (id) =>{

    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await errorHandling(res)
        user.value = data
        Swal.fire(
            `name: ${user.value.name}`,
            `Email: ${user.value.email}`,
            'info',
        )
    } catch(error){
        errorText.value = 'Something went wrong while fetching more info';
    }
}

const editInfo = (id) => {
    Swal.fire({
        title: 'Edit Info',
        input: 'text',
        inputLabel: 'Enter new value',
        inputPlaceholder: 'edit title',
        showCancelButton: true,
        confirmButtonText: 'Edit',
        cancelButtonText: 'Cancel'
    }).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: `Your Edit is : ${result.value}`
    });

    editPost.value.title = result.value

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editPost.value)
    })
        .then(res => res.json())
        .then(data => {

            console.log(data);
            
            posts.value.map(item =>{
                
                if(item.id === id){
                    item.title = editPost.value.title
                }   
            })
        })
  }
});

}

const deleteHandler = async (id,index) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
    })
    posts.value.splice(index,1)
}
</script>

<style>
body {
  background-color: #dfe8ef;
}
</style>