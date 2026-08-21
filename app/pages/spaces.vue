<script setup>
useSeoMeta({
    title: 'Espacios autogestionados en Barcelona | Foggy Hex',
    description:
        'Espacios, salas y proyectos autogestionados de Barcelona con los que Foggy Hex colabora para organizar conciertos y eventos independientes.',
    ogTitle: 'Espacios autogestionados en Barcelona | Foggy Hex',
    ogDescription:
        'Salas y espacios independientes de Barcelona vinculados a la programación de Foggy Hex.',
    ogImage: 'https://foggyhexbcn.com/favicons/favicon-1024x1024.png',
    ogUrl: 'https://foggyhexbcn.com/spaces',
    twitterCard: 'summary_large_image',
})
</script>

<template>
    <article class="container mx-auto px-6 py-16 space-y-8 text-left">
        <!-- Intro -->
        <section class="max-w-4xl">
            <h1
                class="font-heading text-[40px] leading-tight text-accent mb-8 border-l-4 border-text pl-4"
            >
                Espacios
            </h1>
            <p class="font-sans text-lg leading-relaxed text-text">
                Foggy Hex sólo colabora con espacios auto-gestionados de nuestra
                ciudad. Espacios cuya existencia creemos imprescindible para el
                desarrollo cultural de la misma. Aquí una lista de los espacios
                con los que hemos tenido la suerte de trabajar y sin cuyo apoyo
                nuestra tarea sería imposible:
            </p>
        </section>

        <!-- Spaces list -->
        <section class="max-w-3xl">
            <ul class="space-y-4 font-sans text-base leading-snug text-text">
                <li>
                    <a
                        href="https://www.casamontjuic.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="block hover:text-accent transition-colors"
                    >
                        Casa Montjuic
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/dublab.cat/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="block hover:text-accent transition-colors"
                    >
                        El Teatro de La Rubia
                        <span class="text-gray-500"
                            >(vía Dublab Barcelona)</span
                        >
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/elpumarejo"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="block hover:text-accent transition-colors"
                    >
                        El Pumarejo Refugio Cultural
                    </a>
                </li>
                <li>
                    <a
                        href="https://hangar.org/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="block hover:text-accent transition-colors"
                    >
                        Hangar
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/if.publications/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="block hover:text-accent transition-colors"
                    >
                        IF Publications Studio
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/lanegrafactory"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="block hover:text-accent transition-colors"
                    >
                        La Negra Factory
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/sinestesia.barcelona"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="block hover:text-accent transition-colors"
                    >
                        Sinestesia
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.lautomatica.org/es/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="block hover:text-accent transition-colors"
                    >
                        L'Automatica
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/niu_espai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="block hover:text-accent transition-colors"
                    >
                        NIU Espacio Artístico
                    </a>
                </li>
            </ul>
        </section>
    </article>
</template>
