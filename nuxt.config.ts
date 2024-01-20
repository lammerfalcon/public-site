// https://nuxt.com/docs/api/configuration/nuxt-config
import {getIconCollections} from '@egoist/tailwindcss-icons'

export default defineNuxtConfig({
    devtools: {enabled: true},
    // extends: ['@nuxt/ui-pro'],
    modules: ['@nuxt/ui', '@nuxtjs/google-fonts', 'nuxt-icon', '@nuxt/image', 'nuxt-og-image'],
    colorMode: {
        preference: 'system',
    },
    ui: {
        icons: ['logos', 'simple-icons', 'mdi', 'majesticons', 'formkit'],
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
