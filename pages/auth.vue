<template>
  <div>
    <NuxtPage/>
  </div>
</template>

<script lang="ts">
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "auth",
});
</script>

<script lang="ts" setup>
watchEffect(() => {
  const user = useSupabaseUser()
  if (user.value) {
    navigateTo('/')
  }
})
</script>
