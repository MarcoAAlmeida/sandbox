<template>
  <NuxtPage />
</template>

<script>
export default {
  setup () {
    useHead({
      titleTemplate: '%s - a ML learning resource',
      bodyAttrs: {
        style: 'background-image:url(\'/img/pattern/dalle-5.png\')'
      }
    })
    return { dynamic: ref(49) }
  }
}
</script>
