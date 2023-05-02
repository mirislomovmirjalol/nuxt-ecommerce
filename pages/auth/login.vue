<template>
  <div class="flex flex-col w-full lg:w-1/4 p-8 mx-auto">
    <h3 class="text-xl font-bold text-center mb-6 mt-36">
      Sign in To Your Account
    </h3>
    <div class="my-1">
      <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
      <div class="mt-2">
        <input
            placeholder="example@inbox.com"
            id="email" v-model="email" name="email" type="email" autocomplete="email" required
            class="block w-full rounded-lg py-2.5 px-3 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 border border-1 border-gray-400">
      </div>
    </div>
    <div class="my-1">
      <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
      <div class="mt-2">
        <input
            placeholder="********"
            id="password" v-model="password" name="password" type="password" autocomplete="password" required
            class="block w-full rounded-lg py-2.5 px-3 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 border border-1 border-gray-400">
      </div>
    </div>
    <button @click="navigateTo('/')" class="block py-3 px-5 bg-gray-900 text-white rounded-lg my-4">
      Sign In
    </button>
    <p class="mt-3 text-center text-sm text-gray-500">
      Don't have an account yet?&nbsp;
      <nuxt-link to="register" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register here
      </nuxt-link>
    </p>
  </div>
</template>

<script setup>
const email = ref('');
const password = ref('');
</script>
