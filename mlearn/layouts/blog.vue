<template>
  <AppLayout>
    <AuthorAndDate/>
    <slot/>
    <PageCards/>
    <Tags/>
  </AppLayout>
</template>

<script setup lang="ts">

const { page } = useContent()

const content = await page.value;

useSEOHead(content)

</script>