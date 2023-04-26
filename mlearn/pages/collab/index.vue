<script setup lang="ts">
import Article from "~/components/Article.vue";

const defaultOptions = [
  'img/ai_collab/dalle-1.png',
  'img/ai_collab/dalle-2.png',
  'img/ai_collab/dalle-3.png',
  'img/ai_collab/dalle-4.png',
  'img/ai_collab/dalle-5.png',
  'img/ai_collab/dalle-6.png',
  'img/ai_collab/dalle-7.png'
]

import type {QueryBuilderParams} from '@nuxt/content/dist/runtime/types'


const query: QueryBuilderParams = {
  path: '/collab',
  where: {published: {$eq: true}},
  limit: 15,
  sort: [{publicationDate: -1}]

}

</script>

<template>
  <AppLayout>
    <ContentList v-slot="{ list }" :query="query">
      <div class="flex justify-center flex-wrap">
        <div
          v-for="article in list" :key="article._path"
          class="w-full max-w-md px-8 py-4 mr-5 ml-5 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800"
        >
          <Article :content="article"/>
        </div>
      </div>
    </ContentList>
  </AppLayout>
</template>
