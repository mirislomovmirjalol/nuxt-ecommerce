<template>
  <div class="container mx-auto flex flex-col">
    <div class="flex flex-col md:flex-row">
      <img
          class="md:w-1/2 w-full aspect-square object-cover h-1/2 md:sticky top-0"
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-purple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027205808"
          alt=""
          srcset=""
      >
      <div class="p-8 ">
        <p class="mt-1 text-lg text-gray-500 font-medium">
          Apple
        </p>
        <h3 class="text-3xl text-gray-700 font-medium my-2">
          iphone 14
        </h3>


        <!--    rating  -->
        <div class="flex flex-row justify-between items-center my-4">
          <div class="rounded-3xl bg-gray-100 py-1 px-2 flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                 class="w-4 h-4 text-yellow-500">
              <path fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"/>
            </svg>
            <span class="text-xs ml-1 font-bold">
              4.5
            </span>
          </div>
          <div>
          <span class="text-xs text-gray-500">
              1,234 reviews
          </span>
          </div>
        </div>

        <p class="text-gray-500 my-6 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500
        </p>

        <div tabindex="0" class="collapse collapse-arrow border-t">
          <input type="checkbox" class="peer"/>
          <div class="collapse-title text-lg font-medium flex justify-start items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-2">
              <path fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clip-rule="evenodd"/>
            </svg>
            Product details
          </div>
          <div class="collapse-content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
              to
              make
              a type specimen book. It has survived not only five centuries, but also the leap into electronic
              typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
              containing
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
              versions
              of Lorem Ipsum.
            </p>
          </div>
        </div>

        <div tabindex="0" class="collapse collapse-arrow border-t">
          <input type="checkbox" class="peer"/>
          <div class="collapse-title text-lg font-medium flex justify-start items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-2">
              <path fill-rule="evenodd"
                    d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                    clip-rule="evenodd"/>
            </svg>
            Reviews
          </div>
          <div class="collapse-content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
              to
              make
              a type specimen book. It has survived not only five centuries, but also the leap into electronic
              typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
              containing
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
              versions
              of Lorem Ipsum.
            </p>
          </div>
        </div>

        <div
            class="fixed bottom-0 left-0 flex justify-between items-center py-6 px-10 bg-base-100 border-t border-1 border-gray-300 w-full rounded-t-2xl md:static md:rounded-none">
          <p class="text-xl font-medium">
            <span class="text-gray-400">$</span>
            799
          </p>
          <button
              class="px-6 py-3 rounded-full border border-1 border-gray-300 focus:scale-[0.94] focus:border-primary">
            Add to cart
          </button>
        </div>
      </div>
    </div>


    <div class="mb-32">
      <div class="flex flex-row justify-between mx-8 my-4">
        <h1 class="font-medium text-xl">
          Similar products
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
        <ProductCard @click="navigateTo('/products')" v-for="product in products.newProducts.reverse()"
                     :product="product"/>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = useProducts();
</script>

<script>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "product-layout",
});
</script>
