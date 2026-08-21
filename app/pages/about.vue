<script setup>
const collaborators = [
    {
        name: '---___--____',
        meta: 'Orange Milk / US',
    },
    {
        name: 'Able Noise',
        meta: 'World of Echo / NL-UK',
    },
    {
        name: 'Adriaan de Roover',
        meta: 'Dauw / BE',
    },
    {
        name: 'Aircode',
        meta: 'Alien Jams / SWE',
    },
    {
        name: 'Ana Roxanne',
        meta: 'Kranky / US',
    },
    {
        name: 'Bear Bones, Lay Low',
        meta: 'KRAAK / VE',
    },
    {
        name: 'Big Blood',
        meta: 'Feeding Tube / US',
    },
    {
        name: 'Bio DATA-X',
        meta: 'Ind. / BCN',
    },
    {
        name: 'Black Zone Myth Chant',
        meta: 'Editions Gravats / FR',
    },
    {
        name: 'Broken Water',
        meta: 'Night People / US',
        url: 'https://brokenwatermusic.bandcamp.com',
    },
    {
        name: 'Céline Gillain',
        meta: 'Cortizona / Lexi Disques / BE',
    },
    {
        name: 'Chloe Frieda',
        meta: 'NTS / Alien Jams / UK',
        url: 'https://www.nts.live/shows/alien-jams',
    },
    {
        name: 'Cole Pulice',
        meta: 'Leaving Records / US',
    },
    {
        name: 'Colleen',
        meta: 'Thrill Jockey / FR',
    },
    {
        name: 'Dania',
        meta: 'Paralaxe Editions / BCN',
    },
    {
        name: 'Daniel Bachman',
        meta: 'Three Lobed / US',
        url: 'https://danielbachman.bandcamp.com',
    },
    {
        name: 'Dima Midborn',
        meta: 'Ind. / RU',
    },
    {
        name: 'DJ Watusawa',
        meta: 'Zona Watusa / NL',
    },
    {
        name: 'DMRA',
        meta: 'International Winners / FR',
    },
    {
        name: 'Don\'t DJ',
        meta: 'Berceuse Heroique / DE',
        url: 'https://soundcloud.com/dont-dj-1',
    },
    {
        name: 'Dublab Barcelona',
        meta: 'CAT',
        url: 'https://www.dublab.cat',
    },
    {
        name: 'Dudal',
        meta: 'Ind. / BE',
    },
    {
        name: 'Eric Chenaux',
        meta: 'Constellation / CA',
    },
    {
        name: 'Ex Continent',
        meta: 'Hivern Discs / CAT',
    },
    {
        name: 'Fassion Health',
        meta: 'Ind. / BCN',
    },
    {
        name: 'Francisco Morgan',
        meta: 'Loveless Records / PT',
    },
    {
        name: 'Goldblum',
        meta: 'Ind. / BCN',
    },
    {
        name: 'Gordon Ashworth',
        meta: 'Olvido Records / US',
        url: 'https://gordonashworth.bandcamp.com',
    },
    {
        name: 'H Waas',
        meta: 'Dublab BCN / BCN',
    },
    {
        name: 'Hekura',
        meta: 'Hegoa / BCN',
    },
    {
        name: 'Inturist',
        meta: 'Incompetence Records / RU',
    },
    {
        name: 'Ivan Zoloto',
        meta: 'School of the Arts / RU',
    },
    {
        name: 'J.G.G.',
        meta: 'Ediciones Populares / CAT',
    },
    {
        name: 'James Blackshaw',
        meta: 'Important / UK',
        url: 'https://jamesblackshaw.bandcamp.com',
    },
    {
        name: 'Jason Kolàr',
        meta: 'Stroom / CAT',
    },
    {
        name: 'Jeremiah Chiu',
        meta: 'International Anthem / US',
    },
    {
        name: 'Jordi Santanach',
        meta: 'Cosima Pitz / BCN',
    },
    {
        name: 'Jung An Tagen',
        meta: 'Editions Mego / AT',
        url: 'https://jungantagen.bandcamp.com/',
    },
    {
        name: 'Kiosk Radio',
        meta: 'BE',
        url: 'https://kioskradio.com/',
    },
    {
        name: 'Kou',
        meta: 'Ind. / BCN',
    },
    {
        name: 'Los Cuatro Amigos',
        meta: 'Ediciones Populares / VGO',
    },
    {
        name: 'Maalem Mohamed Khtira',
        meta: 'Gnawa Music / MA',
    },
    {
        name: 'Marisa Anderson',
        meta: 'Thrill Jockey / US',
        url: 'https://marisaanderson.bandcamp.com',
    },
    {
        name: 'Maxwell August Croy',
        meta: 'Root Strata / US',
        url: 'https://maxwellaugustcroy.bandcamp.com',
    },
    {
        name: 'Mecánica Clásica',
        meta: 'Abstrakce / Valencia',
    },
    {
        name: 'Mississippi Records',
        meta: 'US',
        url: 'https://mississippirecords.bandcamp.com',
    },
    {
        name: 'Mope Grooves',
        meta: 'See My Friends / US',
        url: 'https://mopegrooves.bandcamp.com',
    },
    {
        name: 'Morita Vargas',
        meta: 'Hidden Harmony / ARG',
    },
    {
        name: 'Nick Malkin',
        meta: 'Geographic North / US',
    },
    {
        name: 'Niecy Blues',
        meta: 'Kranky / US',
    },
    {
        name: 'Noveller',
        meta: 'Fire Records / US',
        url: 'https://noveller.bandcamp.com',
    },
    {
        name: 'NTS Radio',
        meta: 'UK',
        url: 'https://www.nts.live',
    },
    {
        name: 'Pablo Volt',
        meta: 'Ediciones Populares / BCN',
    },
    {
        name: 'Paranoise Radio',
        meta: 'GR',
        url: 'https://paranoiseradio.com',
    },
    {
        name: 'Parris',
        meta: 'Idle Hands / The Trilogy Tapes / UK',
        url: 'https://soundcloud.com/parris_dj',
    },
    {
        name: 'Passepartout Duo',
        meta: 'Tonal Union / IT-US',
    },
    {
        name: 'Patrick Shiroishi',
        meta: 'American Dreams / US',
    },
    {
        name: 'Piotr Kurek',
        meta: 'Mondoj / PL',
    },
    {
        name: 'QBRNTHSS',
        meta: 'Interworld Media / BCN',
    },
    {
        name: 'Roméo Poirier',
        meta: 'Faitiche / BE',
    },
    {
        name: 'Rosso Polare',
        meta: 'Ind. / IT',
    },
    {
        name: 'Sentuhlà',
        meta: 'Abstrakce / Valencia',
    },
    {
        name: 'Shiva Feshareki',
        meta: 'Matière Mémoire / UK',
        url: 'https://shivafeshareki.bandcamp.com',
    },
    {
        name: 'Steve Hauschildt',
        meta: 'Kranky / US',
        url: 'https://stevehauschildt.bandcamp.com',
    },
    {
        name: 'Taki Onqoy',
        meta: 'Foggy Hex / BCN',
    },
    {
        name: 'The Devil, Probably',
        meta: 'Urpa i musell / BCN',
    },
    {
        name: 'The Mountain Goats',
        meta: 'Merge / US',
        url: 'https://www.mountain-goats.com',
    },
    {
        name: 'The Woolen Men',
        meta: 'Woodsist / US',
        url: 'https://woolenmen.bandcamp.com/',
    },
    {
        name: 'Thérèse',
        meta: 'Repetidor / ES',
    },
    {
        name: 'Új Bála',
        meta: 'Baba Vanga / BE',
    },
    {
        name: 'Uza.Zetangas',
        meta: 'Ind. / PE',
    },
    {
        name: 'Vic Bang',
        meta: 'Mondoj / ARG',
    },
]

useSeoMeta({
    title: 'Sobre Foggy Hex | Colectivo musical en Barcelona',
    description:
        'Foggy Hex es un colectivo de Barcelona dedicado a conciertos de música experimental, ambient, electrónica, improvisación y escenas independientes.',
    ogTitle: 'Sobre Nosotros | Foggy Hex',
    ogDescription:
        'Colectivo de Barcelona dedicado a conciertos y escenas musicales independientes.',
    ogImage: 'https://foggyhexbcn.com/favicons/favicon-1024x1024.png',
    ogUrl: 'https://foggyhexbcn.com/about',
    twitterCard: 'summary_large_image',
})
</script>

<template>
    <article class="relative container mx-auto px-6 py-16 space-y-8 text-left">
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

        <section class="max-w-6xl relative z-10">
            <h2
                class="font-heading text-[24px] leading-relaxed text-text mb-6 inline-block"
            >
                Hemos tenido la suerte de trabajar, entre otros, con:
            </h2>
            <ul
                class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-y-3 gap-x-10 font-sans text-[15px] leading-none text-text mt-4"
            >
                <li
                    v-for="collaborator in collaborators"
                    :key="collaborator.name"
                    class="min-w-0 whitespace-nowrap overflow-hidden text-ellipsis"
                >
                    <a
                        v-if="collaborator.url"
                        :href="collaborator.url"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {{ collaborator.name }}
                    </a>
                    <span v-else>{{ collaborator.name }}</span>
                    <span
                        class="ml-1 align-baseline text-[11px] leading-none text-gray-500 sm:text-xs"
                    >
                        ({{ collaborator.meta }})
                    </span>
                </li>
            </ul>
        </section>
    </article>
</template>
