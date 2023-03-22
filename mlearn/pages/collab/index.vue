<script setup lang="ts">
const defaultOptions = [
  'img/ai_collab/dalle-1.png',
  'img/ai_collab/dalle-2.png',
  'img/ai_collab/dalle-3.png',
  'img/ai_collab/dalle-4.png',
  'img/ai_collab/dalle-5.png',
  'img/ai_collab/dalle-6.png',
  'img/ai_collab/dalle-7.png'
]

import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/collab', where: { published: { $eq: true } }, limit: 15, sort: [{ authorship: -1 }] }

const { data: publishedQuery } = await useAsyncData('published', () => {
  return queryContent('/collab').where({ published: true }).sort({ authorship: -1 }).find()
})


</script>

<template>
  <AppLayout>
    <ContentList v-slot="{ list }" :query="query">
      <div class="flex justify-center flex-wrap">
        <div v-for="article in list" :key="article._path" class="w-full max-w-md px-8 py-4 mr-5 ml-5 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <a class="text-md" :href="article._path" :title="article.description">
            <div class="flex justify-center -mt-16 md:justify-end">
              <img class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" :src="article.cover">
            </div>

            <h2 class="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">{{ article.title }}</h2>

            <p class="mt-2 text-sm text-gray-600 dark:text-gray-200">{{ article.description }}</p>

            <div class="flex justify-end mt-4">
              <span class="text-sm font-light text-gray-600 dark:text-gray-400">{{ article.authorship }}</span>
            </div>
          </a>
        </div>
      </div>
    </ContentList>
  </AppLayout>
</template>
