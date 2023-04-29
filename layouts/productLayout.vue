<template>
  <div>
    <div class="fixed z-10 top-8 left-8">
      <button
          @click="navigateTo('/')"
          class="bg-gray-200/50 backdrop-blur-sm border border-gray-200 p-2 rounded-full hover:bg-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
        </svg>
      </button>
    </div>
    <slot/>
  </div>
</template>
