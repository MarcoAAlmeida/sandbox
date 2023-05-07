<template>
  <div v-if="cards.length !== 0">
    <p class="text-center p-4 text-4xl font-bold">Cards</p>
    <div class="flex flex-wrap justify-center">
      <Card v-for="card in cards" :content="card"/>
    </div>
  </div>
</template>

<script setup lang="ts">

import {usePageCardsStore} from '~/store/page_cards'
import {storeToRefs} from 'pinia'

const route = useRoute()

const pageCardsStore = usePageCardsStore()
const {get_cards_by_slug} = storeToRefs(pageCardsStore)

const join_by_slashes = (slug: String[]) => '/' + slug.join('/')

const cards = get_cards_by_slug.value(join_by_slashes(route.params.slug))

</script>