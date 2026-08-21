<template>
    <article
        class="bg-white title-box p-4 flex flex-col transition relative"
        :class="[
            isExpired ? 'opacity-60' : '',
        ]"
        :aria-disabled="isExpired ? 'true' : 'false'"
    >
        <!-- Image -->
        <div class="w-full aspect-[16/9] overflow-hidden mb-4 relative">
            <img
                :src="event.image"
                :alt="event.title"
                class="w-full h-full object-cover transition duration-300"
                :class="isExpired ? 'grayscale scale-105' : ''"
            />
            <div
                v-if="isExpired"
                class="absolute inset-0 bg-black/65 text-white font-heading text-sm uppercase tracking-[0.3em] flex items-center justify-center"
            >
                Evento pasado
            </div>
        </div>

        <!-- Text content -->
        <div class="flex-1 flex flex-col justify-between text-center">
            <NuxtLink
                v-if="isLinkable"
                :to="`/events/${event.slug}`"
                class="font-heading text-2xl leading-tight mb-2 underline decoration-inherit decoration-1 underline-offset-4"
            >
                <span class="block">{{ event.title }}</span>
                <span v-if="event.titleSubtitle" class="block">
                    {{ event.titleSubtitle }}
                </span>
            </NuxtLink>
            <div
                v-else
                class="font-heading text-2xl leading-tight mb-2"
                :class="isExpired ? 'opacity-70' : ''"
                aria-disabled="true"
            >
                <span class="block">{{ event.title }}</span>
                <span v-if="event.titleSubtitle" class="block">
                    {{ event.titleSubtitle }}
                </span>
            </div>

            <!-- Subtitle (date + venue, fixed height) -->
            <p class="font-sans text-base text-gray-600 min-h-[1.5rem]">
                {{ formattedDate }} -
                <a
                    v-if="event.venueUrl"
                    :href="event.venueUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="underline decoration-inherit underline-offset-4 hover:text-accent transition"
                >
                    {{ event.venue }}
                </a>
                <span v-else>{{ event.venue }}</span>
            </p>
            <a
                v-if="event.ticketUrl && !isExpired"
                :href="event.ticketUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex self-center mt-4 px-5 py-2 border-2 border-text text-text font-sans text-sm hover:bg-text hover:text-background transition"
            >
                Entradas
            </a>
        </div>
    </article>
</template>

<script setup lang="ts">
import type { FutureCollectionItem } from '@nuxt/content'

const props = defineProps<{
    event: FutureCollectionItem
    isExpired?: boolean
}>()

const formattedDate = computed(() => {
    if (!props.event?.date) return ''

    const parts = props.event.date.split('-').map(Number)
    if (parts.length !== 3) return props.event.date // fallback

    const [year, month, day] = parts
    if (!day || !month || !year) return props.event.date // safeguard

    const dd = String(day).padStart(2, '0')
    const mm = String(month).padStart(2, '0')
    const yyyy = String(year)

    return `${dd}/${mm}/${yyyy}`
})

const isExpired = computed(() => Boolean(props.isExpired))
const isLinkable = computed(
    () => !isExpired.value && props.event.detailsPublic !== false
)
</script>
