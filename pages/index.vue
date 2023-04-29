<template>
  <div class="container mx-auto">
    <div class="flex flex-row justify-between mx-8">
      <h1 class="font-medium text-xl">
        New Products
      </h1>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clip-rule="evenodd"/>
        </svg>
      </button>
    </div>
    <div class="flex snap-x snap-mandatory overflow-x-scroll">
      <ProductCard @click="navigateTo('/products')" v-for="product in products.newProducts" :product="product"/>
    </div>
  </div>
</template>


<script setup>
const products = useProducts();
</script>
