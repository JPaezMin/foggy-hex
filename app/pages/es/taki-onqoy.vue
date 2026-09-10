<script setup lang="ts">
const siteUrl = 'https://foggyhexbcn.com'
const pageUrl = `${siteUrl}/es/taki-onqoy`
const englishPageUrl = `${siteUrl}/taki-onqoy`
const imageUrl = `${siteUrl}/images/taki-onqoy.jpg`

const sonicMarkers = [
    'dub',
    'sonidos etnográficos',
    'electrónica leftfield',
    'ritmos post-club',
    'folclore andino',
    'tradiciones afroperuanas',
]

useSeoMeta({
    title: 'Taki Onqoy | DJ, selector y programador de Foggy Hex en Barcelona',
    description:
        'Taki Onqoy es el alias de Jorge Páez Minaya, selector, radio host y programador musical nacido en Lima y afincado en Barcelona.',
    ogTitle: 'Taki Onqoy | DJ, selector y programador de Foggy Hex',
    ogDescription:
        'Perfil en español de Taki Onqoy, alias de Jorge Páez Minaya: selector, radio host y programador musical afincado en Barcelona.',
    ogImage: imageUrl,
    ogUrl: pageUrl,
    ogType: 'profile',
    ogLocale: 'es_ES',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Taki Onqoy | DJ, selector y programador',
    twitterDescription:
        'Perfil de Taki Onqoy, selector nacido en Lima y afincado en Barcelona, cofundador de Foggy Hex.',
    twitterImage: imageUrl,
})

useHead({
    htmlAttrs: {
        lang: 'es',
    },
    link: [
        {
            rel: 'canonical',
            href: pageUrl,
        },
        {
            rel: 'alternate',
            hreflang: 'es',
            href: pageUrl,
        },
        {
            rel: 'alternate',
            hreflang: 'en',
            href: englishPageUrl,
        },
        {
            rel: 'alternate',
            hreflang: 'x-default',
            href: englishPageUrl,
        },
        {
            rel: 'preload',
            as: 'image',
            href: '/images/taki-onqoy.jpg',
        },
    ],
    meta: [
        {
            name: 'keywords',
            content:
                'Taki Onqoy, Jorge Páez Minaya, DJ Barcelona, selector Lima, Foggy Hex, Kiosk Radio, Paranoise Radio, Tower Of Echo, Dublab Barcelona, dub, electrónica leftfield, sonidos etnográficos, post-club, folclore andino, tradiciones afroperuanas',
        },
        {
            name: 'geo.region',
            content: 'ES-CT',
        },
        {
            name: 'geo.placename',
            content: 'Barcelona',
        },
    ],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify([
                {
                    '@context': 'https://schema.org',
                    '@type': 'ProfilePage',
                    '@id': `${pageUrl}#profile`,
                    url: pageUrl,
                    name: 'Taki Onqoy',
                    headline:
                        'Taki Onqoy, DJ, selector, radio host y programador musical afincado en Barcelona',
                    description:
                        'Taki Onqoy es el alias de Jorge Páez Minaya, selector, radio host y programador musical nacido en Lima y afincado en Barcelona.',
                    image: imageUrl,
                    inLanguage: 'es',
                    datePublished: '2026-09-09',
                    dateModified: '2026-09-10',
                    primaryImageOfPage: {
                        '@type': 'ImageObject',
                        url: imageUrl,
                        contentUrl: imageUrl,
                        width: 1080,
                        height: 1440,
                        caption:
                            'Retrato en blanco y negro de Taki Onqoy, DJ y programador musical afincado en Barcelona.',
                        representativeOfPage: true,
                    },
                    mainEntity: {
                        '@type': 'Person',
                        '@id': `${englishPageUrl}#taki-onqoy`,
                        name: 'Jorge Páez Minaya',
                        alternateName: 'Taki Onqoy',
                        birthPlace: {
                            '@type': 'Place',
                            name: 'Lima, Perú',
                        },
                        homeLocation: {
                            '@type': 'City',
                            name: 'Barcelona',
                        },
                        jobTitle: [
                            'DJ',
                            'Selector',
                            'Radio host',
                            'Programador musical',
                        ],
                        image: imageUrl,
                        url: pageUrl,
                        sameAs: [
                            'https://www.instagram.com/takiononqoy/',
                            'https://soundcloud.com/takiononqoy',
                            'https://www.kioskradio.com/episode/2026-09-01/foggy-hex-w-taki-onqoy',
                            'https://kioskradio.com/label/foggy-hex',
                            'https://www.paranoiseradio.com/residents/taki-onqoy',
                            'https://www.dublab.cat/arxiu/pargueland',
                            'https://www.dublab.com/archive/jorge-paez-guest-dj-set-04-24-19',
                            'https://freeformportland.org/',
                        ],
                        memberOf: {
                            '@type': 'Organization',
                            name: 'Foggy Hex',
                            url: siteUrl,
                        },
                        knowsAbout: sonicMarkers,
                        performerIn: [
                            {
                                '@type': 'RadioSeries',
                                name: 'Foggy Hex Outsiders',
                                url: 'https://www.kioskradio.com/episode/2026-09-01/foggy-hex-w-taki-onqoy',
                            },
                            {
                                '@type': 'RadioSeries',
                                name: 'Pargueland',
                            },
                            {
                                '@type': 'RadioSeries',
                                name: 'Tower Of Echo',
                            },
                            {
                                '@type': 'MusicEvent',
                                name: 'Meakusma Festival 2026',
                                location: {
                                    '@type': 'Place',
                                    name: 'Eupen, Belgium',
                                },
                            },
                        ],
                    },
                },
                {
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        {
                            '@type': 'ListItem',
                            position: 1,
                            name: 'Foggy Hex',
                            item: siteUrl,
                        },
                        {
                            '@type': 'ListItem',
                            position: 2,
                            name: 'Taki Onqoy',
                            item: pageUrl,
                        },
                    ],
                },
            ]),
        },
    ],
})
</script>

<template>
    <article class="profile-page min-h-screen text-text">
        <div class="container mx-auto px-6">
            <div class="profile-layout">
                <figure class="portrait-frame">
                    <img
                        src="/images/taki-onqoy.jpg"
                        width="1080"
                        height="1440"
                        alt="Retrato en blanco y negro de Taki Onqoy, DJ y programador musical afincado en Barcelona"
                    />
                </figure>

                <section class="bio-copy" aria-label="Biografía de Taki Onqoy">
                    <h1 class="sr-only">Taki Onqoy</h1>
                    <nav class="bio-links" aria-label="Enlaces de Taki Onqoy">
                        <a
                            href="https://www.instagram.com/takiononqoy/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Instagram</a>
                        <a
                            href="https://soundcloud.com/takiononqoy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >SoundCloud</a>
                        <a
                            href="https://gate.sc/?url=https%3A%2F%2Fkioskradio.com%2Flabel%2Ffoggy-hex&token=4982fd-1-1788960584942"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Kiosk Radio BXL</a>
                        <a
                            href="https://gate.sc/?url=https%3A%2F%2Fwww.paranoiseradio.com%2Fresidents%2Ftaki-onqoy&token=5d6706-1-1788960584942"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Paranoise Radio SKG</a>
                        <a
                            href="https://dublab.cat/arxiu/pargueland"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Dublab BCN</a>
                    </nav>
                    <nav
                        class="language-switcher"
                        aria-label="Idioma del perfil de Taki Onqoy"
                    >
                        <NuxtLink
                            to="/es/taki-onqoy"
                            hreflang="es"
                            lang="es"
                            aria-current="page"
                        >ES</NuxtLink>
                        <NuxtLink
                            to="/taki-onqoy"
                            hreflang="en"
                            lang="en"
                        >EN</NuxtLink>
                    </nav>
                    <p>
                        <a
                            href="https://www.instagram.com/takiononqoy/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Taki Onqoy</a>
                        es el alias de Jorge Páez Minaya, selector, radio host y
                        programador musical nacido en Lima y afincado en
                        Barcelona. Su relación con la música empezó a tomar
                        forma en el circuito independiente limeño, tocando en
                        bandas y pinchando en pequeños bares y espacios
                        underground antes de trasladar esa misma curiosidad a la
                        radio y al trabajo curatorial. Sus sets trazan
                        conexiones entre el dub, los sonidos etnográficos, la
                        electrónica leftfield y los ritmos post-club, y se guían
                        más por la textura, la atmósfera y el movimiento que por
                        etiquetas de género. El folclore andino y las
                        tradiciones afroperuanas se filtran de forma sutil en
                        su manera de seleccionar y secuenciar discos, más como
                        cadencia, repetición e instinto rítmico que como cita
                        explícita.
                    </p>
                    <p>
                        La radio ha sido otro espacio natural para esa forma de
                        escuchar. Entre 2017 y 2023, presentó “Pargueland”, un
                        programa mensual de formato libre en Dublab Barcelona,
                        construido a partir de selecciones personales y
                        entrevistas con artistas locales e internacionales.
                        También ha sido invitado a realizar sesiones para
                        <a
                            href="https://www.dublab.com/archive/jorge-paez-guest-dj-set-04-24-19"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Dublab L.A.</a>
                        y
                        <a
                            href="https://freeformportland.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Freeform Portland Radio</a>.
                        Desde hace casi tres años mantiene además una residencia
                        mensual en
                        <a
                            href="https://gate.sc/?url=https%3A%2F%2Fwww.paranoiseradio.com%2Fresidents%2Ftaki-onqoy&token=5d6706-1-1788960584942"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Paranoise Radio</a>,
                        emisora con base en Tesalónica, donde presenta y
                        produce “Tower Of Echo” como una extensión de su trabajo
                        como selector.
                    </p>
                    <p>
                        En 2022, Taki Onqoy cofundó
                        <a
                            href="https://foggyhexbcn.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Foggy Hex</a>
                        junto a Alec Curtis (NTS Radio) y desde entonces dirige
                        el proceso curatorial del colectivo: programa,
                        selecciona artistas y desarrolla eventos en diálogo
                        directo con músicos, agentes, salas y espacios locales.
                        El proyecto ha extendido también su actividad más allá
                        de Barcelona: en 2025,
                        <a
                            href="https://gate.sc/?url=https%3A%2F%2Fkioskradio.com%2Flabel%2Ffoggy-hex&token=4982fd-1-1788960584942"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Kiosk Radio</a>
                        de Bruselas invitó a Foggy Hex a formar parte de su
                        ciclo “Outsiders”, con una residencia mensual cuya
                        curaduría y producción corren a cargo de Páez.
                    </p>
                    <p>
                        En Barcelona, se ha encargado del warm-up para artistas
                        como Ana Roxanne, Colleen, Céline Gillain, Jeremiah Chiu
                        y Passepartout Duo, moviéndose por la red de espacios
                        independientes de la ciudad, entre ellos
                        <a
                            href="https://www.casamontjuic.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Casa Montjuïc</a>
                        y
                        <a
                            href="https://elpumarejo.org/en/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >El Pumarejo</a>.
                        En Portland, sus selecciones se han escuchado en
                        pequeños bares y espacios underground que orbitan la
                        escena club de la ciudad.
                    </p>
                    <p>
                        En la edición más reciente de
                        <a
                            href="https://www.meakusma-festival.be/artists-2026/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Meakusma Festival</a>,
                        celebrada en Eupen, Bélgica, en septiembre de 2026,
                        Taki Onqoy cerró el escenario Heuboden, dentro de una
                        programación por la que durante el fin de semana también
                        pasaron Big Hands, Gilb’R, Nosedrip, Loma Doom, Mr.
                        Clarinet y otros selectores y artistas situados en los
                        márgenes más abiertos del festival. Ya sea en la radio,
                        en un warm-up set o en una sesión más larga, Taki Onqoy
                        se acerca a la sala siempre con el mismo instinto:
                        atento al ritmo y a su dimensión física, pero dejando
                        siempre el margen suficiente para que un disco extraño
                        pueda alterar por completo la dirección de lo que viene
                        después.
                    </p>

                    <section class="selected-sets" aria-labelledby="selected-sets-heading">
                        <h2 id="selected-sets-heading">Sets seleccionados</h2>
                        <ol>
                            <li>
                                <a
                                    href="https://www.kioskradio.com/episode/2026-09-01/foggy-hex-w-taki-onqoy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Taki Onqoy : Foggy Hex @ Kiosk Radio (Staff Pick, septiembre 2026)</a>
                            </li>
                            <li>
                                <a
                                    href="https://soundcloud.com/takiononqoy/warm-up-for-pasepartout-duo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Taki Onqoy : Warm-Up para Passepartout Duo @ Casa Montjuïc (20 junio 2026)</a>
                            </li>
                            <li>
                                <a
                                    href="https://soundcloud.com/takiononqoy/warm-up-set-for-colleens"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Taki Onqoy : Warm-Up para Colleen @ Casa Montjuïc (26 abril 2026)</a>
                            </li>
                            <li>
                                <a
                                    href="https://www.mixcloud.com/dublabes/pargueland-120118-tupper_4-w-lowtrux-dont-dj/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Taki Onqoy : B2B con Don’t DJ @ Tupper Festival (12 enero 2018)</a>
                            </li>
                        </ol>
                    </section>
                </section>
            </div>
        </div>
    </article>
</template>

<style scoped>
.profile-page {
    background:
        linear-gradient(90deg, rgba(29, 29, 29, 0.06) 1px, transparent 1px),
        linear-gradient(180deg, #f4f4f1 0%, #ffffff 52%, #f7f7f4 100%);
    background-size:
        96px 100%,
        auto;
}

.profile-layout {
    display: grid;
    grid-template-columns: minmax(280px, 0.72fr) minmax(0, 1fr);
    gap: 56px;
    align-items: start;
    padding: 64px 0 86px;
}

.portrait-frame {
    position: sticky;
    top: 32px;
    margin: 0;
}

.portrait-frame img {
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    border: 1px solid currentColor;
    filter: grayscale(100%);
}

.bio-copy {
    max-width: 760px;
    padding-top: 8px;
}

.bio-links {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 16px;
    margin-bottom: 28px;
    font-family: 'Source Code Pro', monospace;
    font-size: 14px;
    line-height: 1.45;
    letter-spacing: 0;
}

.bio-links a {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    overflow-wrap: anywhere;
}

.bio-links a::after {
    content: '↗';
    font-size: 0.86em;
    line-height: 1;
}

.language-switcher {
    display: inline-flex;
    gap: 0;
    margin-bottom: 26px;
    border: 1px solid currentColor;
    font-family: 'Source Code Pro', monospace;
    font-size: 14px;
    line-height: 1;
}

.language-switcher a {
    min-width: 44px;
    padding: 10px 12px;
    border-bottom: 0;
    text-align: center;
    font-weight: 400;
}

.language-switcher a + a {
    border-left: 1px solid currentColor;
}

.language-switcher a[aria-current='page'] {
    background: #1d1d1d;
    color: #fff;
}

.selected-sets {
    margin-top: 38px;
    border-top: 1px solid currentColor;
    padding-top: 18px;
}

.selected-sets h2 {
    margin-bottom: 12px;
    font-family: 'Source Code Pro', monospace;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0;
}

.selected-sets ol {
    display: grid;
    gap: 10px;
    margin: 0;
    padding-left: 22px;
}

.selected-sets li {
    padding-left: 4px;
    font-size: 15px;
    line-height: 1.45;
    letter-spacing: 0;
}

.bio-copy p {
    margin-bottom: 24px;
    font-size: 19px;
    line-height: 1.76;
    letter-spacing: 0;
}

.bio-copy a {
    border-bottom: 1px solid currentColor;
    font-weight: 500;
    letter-spacing: 0;
}

.bio-copy a:hover {
    color: #1e25bb;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

@media (max-width: 1024px) {
    .profile-layout {
        grid-template-columns: 1fr;
        gap: 34px;
        padding: 44px 0 68px;
    }

    .portrait-frame {
        position: static;
        max-width: 520px;
    }
}

@media (max-width: 768px) {
    .profile-layout {
        padding: 28px 0 54px;
    }

    .bio-copy p {
        font-size: 17px;
        line-height: 1.72;
    }
}
</style>
