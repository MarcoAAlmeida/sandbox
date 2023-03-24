<template>
  <NuxtPage />
</template>

<script>
export default {
  setup () {
    useHead({
      titleTemplate: 'a ML learning blog',
      bodyAttrs: {
        style: 'background-color:white'
      }
    })
    return { dynamic: ref(49) }
  }
}
</script>
