<script setup>
const defaultOptions = [
  'img/ai_collab/dalle-1.png',
  'img/ai_collab/dalle-2.png',
  'img/ai_collab/dalle-3.png',
  'img/ai_collab/dalle-4.png',
  'img/ai_collab/dalle-5.png',
  'img/ai_collab/dalle-6.png',
  'img/ai_collab/dalle-7.png'
]



</script>
<template>
  <AppLayout>
    <ContentList path="/collab" v-slot="{ list }">
      <div class="flex">
        <div v-for="article in list" :key="article._path" class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 m-1 min-w-[20rem]">
          <div class="px-4 py-2">
            <a class="text-md" :href="article._path" :title="article.description">
              <h1 class="text-xl font-bold text-gray-800 uppercase dark:text-white">{{ article.title }}</h1>
            </a>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400 min-h-[3rem]">{{ article.description }}</p>
          </div>

          <img class="object-cover w-full h-48 mt-2" :src="useCover(article.cover, defaultOptions)" alt="{{ article.title }}">

          <div class="flex items-center justify-between px-4 py-2">
            <p>{{ article.tags }}</p>
          </div>
        </div>
      </div>

    </ContentList>
  </AppLayout>
</template>
