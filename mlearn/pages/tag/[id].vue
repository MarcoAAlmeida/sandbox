<script setup lang="ts">

const route = useRoute()

import type {QueryBuilderParams} from '@nuxt/content/dist/runtime/types'

const query: QueryBuilderParams = {
  path: '/collab',
  where: {
    $and: [
      {tags: {$contains: route.params.id}},
      {published: {$eq: true}}
    ]
  },
  limit: 15,
  sort: [{authorship: -1}]
}

</script>

<template>
  <AppLayout>
    <h1 :id="id" class="text-center p-4 text-4xl font-bold">
      {{ route.params.id }}
    </h1>

    <ContentList v-slot="{ list }" :query="query">
      <div class="flex justify-center flex-wrap">
        <div
          v-for="article in list" :key="article._path"
          class="w-full max-w-md px-8 py-4 mr-5 ml-5 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800"
        >
          <Article
            :title="article.title"
            :path="article._path"
            :cover="article.cover"
            :description="article.description"
            :tags="article.tags"
            :authorship="article.authorship"
          />
        </div>
      </div>
    </ContentList>
  </AppLayout>
</template>
