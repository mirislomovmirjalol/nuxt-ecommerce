<template>
  <div class="absolute md:right-4 top-4 flex flex-col w-full p-4 lg:w-1/4 mx-auto">
    <transition-group name="list" tag="div">
      <div v-for="(error, index) in errors" :key="index" class="my-2" role="alert">
        <div class="border border-red-400 rounded-lg bg-red-100 px-4 py-3 text-red-700">
          <p>{{ error.message }}</p>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script setup>
defineProps({
  errors: {
    required: false,
    nullable: true,
  }
})
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease-in;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translatey(-30px);
}
</style>
