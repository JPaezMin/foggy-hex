<script setup lang="ts">
import EventLayout from '~/layouts/EventLayout.vue'

const route = useRoute()
const slug = String(route.params.slug)

const { data: event } = await useAsyncData(`show-${slug}`, () =>
    queryCollection('shows').where('slug', '=', slug).first()
)

const { data: futureEvent } = await useAsyncData(`future-${slug}`, () =>
    queryCollection('future').where('slug', '=', slug).first()
)

if (
    !event.value ||
    event.value.detailsPublic === false ||
    futureEvent.value?.detailsPublic === false
) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Evento no encontrado',
    })
}
</script>

<template>
    <EventLayout v-if="event" :event="event" />
</template>
