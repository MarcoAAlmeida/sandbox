<script setup lang="ts">
import { useNavigationStore } from "~/store/navigation"
import { useAuthStore } from "~/store/auth";

const navigation = useNavigationStore()
const auth = useAuthStore()

const target = (attribute: string) => attribute.startsWith("http") ? "_blank" : "_self"

</script>

<template>
  <div class="flex justify-end p-6">
    <NuxtLink
      v-for="link of navigation.navLinks"
      :key="link._path"
      :to="link._path"
      :target="target(link._path)"
      active-class="font-bold"
      class="mr-2 dark:text-black"
    >
      <Icon :name="link.icon.name" :class="link.icon.class" /> <span v-if="link.show_title">{{ link.title }}</span>
    </NuxtLink>
    <NuxtLink
      v-if="auth.tokenAvailable"
      class="cursor-pointer"
      alt="Logout"
      @click="auth.logout"
    >
      <Icon name="material-symbols:logout"/> logout
    </NuxtLink>

  </div>
</template>

