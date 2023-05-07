<template>
  <div class="flex w-80 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800  justify-center m-2">

    <div class="p-4 md:p-4 justify-center">
      <div class="flex items-center justify-center">
        <Icon class="text-4xl" :name="content.cover"/>
      </div>
      <h1 class="text-xl font-bold text-gray-800 dark:text-white text-center">{{ content.title }}</h1>
      <div class="flex justify-center">
        <Icon class="text-1xl m-1" :name="item" v-for="item in stack_items" key="item"/>
      </div>
      <div class="flex justify-center mt-3 item-center">
        <button @click="open_in_new_tab"
            class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
          open in new tab
        </button>
      </div>
      <p class="text-sm text-muted mt-4">{{ content.description }}</p>
    </div>
  </div>
</template>

<script setup>

const props = defineProps(['content'])

const stack_items = computed(() => props.content.stack.split(","))

const open_in_new_tab = ()=> {
  window.open(props.content.url, '_blank');
}

</script>

