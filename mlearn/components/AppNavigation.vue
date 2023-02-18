<script setup lang="ts">
const { cover } = useAppConfig()

const navigation = [
  {
    "title":"Home",
    "_path":"/"
  },
  {
    "title":"collab",
    "_path":"/collab"
  }

]
</script>

<template>
  <div class="flex justify-end p-6">
    <NuxtLink
      v-for="link of navigation"
      :key="link._path"
      :to="link._path"
      active-class="font-bold"
      class="mr-2"
    >
      {{ link.title }}
    </NuxtLink>
  </div>
</template>

