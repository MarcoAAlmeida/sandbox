<template>
  <a class="text-md" :href="content._path" :title="content.description">
    <div class="flex justify-center -mt-16 md:justify-end">
      <img
        v-if="content.cover!=='/img/cover.png'"
        class="object-cover w-20 h-20 border-2 border-gray-500 dar:border-gray-600 rounded-full"
        alt="coven" :src="content.cover"
      >
      <Icon
        v-else :name="content.icon"
        class="object-cover w-20 h-20 border-2 border-gray-300 dar:border-gray-200 rounded-full"
      />
    </div>
    <h2 class="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">{{ content.title }}</h2>

    <p class="mt-2 text-sm text-gray-600 dark:text-gray-200">{{ content.description }}</p>

    <div class="flex items-center justify-end mt-4">
      <a
        v-for="tag in splitTags(content.tags)" :key="tag" :href="tagUrl(tag)"
        class="mx-1 px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
        tabindex="0" role="button"
      >{{ tag }}</a>
    </div>
  </a>
</template>

<script setup>
function splitTags(tags) {
  return tags.split(",").map(tag => tag.trim()).slice(0,3)
}

function tagUrl(tag) {
  return "/tag/" + tag
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  content: {type: Object, required: true}
})
</script>
