<script setup lang="ts">
interface Band {
    name: string
    image: string
    bandcamp: string
    description: string
}

interface ScheduleItem {
    title: string
    subtitle?: string
    time: string
}

interface Show {
    title: string
    date: string
    time: string
    venue: string
    ticketUrl: string
    bands: Band[]
    schedule?: ScheduleItem[]
}

const props = defineProps<{ event: Show }>()
const show = props.event

const formattedDate = computed(() => {
    if (!show.date) return ''

    const parts = show.date.split('/').map(Number)
    if (parts.length !== 3) return show.date // fallback to raw string

    const [day, month, year] = parts
    if (!day || !month || !year) return show.date // safeguard

    const fullYear = year < 100 ? 2000 + year : year

    const date = new Date(fullYear, month - 1, day)

    return new Intl.DateTimeFormat('es-ES', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
        .format(date)
        .replace(/^\w/, (c) => c.toUpperCase()) // capitalize first letter
})
</script>

<template>
    <article class="container mx-auto px-6 py-16 space-y-24">
        <!-- Header -->
        <header class="text-center">
            <h1 class="font-heading text-[40px] leading-tight text-accent">
                {{ event.title }}
            </h1>
            <p class="font-sans text-lg mt-5">
                {{ formattedDate }} - {{ event.time }} - {{ event.venue }}
            </p>
            <a
                v-if="event.ticketUrl"
                :href="event.ticketUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block mt-6 px-6 py-2 border-2 border-text text-text font-sans hover:bg-text hover:text-background transition"
            >
                Entradas
            </a>
            <p v-else class="mt-6 font-sans text-base text-text">
                Entradas Próximamente
            </p>
            <div v-if="event.schedule?.length" class="mt-10">
                <div
                    class="max-w-2xl mx-auto border border-text/10 bg-white/80 shadow-sm"
                >
                    <ul class="divide-y divide-text/10">
                        <li
                            v-for="item in event.schedule"
                            :key="`${item.title}-${item.time}`"
                            class="flex flex-col gap-2 px-6 py-4 text-left sm:flex-row sm:items-center sm:justify-between"
                        >
                            <div>
                                <p class="font-heading text-xl text-accent">
                                    {{ item.title }}
                                </p>
                                <p
                                    v-if="item.subtitle"
                                    class="mt-1 font-sans text-xs uppercase tracking-[0.25em] text-text/60"
                                >
                                    {{ item.subtitle }}
                                </p>
                            </div>
                            <p
                                class="font-sans text-sm uppercase tracking-[0.2em] text-text/80 sm:text-right"
                            >
                                {{ item.time }}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

        <!-- Bands -->
        <section class="grid gap-20">
            <div
                v-for="(band, i) in event.bands"
                :key="band.name"
                class="relative grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"
            >
                <!-- Image -->
                <div
                    class="lg:col-span-5 flex justify-center"
                    :class="i % 2 === 1 ? 'lg:order-2' : ''"
                >
                    <div class="w-2/3 aspect-square overflow-hidden">
                        <img
                            :src="band.image"
                            :alt="band.name"
                            class="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
                        />
                    </div>
                </div>

                <!-- Text -->
                <div
                    class="lg:col-span-7"
                    :class="i % 2 === 1 ? 'lg:order-1 text-right' : 'text-left'"
                >
                    <h2 class="font-heading text-3xl relative inline-block">
                        <a
                            :href="band.bandcamp"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="border-text pb-1 hover:border-accent transition-colors underline decoration-inherit decoration-1 underline-offset-4"
                        >
                            {{ band.name }}
                        </a>
                    </h2>
                    <p
                        class="font-sans text-base leading-relaxed max-w-prose mt-8"
                        :class="i % 2 === 1 ? 'ml-auto' : ''"
                    >
                        {{ band.description }}
                    </p>
                </div>

                <!-- Accent bar -->
                <div
                    class="absolute top-0 h-full w-1 bg-accent"
                    :class="i % 2 === 1 ? 'right-0' : 'left-0'"
                />
            </div>
        </section>
    </article>
</template>
