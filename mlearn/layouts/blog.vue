<template>
  <AppLayout>
    <AuthorAndDate/>
    <slot/>
    <h1>HAHAHA</h1>
    <PageCards/>
    <Tags/>
  </AppLayout>
</template>

<script setup lang="ts">
import PageCards from "~/components/PageCards.vue";

const { page } = useContent()

const content = await page.value;

useSEOHead(content)

</script>