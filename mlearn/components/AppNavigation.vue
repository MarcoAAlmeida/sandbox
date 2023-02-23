<script setup lang="ts">
const { cover } = useAppConfig()

import { ref } from 'vue'

const navigation = ref([
  {
    "title":"Home",
    "_path":"/",
    "icon":{
      "name":"emojione:house",
      "class":"",
    },
    "show_title": true
  },
  {
    "title":"collab",
    "_path":"/collab",
    "icon": {
      "name": "logos:openai-icon",
      "class": "text-primary dark:text-white",
    },
    "show_title": true
  },
  {
    "title": "github",
    "_path": "https://github.com/MarcoAAlmeida",
    "icon": {
      "name": "logos:github-icon",
      "class": "text-primary dark:text-white",
    },
  },
  {
    "title": "linkedIn",
    "_path": "https://www.linkedin.com/in/marcoaasilva/",
    "icon": {
      "name": "logos:linkedin-icon",
    },
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
      class="mr-2 dark:text-white"
    >
      <Icon :name="link.icon.name" :class="link.icon.class" /> <span v-if="link.show_title">{{ link.title }}</span>
    </NuxtLink>
  </div>
</template>

