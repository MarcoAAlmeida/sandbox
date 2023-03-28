export default defineNuxtConfig({
  extends: [
    process.env.TYPOGRAPHY_THEME || '@nuxt-themes/typography',
    '@nuxt-themes/elements'
  ],
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    'nuxt-config-schema',
    '@nuxthq/studio',
    '@pinia/nuxt'
  ],
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: ''
  },
  content: {
    highlight: {
      theme: {
        default: 'min-dark',
        dark: 'min-dark',
        sepia: 'one-dark-pro'
      },
      preload: ['javascript', 'java', 'python']
    },
    documentDriven: true,
    markdown:{
      anchorLinks:{
        depth: 2
      }
    }
  },

})
