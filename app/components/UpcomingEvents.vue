<script setup lang="ts">
import type { UpcomingEvent } from '~/types/events'

defineProps<{ events: readonly UpcomingEvent[] }>()
</script>

<template>
    <section v-if="events.length" id="upcoming-events" aria-labelledby="upcoming-events-heading">
        <h2 id="upcoming-events-heading" class="section-heading bg-sky-50 font-heading text-center title-box px-6 py-2 border-1 border-text">Próximamente</h2>
        <div class="grid gap-8" :class="{ 'md:grid-cols-2': events.length > 1 }">
            <EventCard
                v-for="event in events" :key="event.slug" :event="event"
            />
        </div>
    </section>
</template>
