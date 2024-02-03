// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/google-fonts', 'nuxt-icon', '@nuxt/image', 'nuxt-og-image', 'nuxt-auth-utils'],
  colorMode: {
    preference: 'system',
  },
  site: {
    url: 'https://rodiongavrilov.com/',
  },
  ui: {
    icons: ['logos', 'simple-icons', 'mdi', 'majesticons', 'formkit'],
  },
  ogImage: {
    compatibility: {
      prerender: {
        chromium: 'node',
        satori: false,
      },
    },
  },
  googleFonts: {
    download: true,
    inject: true,
    base64: true,
    prefetch: true,
    preconnect: true,
    preload: true,
    families: {
      Karla: {
        wght: [400, 600, 700],
        ital: [200, 400, 600, 700],
      },
    },
  },

})
