<template>
  <div class="max-w-6xl min-h-screen px-4 py-10 m-auto bg-white text-black sm:px-8 sm:shadow dark:bg-gray-100 sm:rounded">
    <AppNavigation/>

    <main v-if="authStore.tokenAvailable" class="prose prose-gray max-w-none">
      <slot />
    </main>
    <Login v-else />
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store/auth";

const authStore = useAuthStore()

</script>
