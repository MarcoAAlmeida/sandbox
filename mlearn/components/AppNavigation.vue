<script setup lang="ts">
const { cover } = useAppConfig()

import { ref } from 'vue'

const navigation = ref([
  {
    "title":"Home",
    "_path":"/",
    "icon":"emojione:house",
    "show_title": true
  },
  {
    "title":"collab",
    "_path":"/collab",
    "icon":"logos:openai-icon",
    "show_title": true
  },
  {
    "title": "github",
    "_path": "https://github.com/MarcoAAlmeida",
    "icon": "logos:github-icon"
  },
  {
    "title": "linkedIn",
    "_path": "https://www.linkedin.com/in/marcoaasilva/",
    "icon": "logos:linkedin-icon"
  }
])

const target = (attribute: string) => attribute.startsWith("http") ? "_blank" : "_self"

</script>

<template>
  <div class="flex justify-end p-6">
    <NuxtLink
      v-for="link of navigation"
      :key="link._path"
      :to="link._path"
      :target="target(link._path)"
      active-class="font-bold"
      class="mr-2"
    >
      <Icon :name="link.icon" /> <span v-if="link.show_title">{{ link.title }}</span>
    </NuxtLink>
  </div>
</template>

