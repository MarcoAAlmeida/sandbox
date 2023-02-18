<template>
  <AppLayout>
    <ContentList path="/collab" v-slot="{ list }">
      <h1 class="text-xl mb-8">collaboration with chatGPT</h1>
      <li v-for="article in list" :key="article._path" class="mb-8">
        <a class="text-md" :href="article._path" :title="article.description">
          {{ article.title }}
        </a>
      </li>
    </ContentList>
  </AppLayout>
</template>
