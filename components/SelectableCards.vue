<template>
  <div class="flex overflow-x-auto pb-10 max-w-2xl">

    <label v-for="option in options" class="cursor-pointer" :for="option.id">
      <div :class="{ active: selected===option.id}"
           class="border border-1 border-gray-300 p-4 rounded-xl mx-2 cursor-pointer">
        <input v-model="selected" @input="() => $emit('changeOption', option.id)" class="hidden" :value="option.id" type="radio" :id="option.id">
        <h3
            class="text-md"
        >
          {{ option.title }}
        </h3>
      </div>
    </label>

  </div>
</template>

<style scoped>
.active {
  @apply border-primary scale-[0.94];
}
</style>

<script setup>
const selected = ref(1);
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>

</style>
