<template>
  <section class="bg-white">
    <div class="container px-6 py-12 mx-auto">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="feature in features" :key="feature" class="flex justify-center m-1 ">
          <NuxtLink
            :to="feature._path"
            target="_self"
          >
            <Icon :name="feature.icon.name" :class="feature.icon.class" size="4em" />

            <h1 class="mt-4 text-xl font-semibold text-gray-800">
              {{ feature.title }}
            </h1>

            <p class="mt-2 text-gray-500 dark:text-gray-400">
              {{ feature.description }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {useStore} from '~/store/features'
import {storeToRefs} from 'pinia'

const featuresStore = useStore()
const {features} = storeToRefs(featuresStore)

</script>
