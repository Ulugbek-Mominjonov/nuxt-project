// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@pinia/nuxt', "@nuxt/ui"],
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in' // default
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in' // default
    }
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  css: ['~/assets/css/main.css']
})