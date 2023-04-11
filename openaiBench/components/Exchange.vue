<template>
  <div class="mt-10">
    <div class="text-sm">{{ exchange.createdAt }}</div>
    <div class="text-gray-400">{{ exchange.response.id }}</div>

    <div class="w-full px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div class="flex justify-center -mt-16 -ml-8 md:justify-start">
        <Icon class="object-cover w-10 h-10" name="fxemoji:bunny" size="2em"/>
      </div>

      <p class="text-gray-600 dark:text-gray-200">
        {{ exchange.request.messages[0].content }}
      </p>
    </div>

    <div class="w-full px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div class="flex justify-center -mt-16 -ml-8 md:justify-start">
        <Icon class="object-cover w-10 h-10" name="fxemoji:alienmonster" size="2em"/>
      </div>

      <p class="text-gray-600 dark:text-gray-200">
        <ContentRenderer :value="parsedMarkdown"/>
      </p>
    </div>
  </div>
</template>

<script setup>

import markdownParser from "@nuxt/content/transformers/markdown"

const props = defineProps({
  exchange: {type: Object, required: true}
})

const { exchange } = toRefs(props)

const markdownString = toRaw(exchange.value.response.choices[0].message.content)

const parsedMarkdown = await markdownParser.parse(
    `<some-id>`,
    markdownString
);


/**
import markdownParser from "@nuxt/content/transformers/markdown"
const markdownString = '# Hello world'

const { exchange } = toRefs(props)

console.log(toRaw(exchange.value.response.choices[0].message.content))
//const parsedMarkdown = markdownParser.parse(`<some-id>`, toRaw(exchange.value.response.choices[0].message.content))

const parsedMarkdown = markdownParser.parse(`<some-id>`, '## Hello world')
**/

</script>
