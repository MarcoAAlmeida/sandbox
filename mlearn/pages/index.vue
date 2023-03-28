<template>
  <AppLayout>
    <Hero/>
    <Features/>
  </AppLayout>
</template>
<script>
import Features from "../components/Features";
import AppLayout from "../components/AppLayout";
import Filters from "../components/Filters";
import Hero from "../components/Hero";
export default {
  components: {Hero, Filters, AppLayout, Features}
}
</script>