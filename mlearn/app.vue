<template>
  <NuxtPage />
</template>

<script>
export default {
  setup () {
    useHead({
      titleTemplate: '%s - a ML learning resource',
      bodyAttrs: {
        style: 'background-color:white'
      }
    })
    return { dynamic: ref(49) }
  }
}
</script>
