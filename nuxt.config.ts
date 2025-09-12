// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    css: ['~/assets/scss/main.scss', '~/assets/scss/tailwind.css'],
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
            Neuton: [400, 700],
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
    app: {
        head: {
            htmlAttrs: {
                lang: 'es',
            },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Foggy Hex',
            meta: [
                {
                    name: 'description',
                    content:
                        'Foggy Hex — colectivo en Barcelona que celebra escenas en los márgenes y conecta proyectos internacionales que nos inspiran.',
                },

                // Open Graph defaults
                { property: 'og:site_name', content: 'Foggy Hex' },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://www.foggyhexbcn.com' },
                {
                    property: 'og:image',
                    content: 'https://www.foggyhexbcn.com/og-image.jpg',
                },
                { property: 'og:locale', content: 'es_ES' },
            ],
            link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
        },
    },
})
