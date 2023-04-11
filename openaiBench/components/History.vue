<template>
  <section class="container mx-auto mt-5">
    <Exchange v-for="e in exchangeStore.history" :key="e.response.id" :exchange="e" />
  </section>
</template>

<script setup>

import {useExchangeStore} from '~/store/exchange'
import {storeToRefs} from 'pinia'

const exchangeStore = useExchangeStore()

import Exchange from "./Exchange";
</script>