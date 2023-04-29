<script setup lang="ts">
interface IProduct {
  title: string;
  price: number;
  rating: number;
  image?: string;
  brand: string;
}

const props = defineProps<{
  product: IProduct;
}>();
</script>

<template>
  <div class="border border-1 border-gray-200 my-4 mx-4 p-2 rounded-xl w-72 h-auto flex-shrink-0 snap-center hover:border-gray-400 hover:cursor-pointer">
    <img
        class="aspect-square object-cover rounded-md"
        :src="product.image"
        alt=""
        srcset=""
    >
    <div class="p-3">
      <div class="mt-4 flex flex-row justify-between flex-wrap">
        <!--   left side   -->
        <div class="w-2/3">
          <p class="mt-1 text-sm text-gray-500 font-medium">{{ product.brand }}</p>
          <h3 class="text-md text-gray-700 font-medium">
            {{ product.title }}
          </h3>
          <p class="text-sm font-medium text-gray-900 mt-4">
            <span class="text-gray-400">$</span>
            {{ product.price }}
          </p>
        </div>
        <!--   right side   -->
        <div class="flex flex-col justify-between">
          <div class="flex justify-end">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"/>
            </svg>
          </div>

          <div v-if="product.rating" class="rounded-3xl bg-gray-200 py-1 px-2 flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                 class="w-4 h-4 text-yellow-500">
              <path fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"/>
            </svg>

            <span class="text-xs ml-1 font-bold">
              {{ product.rating }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


