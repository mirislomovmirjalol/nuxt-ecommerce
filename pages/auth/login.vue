<template>
  <div>
    <ErrorBar :errors="errors"/>
    <div class="flex flex-col w-full lg:w-1/4 p-8 mx-auto">
      <h3 class="text-xl font-bold text-center mb-6 mt-36">
        Sign in To Your Account
      </h3>
      <div class="my-1">
        <label class="block text-sm font-medium leading-6 text-gray-900" for="email">Email address</label>
        <div class="mt-2">
          <input
              id="email"
              v-model="email" autocomplete="email"
              class="block w-full rounded-lg py-2.5 px-3 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 border border-1 border-gray-400"
              name="email" placeholder="example@inbox.com" required
              type="email">
        </div>
      </div>
      <div class="my-1">
        <label class="block text-sm font-medium leading-6 text-gray-900" for="password">Password</label>
        <div class="mt-2">
          <input
              id="password"
              v-model="password" autocomplete="password"
              class="block w-full rounded-lg py-2.5 px-3 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 border border-1 border-gray-400"
              name="password" placeholder="********" required
              type="password">
        </div>
      </div>
      <button v-if="!loading" class="block py-3 px-5 bg-gray-900 text-white rounded-lg my-4" @click="login">
        Sign In
      </button>
      <SkeletonsAuthButton v-else/>
      <p class="mt-3 text-center text-sm text-gray-500">
        Don't have an account yet?&nbsp;
        <nuxt-link class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" to="register">Register here
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script setup>
const errors = ref([]);
const loading = ref(false);
const email = ref('');
const password = ref('');
const client = useSupabaseClient()

const login = async () => {
  loading.value = true;
  const {user, error} = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
  loading.value = false;
  if (error) {
    addError(error);
  }
}

const addError = (error) => {
  errors.value.push(error);
  setTimeout(() => removeError(error), 5000);

}

const removeError = (error) => {
  errors.value = errors.value.filter(e => e !== error);
}

</script>
