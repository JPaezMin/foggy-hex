// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    css: [
        '~/assets/scss/main.scss',
        '~/assets/scss/grain.scss',
        '~/assets/scss/tailwind.css',
    ],
    modules: [
        '@nuxt/icon',
        '@nuxtjs/google-fonts',
        '@nuxt/content',
        '@nuxt/eslint',
        '@nuxt/image',
        '@nuxt/scripts',
        '@nuxtjs/tailwindcss',
    ],
    googleFonts: {
        families: {
            'Source+Code+Pro': [400, 700],
            'Work+Sans': [400, 500, 600], // Normal to semi-bold for body
        },
        display: 'swap',
        preload: true,
        preconnect: true,
        inject: true,
    },
    tailwindcss: {
        viewer: true,
        exposeConfig: true,
    },
    runtimeConfig: {
        public: {
            googleCalendarApiKey: process.env.NUXT_PUBLIC_GOOGLE_CALENDAR_API_KEY,
        },
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'es',
            },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Foggy Hex - Música fuera de los márgenes en Barcelona',
            meta: [
                {
                    name: 'description',
                    content:
                        'Foggy Hex es un colectivo de Barcelona que programa conciertos, escuchas y encuentros alrededor de músicas fuera del circuito habitual: experimental, ambient, electrónica e improvisación.',
                },

                // Open Graph defaults
                { property: 'og:site_name', content: 'Foggy Hex' },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://foggyhexbcn.com/' },
                {
                    property: 'og:image',
                    content:
                        'https://foggyhexbcn.com/favicons/favicon-1024x1024.png',
                },
                { property: 'og:locale', content: 'es_ES' },
                { name: 'twitter:card', content: 'summary_large_image' },
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicons/favicon.ico',
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/favicons/favicon-180x180.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/favicons/favicon-32x32.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '192x192',
                    href: '/favicons/favicon-192x192.png',
                },
                { rel: 'manifest', href: '/site.webmanifest' },
            ],
        },
    },
})
