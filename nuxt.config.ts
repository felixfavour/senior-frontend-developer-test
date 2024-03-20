// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", '@nuxt/image'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  nitro: {
    experimental: {
      database: true,
    },
  },
  routeRules: {
    "/": {
      ssr: false,
    },
  },
  image: {
    domains: ['picsum.photos'],
    fastly: {
      baseURL: 'https://www.fastly.picsum.photos'
    }
  }
});
