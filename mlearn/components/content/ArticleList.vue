<template>
  <ContentList :query="query">
    <template #default="{ list }">
      <div class="flex justify-center flex-wrap">
        <div
            v-for="article in list" :key="article._path"
            class="w-full max-w-md px-8 py-4 mr-5 ml-5 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800"
        >
          <Article :content="article"/>
        </div>
      </div>
    </template>
    <template #not-found>
      <p>No articles yet.</p>
    </template>

  </ContentList>
</template>

<script setup lang="ts">

const route = useRoute()

import type {QueryBuilderParams} from '@nuxt/content/dist/runtime/types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  contentPath: {type: String, required: true}
})

const query: QueryBuilderParams = {
  path: props.contentPath,
  where: {
    $and: [
      {published: {$eq: true}}
    ]
  },
  limit: 15,
  sort: [{publicationDate: -1}]
}

</script>