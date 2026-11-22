<script setup lang="ts">

const { siteUrl } = useRuntimeConfig().public

const route = useRoute()
const slug = String(route.params.slug)

const { data: event, error: eventError } = await useAsyncData('show-' + slug, () =>
    queryCollection('shows').where('slug', '=', slug).first()
)

if (eventError.value) {
    throw createError({
        statusCode: 500,
        statusMessage: 'No se pudo cargar el evento',
        cause: eventError.value,
    })
}

if (!event.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Evento no encontrado',
    })
}

const metadata = getEventPageMetadata(event.value, siteUrl)

useSeoMeta(metadata.seo)
useHead({
    script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify(metadata.structuredData),
    }],
})
</script>

<template>
    <EventDetail v-if="event" :event="event" />
</template>
