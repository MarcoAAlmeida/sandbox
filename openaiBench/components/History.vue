<template>
  <section class="container mx-auto mt-5">
    <h1 class="text-2xl">History</h1>
    <Exchange v-for="interaction in exchanges" :key="interaction.datetime" :exchange="interaction" />
  </section>
</template>

<script setup>

import {useExchangeStore} from '~/store/exchange'
import {storeToRefs} from 'pinia'

const exchangeStore = useExchangeStore()
const {exchanges} = storeToRefs(exchangeStore)

import Exchange from "./Exchange";
</script>