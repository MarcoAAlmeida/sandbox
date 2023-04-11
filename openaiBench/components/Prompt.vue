<template>
  <div>
    <div class="flex flex-row h-72">
      <div class="basis-11/12">
        <textarea
          v-model="prompt.question"
          placeholder="Hi, are you there?"
          class="block mt-2 h-full w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
        />
      </div>
      <div class="basis-1/12">
        <button 
          :disabled="!promptAvailable"
          :class="buttonStyle"
          @click="chat"
        >
          chat
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useExchangeStore} from '~/store/exchange'

const prompt = reactive({
  question: ''
})

const promptAvailable = computed(() => {
  return prompt.question.length > 10
})

const buttonStyle = computed(() => {
  return prompt.question.length > 10 ?
      'text-white m-2 h-full px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5' :
      'text-white m-2 h-full px-4 uppercase rounded bg-gray-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 opacity-50'
})

async function chat() {
  const exchangeStore = useExchangeStore()
  await exchangeStore.chat(prompt.question);
}
</script>