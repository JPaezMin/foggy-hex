<script setup lang="ts">
const { data: futureEvents } = await useAsyncData('future-events', () =>
    queryCollection('future').order('date', 'ASC').all()
)

const { data: pastEvents } = await useAsyncData('past-events', () =>
    queryCollection('past').order('date', 'DESC').all()
)

const today = new Date()

const upcomingEvents = computed(() =>
    (futureEvents.value ?? []).filter((event) => new Date(event.date) >= today)
)

const archivedEvents = computed(() =>
    (pastEvents.value ?? []).filter((event) => new Date(event.date) < today)
)
</script>

<template>
    <div class="container mx-auto min-h-screen text-text space-y-6 py-10">
        <!-- About Section -->
        <section id="about" class="container py-12">
            <div
                class="grid grid-cols-1 lg:grid-cols-3 gap-16 items-stretch max-w-6xl mx-auto"
            >
                <!-- Text (2/3 of the width on large screens) -->
                <div
                    class="lg:col-span-2 flex items-center border-l border-text pl-6"
                >
                    <p class="font-heading text-2xl lg:text-4xl leading-snug">
                        Somos un colectivo con base de operaciones en Barcelona.
                        Nacemos de la necesidad de celebrar espacios y escenas
                        que residen en el margen de nuestra ciudad y a la vez
                        acercar a ella proyectos internacionales que nos
                        inspiran.
                    </p>
                </div>
                <!-- Image (1/3 width, smaller accent) -->
                <div class="relative flex justify-center items-center">
                    <img
                        src="/images/fh-deco.svg"
                        alt="Foggy Hex Deco"
                        class="h-full max-h-[360px] w-auto object-contain opacity-90"
                    />
                </div>
            </div>
        </section>

        <!-- Current Event (featured) -->
        <section
            id="current-event"
            class="container mx-auto flex flex-col items-center justify-center py-6"
        >
            <h2
                class="text-[32px] bg-sky-50 font-heading mb-8 text-center title-box px-6 py-2 border-1 border-text"
            >
                Próximamente
            </h2>
            <NuxtLink to="/events/bear-bones-black-zone-uza">
                <img
                    src="/assets/images/current-event-poster.jpg"
                    alt="Cartel de nuestro próximo evento"
                    class="w-[478px] h-auto object-contain mt-8"
                />
            </NuxtLink>
        </section>

        <!-- Future Events -->
        <section id="future-events" class="container mx-auto px-6 py-6">
            <h2
                class="text-[32px] bg-sky-50 font-heading mb-8 text-center title-box px-6 py-2 border-1 border-text"
            >
                Próximos Eventos
            </h2>

            <div
                v-if="upcomingEvents.length"
                :class="[
                    'grid gap-8',
                    upcomingEvents.length === 1
                        ? 'grid-cols-1'
                        : upcomingEvents.length === 2
                          ? 'grid-cols-1 md:grid-cols-2'
                          : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
                ]"
            >
                <EventCard
                    v-for="event in upcomingEvents"
                    :key="event.title"
                    :event="event"
                    :to="`/events/${event.slug}`"
                />
            </div>

            <p v-else class="text-center text-lg font-sans text-gray-600">
                No hay próximos eventos por ahora. ¡Vuelve pronto!
            </p>
        </section>

        <!-- Past Events -->
        <section id="past-events" class="container mx-auto px-6 py-12">
            <h2
                class="text-4xl bg-sky-50 font-heading mb-8 text-center title-box px-6 py-2 border-1 border-text"
            >
                Eventos Pasados
            </h2>

            <div
                v-if="archivedEvents && archivedEvents.length"
                class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
            >
                <div
                    v-for="event in archivedEvents"
                    :key="event.title"
                    class="flex flex-col"
                >
                    <div class="w-full aspect-[16/9] overflow-hidden rounded">
                        <img
                            :src="`${event.image}`"
                            :alt="event.title"
                            class="w-full h-full object-cover grayscale transition"
                        />
                    </div>
                    <h3 class="font-heading text-lg mt-2 text-center truncate">
                        {{ event.title }}
                    </h3>
                    <p class="font-sans text-sm text-center text-gray-600">
                        {{ event.date }} — {{ event.venue }}
                    </p>
                </div>
            </div>

            <p v-else class="text-center text-lg font-sans text-gray-600">
                No hay eventos pasados registrados.
            </p>
        </section>
    </div>
</template>

<style scoped>
.past-event-card img {
    filter: grayscale(100%);
    transition: filter 0.3s ease;
}
</style>
