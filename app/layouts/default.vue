<template>
    <div id="sections" class="min-h-screen flex flex-col">
        <SiteHeader />

        <main id="main-content" class="flex-grow">
            <slot />
        </main>

        <SiteFooter />
    </div>
</template>
<script setup>
const { $grained } = useNuxtApp()
const route = useRoute()
const siteUrl = 'https://foggyhexbcn.com'

const canonicalUrl = computed(() => {
    const path = route.path === '/' ? '/' : route.path.replace(/\/$/, '')
    return `${siteUrl}${path}`
})

useHead(() => ({
    link: [
        {
            rel: 'canonical',
            href: canonicalUrl.value,
        },
    ],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify([
                {
                    '@context': 'https://schema.org',
                    '@type': 'Organization',
                    name: 'Foggy Hex',
                    url: siteUrl,
                    logo: `${siteUrl}/favicons/favicon-512x512.png`,
                    sameAs: [
                        'https://instagram.com/foggyhexbcn',
                        'https://kioskradio.com/label/foggy-hex',
                    ],
                    areaServed: {
                        '@type': 'City',
                        name: 'Barcelona',
                    },
                    description:
                        'Colectivo de Barcelona que programa conciertos, escuchas y encuentros alrededor de músicas fuera del circuito habitual.',
                },
                {
                    '@context': 'https://schema.org',
                    '@type': 'WebSite',
                    name: 'Foggy Hex',
                    url: siteUrl,
                    inLanguage: 'es',
                },
            ]),
        },
    ],
}))

onMounted(() => {
    $grained('sections', {
        animate: true,
        patternWidth: 100,
        patternHeight: 100,
        grainOpacity: 0.08,
        grainDensity: 1,
        grainWidth: 1,
        grainHeight: 1,
    })
})
</script>
