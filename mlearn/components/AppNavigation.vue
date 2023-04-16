<script setup lang="ts">
import {useNavbarStore} from '~/store/navbar'
import {storeToRefs} from 'pinia'

const navbarStore = useNavbarStore()
const {navigation} = storeToRefs(navbarStore)

const target = (attribute: String) => attribute.startsWith("http") ? "_blank" : "_self"
</script>

<template>
  <div class="flex justify-center p-6">
    <NuxtLink
      v-for="link of navigation"
      :key="link._path"
      :to="link._path"
      :target="target(link._path)"
      active-class="font-bold"
      class="mr-2 dark:text-black"
    >
      <Icon :name="link.icon.name" :class="link.icon.class" /> <span v-if="link.show_title">{{ link.title }}</span>
    </NuxtLink>
  </div>
</template>

