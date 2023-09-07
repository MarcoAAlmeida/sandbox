<template>
  <div>
    <h1>Blog posts</h1>
    <article v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ truncate(post.body) }}...</p>
    <NuxtLink :to="getPostUrl(post.id)">Read more</NuxtLink>
    </article>
  </div>
</template>

<script setup lang="ts">
const {data: posts} = await useFetch('http://localhost:3002/api/posts')

const truncate = (original: string) => original.substring(0, 50)
const getPostUrl = (id: string) => "/posts/" + id


</script>

<style scoped>

</style>