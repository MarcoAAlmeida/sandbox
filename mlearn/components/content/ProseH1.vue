<template>
  <h1 :id="id" class="text-center p-4 text-4xl font-bold">
    <a v-if="generate" :href="`#${id}`">
      <slot/>
    </a>
    <slot v-else/>
  </h1>
</template>
<style>
.icon{
  margin-bottom: .6em;
}
</style>

<script setup lang="ts">
import {useRuntimeConfig} from '#imports'

defineProps<{ id: string }>()
const heading = 1
const {anchorLinks} = useRuntimeConfig().public.content
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>

