// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    extends: ['@nuxt/ui-pro'],
    modules: [
        '@nuxt/ui',
        '@nuxtjs/google-fonts'
    ],
    colorMode: {
        preference: 'system',
    },
    ui: {
        icons: ['logos', 'simple-icons', 'mdi'],
    },
    googleFonts: {
        download: true,
        inject: true,
        base64: true,
        prefetch: true,
        preconnect: true,
        preload: true,
        families: {
            'Karla': {
                wght: [400, 600, 700],
                ital: [200,400, 600, 700],
            },
        },
    },

})
