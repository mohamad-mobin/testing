<template>
  <div
    class="bg-lime-100 relative flex justify-center items-center gap-y-2 flex-col p-5"
  >
    <img class="w-80" :src="productFromVuex.src" alt="" />
    <p class="text-4xl font-bold">{{ productFromVuex.name }}</p>
    <p class="text-2xl">price : {{ productFromVuex.price }}</p>

    <!-- backToHome -->
    <router-link
      to="/"
      class="bg-green-500 animate-bounce rounded-2xl flex items-center gap-2 p-2 cursor-pointer absolute top-5 right-5"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="size-6"
      >
        <path
          fill-rule="evenodd"
          d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
          clip-rule="evenodd"
        />
      </svg>
      backToHome
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productFromVuex: [],
    };
  },
  mounted() {
    document.body.style.paddingBottom = "0px";
  },
  created() {
    this.productFromVuex = this.$store.getters.getProductId(
      parseInt(this.$route.params.id)
    );
  },
};
</script>
<style>
body {
  padding: 20px;
  padding-top: 80px;
}
</style>
