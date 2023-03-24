<template>
  <AppLayout>
    <slot/>
  </AppLayout>
</template>

<style lang="postcss">
/* Customize headers to remove default underline */
.prose h2 a,
.prose h3 a {
  @apply no-underline;
  &:hover {
    @apply border-b border-neutral-600 dark:border-neutral-300;
  }
}
</style>
<script setup lang="ts">
const { page } = useContent()

const content = await page.value;

useHead({
  meta: [
    { name: 'image', property:'og:image', content: content.cover },
    { name: 'twitterImage', property:'twitter:image', content: 'https://main--funny-crisp-0cbebe.netlify.app/'+content.cover },
    { name: 'twitterCard', property:'twitter:card', content: "summary_large_image" },
    { name: 'author', content: 'marcoalmeida.dev.br@gmail.com' },
    { name: 'title', property:'og:title', content: content.title },
    { name: 'description', property:'og:description', content: content.description }
  ],
})
</script>