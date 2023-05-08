<template>
  <div>
    <NuxtLayout>
      <VitePwaManifest/>
      <NuxtLoadingIndicator />
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style>
* {
  @apply transition-all duration-300 ease-in-out;
}

.layout-enter-from,
.layout-leave-to,
.page-enter-from,
.page-leave-to {
  @apply blur-xl opacity-0;
}
</style>

