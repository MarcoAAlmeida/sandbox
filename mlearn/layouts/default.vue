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
<script>
import AppLayout from "../components/AppLayout";
export default {
  components: {AppLayout}
}
</script>