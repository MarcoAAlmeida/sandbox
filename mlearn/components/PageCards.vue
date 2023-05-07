<template>
  <div class="flex flex-wrap justify-center">
    <h1>HHAHAHAH</h1>
    <p>{{ cards }}</p>
    <p>{{ page_cards }}</p>
    <p>{{join_by_slashes(route.params.slug)}}</p>
    <Card v-for="card in cards" :content="card"/>
  </div>
</template>

<script setup lang="ts">

import {usePageCardsStore} from '~/store/page_cards'
import {storeToRefs} from 'pinia'

const route = useRoute()

const pageCardsStore = usePageCardsStore()
const {page_cards, get_cards_by_slug} = storeToRefs(pageCardsStore)

const join_by_slashes = (slug: String[]) => '/' + slug.join('/')

const cards = get_cards_by_slug.value(join_by_slashes(route.params.slug))

</script>