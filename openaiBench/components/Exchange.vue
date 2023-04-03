<template>
  <div class="mt-5">
    <div class="text-sm">{{ exchange.datetime }}}</div>
    <div class="text-gray-400">chatcmpl-70uM2dU2IjfcQEsjnO5L6yRcmwWgX</div>

    <div class="flex mt-2 w-full w-full overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 m-2">
      <div class="w-2 bg-gray-800 dark:bg-gray-900"></div>

      <div class="flex items-center px-2 py-3">
        <Icon :name="exchange.prompt.icon" size="2em" />

        <div class="mx-3">
          <p class="text-gray-600 dark:text-gray-200">
            {{ exchange.prompt.message }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex mt-2 w-full w-full overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 m-2">
      <div class="w-2 bg-gray-800 dark:bg-gray-900"></div>

      <div class="flex items-center px-2 py-3">
        <Icon :name="exchange.assistant.icon" size="2em" />

        <div class="mx-3">
          <p class="text-gray-600 dark:text-gray-200">
            {{ exchange.assistant.message }}
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  exchange: {type: Object, required: true}
})
</script>
