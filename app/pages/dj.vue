<script setup>
useSeoMeta({
    title: 'Foggy Hex DJs | Foggy Hex',
    description: 'Conoce a Foggy Hex, nuestro colectivo con base en Barcelona.',
    ogTitle: 'Foggy Hex DJs | Foggy Hex',
    ogDescription:
        'Colectivo en Barcelona que celebra escenas en los márgenes.',
    ogImage: 'https://www.foggyhexbcn.com/about-og.jpg',
    ogUrl: 'https://www.foggyhexbcn.com/about',
})
const djs = [
    {
        name: 'Alec Curtis',
        image: '/images/alec.jpeg',
        description:
            "Founding member of the Barcelona collective Foggy Hex and music nerd, Jorge Páez began DJing the dark basements of his native city Líma, where he found a space of joy and universal connection in sound. After a long journey playing for free-form radio outlets and selecting music for curious crowds between Portland, Brussels, and Barcelona (where he's based at the moment), Páez now uses the moniker Taki Onqoy to navigate, with a naive sense of wonder, the intersection between dub, leftfield pop, and 'other music' influenced by all sorts of mysterious and global sounds.",
    },
    {
        name: 'Taki Onqoy',
        image: '/images/taki-onqoy.jpg',
        description:
            "Founding member of the Barcelona collective Foggy Hex and music nerd, Jorge Páez began DJing the dark basements of his native city Líma, where he found a space of joy and universal connection in sound. After a long journey playing for free-form radio outlets and selecting music for curious crowds between Portland, Brussels, and Barcelona (where he's based at the moment), Páez now uses the moniker Taki Onqoy to navigate, with a naive sense of wonder, the intersection between dub, leftfield pop, and 'other music' influenced by all sorts of mysterious and global sounds.",
    },
]
</script>

<template>
    <article class="container mx-auto px-6 py-16 space-y-24">
        <header class="text-center space-y-4">
            <h1
                class="font-heading text-[40px] leading-tight text-accent border-b border-text inline-block pb-2"
            >
                Foggy Hex DJs
            </h1>
        </header>

        <section class="grid gap-20">
            <div
                v-for="(dj, i) in djs"
                :key="dj.name"
                class="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
                <!-- Image -->
                <div
                    class="lg:col-span-5 flex justify-center"
                    :class="i % 2 === 1 ? 'lg:order-2' : ''"
                >
                    <div class="w-2/3 aspect-square overflow-hidden">
                        <img
                            :src="dj.image"
                            :alt="dj.name"
                            class="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
                        />
                    </div>
                </div>

                <!-- Text -->
                <div
                    class="lg:col-span-7 space-y-6"
                    :class="i % 2 === 1 ? 'lg:order-1 text-right' : 'text-left'"
                >
                    <h2
                        class="font-heading text-3xl border-b border-text inline-block pb-2"
                    >
                        {{ dj.name }}
                    </h2>
                    <p
                        class="font-sans text-base leading-relaxed max-w-prose mt-4"
                        :class="i % 2 === 1 ? 'ml-auto' : ''"
                    >
                        {{ dj.description }}
                    </p>
                </div>

                <!-- Accent bar -->
                <div
                    class="absolute top-0 h-full w-1 bg-accent"
                    :class="i % 2 === 1 ? 'right-0' : 'left-0'"
                ></div>
            </div>
        </section>
    </article>
</template>
