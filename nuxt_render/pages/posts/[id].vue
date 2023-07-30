<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const {data: post} = await useFetch('https://jsonplaceholder.typicode.com/posts/'+ route.params.id )


</script>

<style scoped>



</style>