<template>
    
    <div class="mt-[500px]">
        <button class="border cursor-pointer border-black py-2 px-5 rounded-md">
            <slot>click</slot>
        </button>
    </div>

</template>
<script>
export default {
    name:'btn'
}
</script>