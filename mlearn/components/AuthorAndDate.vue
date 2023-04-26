<template>
  <div class="container flex flex-col items-center justify-center p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row text-gray-300 text-small mb-3 border-b">
    <Icon :name="content.icon" size="2em" class="m-2" />
    <span class="m-2">{{ content.publicationDate }}</span>
    <a :href="get_author_mail(content)">{{ content.author}}</a>
  </div>
</template>

<script setup>

const { page } = useContent()

const content = await page.value;

const get_author_mail = (content) =>{
  return "mailto:" + content.author
}

</script>
