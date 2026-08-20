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
                class="font-heading text-[24px] leading-relaxed text-text mb-6 inline-block"
            >
                Hemos tenido la suerte de trabajar, entre otros, con:
            </h2>
            <ul
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 font-sans text-base leading-snug text-text mt-4"
            >
                <li>
                    <a
                        href="https://brokenwatermusic.bandcamp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Broken Water
                    </a>
                    <span class="text-gray-500">(Night People / US)</span>
                </li>
                <li>
                    <a
                        href="https://www.nts.live/shows/alien-jams"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Chloe Frieda
                    </a>
                    <span class="text-gray-500">(NTS / Alien Jams / UK)</span>
                </li>
                <li>
                    <a
                        href="https://danielbachman.bandcamp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Daniel Bachman
                    </a>
                    <span class="text-gray-500">(Three Lobed / US)</span>
                </li>
                <li>
                    <a
                        href="https://soundcloud.com/dont-dj-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Don't DJ
                    </a>
                    <span class="text-gray-500">(Berceuse Heroique / DE)</span>
                </li>
                <li>
                    <a
                        href="https://www.dublab.cat"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Dublab Barcelona
                        <span class="text-gray-500">(CAT)</span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://gordonashworth.bandcamp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Gordon Ashworth
                    </a>
                    <span class="text-gray-500">(Olvido Records / US)</span>
                </li>
                <li>
                    <a
                        href="https://jamesblackshaw.bandcamp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        James Blackshaw
                    </a>
                    <span class="text-gray-500">(Important / US)</span>
                </li>
                <li>
                    <a
                        href="https://jungantagen.bandcamp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Jung An Tagen
                    </a>
                    <span class="text-gray-500">(Mego Editions / AT)</span>
                </li>
                <li>
                    <a
                        href="https://kioskradio.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Kiosk Radio
                    </a>
                    <span class="text-gray-500">(BE)</span>
                </li>
                <li>
                    <a
                        href="https://marisaanderson.bandcamp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Marisa Anderson
                    </a>
                    <span class="text-gray-500">(Thrill Jockey / US)</span>
                </li>
                <li>
                    <a
                        href="https://maxwellaugustcroy.bandcamp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Maxwell August Croy
                    </a>
                    <span class="text-gray-500">(Root Strata / US)</span>
                </li>
                <li>
                    <a
                        href="https://mopegrooves.bandcamp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Mope Grooves
                    </a>
                    <span class="text-gray-500">(See My Friends / US)</span>
                </li>
                <li>
                    <a
                        href="https://mississippirecords.bandcamp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Mississippi Records
                    </a>
                    <span class="text-gray-500">(US)</span>
                </li>
                <li>
                    <a
                        href="https://noveller.bandcamp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Noveller
                    </a>
                    <span class="text-gray-500">(Fire Records / US)</span>
                </li>
                <li>
                    <a
                        href="https://www.nts.live"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        NTS Radio
                        <span class="text-gray-500">(UK)</span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://paranoiseradio.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Paranoise Radio
                        <span class="text-gray-500">(GR)</span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://soundcloud.com/parris_dj"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Parris
                    </a>
                    <span class="text-gray-500"
                        >(Idle Hands / Trilogy Tapes / UK)</span
                    >
                </li>
                <li>
                    <a
                        href="https://shivafeshareki.bandcamp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Shiva Feshareki
                    </a>
                    <span class="text-gray-500">(Matière Mémoire / UK)</span>
                </li>
                <li>
                    <a
                        href="https://stevehauschildt.bandcamp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Steve Hauschildt
                    </a>
                    <span class="text-gray-500">(Kranky / US)</span>
                </li>
                <li>
                    <a
                        href="https://www.mountain-goats.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        The Mountain Goats
                    </a>
                    <span class="text-gray-500">(Merge / US)</span>
                </li>
                <li>
                    <a
                        href="https://woolenmen.bandcamp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        The Woolen Men
                    </a>
                    <span class="text-gray-500">(Woodsist / US)</span>
                </li>
            </ul>
            <ul
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 font-sans text-base leading-snug text-text mt-4"
            >
                <li>
                    Able Noise
                    <span class="text-gray-500">(World of Echo / NL-UK)</span>
                </li>
                <li>
                    Adriaan de Roover
                    <span class="text-gray-500">(Dauw / BE)</span>
                </li>
                <li>
                    Dudal
                    <span class="text-gray-500">(Ind. / ES)</span>
                </li>
                <li>
                    Aircode
                    <span class="text-gray-500">(Alien Jams / UK)</span>
                </li>
                <li>
                    Francisco Morgan
                    <span class="text-gray-500">(Ind. / ES)</span>
                </li>
                <li>
                    Ana Roxanne
                    <span class="text-gray-500">(Kranky / US)</span>
                </li>
                <li>
                    Dania
                    <span class="text-gray-500">(Geographic North / AU)</span>
                </li>
                <li>
                    Big Blood
                    <span class="text-gray-500">(Feeding Tube / US)</span>
                </li>
                <li>
                    Thérése
                    <span class="text-gray-500">(Ind. / ES)</span>
                </li>
                <li>
                    Bear Bones, Lay Low
                    <span class="text-gray-500">(KRAAK / VE-BE)</span>
                </li>
                <li>
                    Black Zone Myth Chant
                    <span class="text-gray-500">(Editions Gravats / FR)</span>
                </li>
                <li>
                    Uza.Zetangas
                    <span class="text-gray-500">(Ind. / PE)</span>
                </li>
                <li>
                    DJ Watusawa
                    <span class="text-gray-500">(Red Light Radio / NL)</span>
                </li>
                <li>
                    Céline Gillain
                    <span class="text-gray-500">(Crammed Discs / BE)</span>
                </li>
                <li>
                    Cole Pulice
                    <span class="text-gray-500">(Leaving Records / US)</span>
                </li>
                <li>
                    Jason Kolàr
                    <span class="text-gray-500">(Stroom / ES)</span>
                </li>
                <li>
                    Colleen
                    <span class="text-gray-500">(Thrill Jockey / FR)</span>
                </li>
                <li>
                    Ivan Zoloto
                    <span class="text-gray-500">(School of the Arts / RU)</span>
                </li>
                <li>
                    Pablo Volt
                    <span class="text-gray-500">(Balmat / ES)</span>
                </li>
                <li>
                    Rosso Polare
                    <span class="text-gray-500">(Discrepant / IT)</span>
                </li>
                <li>
                    Eric Chenaux
                    <span class="text-gray-500">(Constellation / CA)</span>
                </li>
                <li>
                    H Waas
                    <span class="text-gray-500">(Ind. / ES)</span>
                </li>
                <li>
                    Goldblum
                    <span class="text-gray-500">(Ind. / ES)</span>
                </li>
                <li>
                    Hekura
                    <span class="text-gray-500">(Humo Internacional / ES)</span>
                </li>
                <li>
                    Jordi Santanach
                    <span class="text-gray-500">(Humo Internacional / ES)</span>
                </li>
                <li>
                    Inturist
                    <span class="text-gray-500">(Gost Zvuk / RU)</span>
                </li>
                <li>
                    Dima Midborn
                    <span class="text-gray-500">(Gost Zvuk / RU)</span>
                </li>
                <li>
                    Jeremiah Chiu
                    <span class="text-gray-500">(International Anthem / US)</span>
                </li>
                <li>
                    Morita Vargas
                    <span class="text-gray-500">(Hidden Harmony / AR)</span>
                </li>
                <li>
                    Kou
                    <span class="text-gray-500">(Discrepant / ES)</span>
                </li>
                <li>
                    QBRNTHSS
                    <span class="text-gray-500">(Gin&Platonic / ES)</span>
                </li>
                <li>
                    Mecánica Clásica
                    <span class="text-gray-500">(Abstrakce / ES)</span>
                </li>
                <li>
                    Sentuhlà
                    <span class="text-gray-500">(Humo Internacional / ES)</span>
                </li>
                <li>
                    ---___--____
                    <span class="text-gray-500">(Orange Milk / US)</span>
                </li>
                <li>
                    Ex Continent
                    <span class="text-gray-500">(Hivern Discs / ES)</span>
                </li>
                <li>
                    Nick Malkin
                    <span class="text-gray-500">(Geographic North / US)</span>
                </li>
                <li>
                    J.G.G.
                    <span class="text-gray-500">(Humo Internacional / ES)</span>
                </li>
                <li>
                    Niecy Blues
                    <span class="text-gray-500">(Kranky / US)</span>
                </li>
                <li>
                    M. Mohamed Khtira
                    <span class="text-gray-500">(Hive Mind / MA)</span>
                </li>
                <li>
                    Passepartout Duo
                    <span class="text-gray-500">(Cantaloupe Music / IT-US)</span>
                </li>
                <li>
                    Bio DATA-X
                    <span class="text-gray-500">(Ind. / ES)</span>
                </li>
                <li>
                    Patrick Shiroishi
                    <span class="text-gray-500">(American Dreams / US)</span>
                </li>
                <li>
                    The Devil, Probably
                    <span class="text-gray-500">(Ind. / ES)</span>
                </li>
                <li>
                    Piotr Kurek
                    <span class="text-gray-500">(Mondoj / PL)</span>
                </li>
                <li>
                    Roméo Poirier
                    <span class="text-gray-500">(Sferic / BE)</span>
                </li>
                <li>
                    Taki Onqoy
                    <span class="text-gray-500">(Ind. / AR)</span>
                </li>
                <li>
                    Fassion Health
                    <span class="text-gray-500">(Ind. / ES)</span>
                </li>
                <li>
                    Új Bála
                    <span class="text-gray-500">(Dalmata Daniel / HU)</span>
                </li>
                <li>
                    DMRA
                    <span class="text-gray-500">(Ind. / FR)</span>
                </li>
                <li>
                    Vic Bang
                    <span class="text-gray-500">(Orange Milk / AR)</span>
                </li>
                <li>
                    Los Cuatro Amigos
                    <span class="text-gray-500">(Ind. / ES)</span>
                </li>
            </ul>
        </section>
    </article>
</template>
