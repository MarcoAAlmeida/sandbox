<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const {data: post} = await useFetch('http://localhost:3002/api/posts/'+ route.params.id )


</script>

<style scoped>



</style>