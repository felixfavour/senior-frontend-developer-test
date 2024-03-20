// https://nuxt.com/docs/api/configuration/nuxt-config
import type { UserConfig as VitestUserConfigInterface } from "vitest/config"
import vue from "@vitejs/plugin-vue"

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: "jsdom",
  },
}
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", '@nuxt/image'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    },
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
