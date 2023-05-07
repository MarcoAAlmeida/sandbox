<template>
  <AppLayout>
    <AuthorAndDate/>
    <slot/>
    <PageCards/>
    <Tags/>
  </AppLayout>
</template>

<script setup lang="ts">
import PageCards from "~/components/content/PageCards.vue";

const { page } = useContent()

const content = await page.value;

useSEOHead(content)

</script>