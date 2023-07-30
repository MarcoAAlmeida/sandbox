// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/' : { prerender: true },
    '/posts/1': { prerender: true },
    '/about' : { static: true }
  }
})
