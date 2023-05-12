<template>
  <div class="flex flex-col w-full lg:w-1/4 p-8 mx-auto">
    <h1 class="text-3xl font-bold text-center mt-36">
      Confirmation link sent successfully!</h1>
    <div class="flex flex-row justify-between mt-12">
      <h5 class="text-xl font-medium text-center">Check your email. We sent confirmation link to {{ email }}</h5>
    </div>
    <button class="block py-3 px-5 bg-gray-900 text-white rounded-lg my-4" @click="navigateTo('/auth/login')">
      Go to Login
    </button>
  </div>
</template>


<script setup>
defineProps(['email']);
</script>
