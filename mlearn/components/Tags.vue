<template>
  <div class="container flex flex-col items-center justify-center p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
    <button v-for="tag in tags" :key="tag"
            class="px-6 py-2 text-white transition-colors duration-300 transform bg-gray-600 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 m-2">
      <NuxtLink
          :to="tagUrl(tag)"
          active-class="font-bold"
          class="mr-2 dark:text-black"
      >
        {{ tag }}
      </NuxtLink>

    </button>
  </div>
</template>

<script setup lang="ts">
const {page} = useContent()

const content = await page.value;

const tags = ref(content.tags.split(','))

const tagUrl = (tag: String) => {
  return '/tag/' + tag
}

</script>
