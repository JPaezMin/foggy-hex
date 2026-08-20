<script setup lang="ts">
import EventLayout from '~/layouts/EventLayout.vue'

const route = useRoute()

const { data: event } = await useAsyncData(`show-${route.params.slug}`, () =>
    queryCollection('shows')
        .where('slug', '=', route.params.slug as string)
        .first()
)

const { data: futureEvent } = await useAsyncData(
    `future-${route.params.slug}`,
    () =>
        queryCollection('future')
            .where('slug', '=', route.params.slug as string)
            .first()
)

if (!event.value || event.value.detailsPublic === false || futureEvent.value?.detailsPublic === false) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Evento no encontrado',
    })
}
</script>

<template>
    <EventLayout v-if="event" :event="event" />
</template>
