<template>
  <a class="text-md" :href="path" :title="description">
    <div class="flex justify-center -mt-16 md:justify-end">
      <img
        class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
        alt="Testimonial avatar" :src="cover"
      >
    </div>
    <h2 class="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">{{ title }}</h2>

    <p class="mt-2 text-sm text-gray-600 dark:text-gray-200">{{ description }}</p>

    <div class="flex items-center justify-end mt-4">
      <a
        v-for="tag in splitTags(tags)" :key="tag" :href="tagUrl(tag)"
        class="mx-1 px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
        tabindex="0" role="button"
      >{{ tag }}</a>
    </div>

    <div class="flex justify-end mt-4">
      <span class="text-sm font-light text-gray-600 dark:text-gray-400">{{ authorship }}</span>
    </div>

  </a>
</template>

<script setup>
function splitTags(tags) {
  return tags.split(",").map(tag => tag.trim())
}

function tagUrl(tag) {
  return "/tag/" + tag
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  title: {type: String, required: true},
  path: {type: String, required: true},
  description: {type: String, required: true},
  cover: {type: String, required: true},
  tags: {type: String, required: true},
  authorship: {type: String, required: true}
})
</script>
