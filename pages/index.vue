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
      <ProductCard v-for="product in products" :product="product"/>
    </div>
  </div>
</template>


<script lang="ts">
interface IProduct {
  title: string;
  price: number;
  rating?: number;
  image?: string;
  brand: string;
}

const products = {}
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          brand: 'Apple',
          title: 'Product 1',
          price: 100,
          image: 'https://picsum.photos/300/300',
          rating: 4.2,
        },
        {
          id: 2,
          brand: 'Apple',
          title: 'Product 2',
          price: 200,
          image: 'https://picsum.photos/300/300',
          rating: 3.9,
        },
        {
          id: 3,
          brand: 'Apple',
          title: 'Product 3',
          price: 300,
          image: 'https://picsum.photos/300/300',
          rating: 5,
        },
        {
          id: 4,
          brand: 'Apple',
          title: 'Product 4',
          price: 400,
          image: 'https://picsum.photos/300/300',
          rating: 4.1,
        },
        {
          id: 5,
          brand: 'Apple',
          title: 'Product 5',
          price: 500,
          image: 'https://picsum.photos/300/300',
        },
        {
          id: 6,
          brand: 'Apple',
          title: 'Product 6',
          price: 600,
          image: 'https://picsum.photos/300/300',
        },
        {
          id: 7,
          brand: 'Apple',
          title: 'Product 7',
          price: 700,
          image: 'https://picsum.photos/300/300',
        },
        {
          id: 8,
          brand: 'Apple',
          title: 'Product 8',
          price: 800,
          image: 'https://picsum.photos/300/300',
        },
        {
          id: 9,
          brand: 'Apple',
          title: 'Product 9',
          price: 900,
          image: 'https://picsum.photos/300/300',
        },
        {
          id: 10,
          brand: 'Apple',
          title: 'Product 10',
          price: 1000,
          image: 'https://picsum.photos/300/300',
        },
      ]
    }
  },
}
</script>
