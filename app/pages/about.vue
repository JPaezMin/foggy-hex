<script setup>
useSeoMeta({
    title: 'Sobre Nosotros | Foggy Hex',
    description: 'Conoce a Foggy Hex',
    ogTitle: 'Sobre Nosotros | Foggy Hex',
    ogDescription:
        'Foggy Hex — Un colectivo con base de operaciones en Barcelona que organiza conciertos y otros eventos relacionados a cosas que nos apasionan',
    ogImage: 'https://www.foggyhexbcn.com/about-og.jpg',
    ogUrl: 'https://www.foggyhexbcn.com/about',
})
</script>

<template>
    <article class="relative container mx-auto px-6 py-16 space-y-8 text-left">
        <!-- Intro -->
        <section class="max-w-4xl relative z-10">
            <h1
                class="font-heading text-[40px] leading-tight text-accent mb-8 border-l-4 border-text pl-4"
            >
                Sobre Nosotros
            </h1>
            <p class="font-sans text-lg leading-relaxed text-text">
                Nuestro trabajo es orientado al fan, de espíritu DIY y basado en
                la experiencia. Colaboramos con espacios y salas de nuestra
                ciudad organizando conciertos abiertos a personas de todas las
                edades y orígenes.
            </p>
        </section>

        <!-- Collaborations -->
        <section class="max-w-5xl relative z-10">
            <h2
                class="font-heading text-2xl text-text mb-6 border-b border-text inline-block"
            >
                Hemos tenido la suerte de trabajar, entre otros, con:
            </h2>
            <ul
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 font-sans text-base leading-snug text-text mt-4"
            >
                <li>
                    Broken Water
                    <span class="text-gray-500">(Night People / US)</span>
                </li>
                <li>
                    Chloe Frieda
                    <span class="text-gray-500">(NTS / Alien Jams / UK)</span>
                </li>
                <li>
                    Daniel Bachman
                    <span class="text-gray-500">(Three Lobed / US)</span>
                </li>
                <li>
                    Don't DJ
                    <span class="text-gray-500">(Berceuse Heroique / DE)</span>
                </li>
                <li>
                    Gordon Ashworth
                    <span class="text-gray-500">(Olvido Records / US)</span>
                </li>
                <li>
                    James Blackshaw
                    <span class="text-gray-500">(Important / US)</span>
                </li>
                <li>
                    Jung An Tagen
                    <span class="text-gray-500">(Mego Editions / AT)</span>
                </li>
                <li>
                    Marisa Anderson
                    <span class="text-gray-500">(Thrill Jockey / US)</span>
                </li>
                <li>
                    Maxwell August Croy
                    <span class="text-gray-500">(Root Strata / US)</span>
                </li>
                <li>
                    Mope Grooves
                    <span class="text-gray-500">(See My Friends / US)</span>
                </li>
                <li>
                    Mississippi Records <span class="text-gray-500">(US)</span>
                </li>
                <li>
                    Noveller
                    <span class="text-gray-500">(Fire Records / US)</span>
                </li>
                <li>
                    Parris
                    <span class="text-gray-500"
                        >(Idle Hands / Trilogy Tapes / UK)</span
                    >
                </li>
                <li>
                    Shiva Feshareki
                    <span class="text-gray-500">(Matière Mémoire / UK)</span>
                </li>
                <li>
                    Steve Hauschildt
                    <span class="text-gray-500">(Kranky / US)</span>
                </li>
                <li>
                    The Mountain Goats
                    <span class="text-gray-500">(Merge / US)</span>
                </li>
                <li>
                    The Woolen Men
                    <span class="text-gray-500">(Woodsist / US)</span>
                </li>
            </ul>
        </section>
    </article>
</template>
