<script setup lang="ts">
const siteUrl = 'https://foggyhexbcn.com'
const pageUrl = `${siteUrl}/cat/taki-onqoy`
const englishPageUrl = `${siteUrl}/taki-onqoy`
const spanishPageUrl = `${siteUrl}/es/taki-onqoy`
const imageUrl = `${siteUrl}/images/taki-onqoy.jpg`

const sonicMarkers = [
    'dub',
    'sons etnogràfics',
    'electrònica leftfield',
    'ritmes post-club',
    'folklore andí',
    'tradicions afroperuanes',
]

useSeoMeta({
    title: 'Taki Onqoy | Selector i programador de Foggy Hex a Barcelona',
    description:
        'Taki Onqoy és l’àlies de Jorge Páez Minaya, selector, radio host i programador musical nascut a Lima i establert a Barcelona.',
    ogTitle: 'Taki Onqoy | Selector i programador de Foggy Hex',
    ogDescription:
        'Perfil en català de Taki Onqoy, àlies de Jorge Páez Minaya: selector, radio host i programador musical establert a Barcelona.',
    ogImage: imageUrl,
    ogUrl: pageUrl,
    ogType: 'profile',
    ogLocale: 'ca_ES',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Taki Onqoy | Selector i programador',
    twitterDescription:
        'Perfil de Taki Onqoy, selector nascut a Lima i establert a Barcelona, cofundador de Foggy Hex.',
    twitterImage: imageUrl,
})

useHead({
    htmlAttrs: {
        lang: 'ca',
    },
    link: [
        {
            rel: 'canonical',
            href: pageUrl,
        },
        {
            rel: 'alternate',
            hreflang: 'ca',
            href: pageUrl,
        },
        {
            rel: 'alternate',
            hreflang: 'es',
            href: spanishPageUrl,
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
                'Taki Onqoy, Jorge Páez Minaya, selector Barcelona, selector Lima, Foggy Hex, Kiosk Radio, Paranoise Radio, Tower Of Echo, Dublab Barcelona, dub, electrònica leftfield, sons etnogràfics, post-club, folklore andí, tradicions afroperuanes',
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
                        'Taki Onqoy, selector, radio host i programador musical establert a Barcelona',
                    description:
                        'Taki Onqoy és l’àlies de Jorge Páez Minaya, selector, radio host i programador musical nascut a Lima i establert a Barcelona.',
                    image: imageUrl,
                    inLanguage: 'ca',
                    datePublished: '2026-09-09',
                    dateModified: '2026-09-12',
                    primaryImageOfPage: {
                        '@type': 'ImageObject',
                        url: imageUrl,
                        contentUrl: imageUrl,
                        width: 1080,
                        height: 1440,
                        caption:
                            'Retrat en blanc i negre de Taki Onqoy, selector i programador musical establert a Barcelona.',
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
                        alt="Retrat en blanc i negre de Taki Onqoy, selector i programador musical establert a Barcelona"
                    />
                </figure>

                <section class="bio-copy" aria-label="Biografia de Taki Onqoy">
                    <h1 class="sr-only">Taki Onqoy</h1>
                    <nav class="bio-links" aria-label="Enllaços de Taki Onqoy">
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
                        >ES</NuxtLink>
                        <NuxtLink
                            to="/cat/taki-onqoy"
                            hreflang="ca"
                            lang="ca"
                            aria-current="page"
                        >CAT</NuxtLink>
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
                        és l'àlies de Jorge Páez Minaya, selector, radio host i
                        programador musical nascut a Lima i establert a
                        Barcelona. La seva relació amb la música va començar a
                        prendre forma al circuit independent de Lima, tocant a
                        bandes i punxant en petits bars i espais underground
                        abans de traslladar aquesta mateixa curiositat a la
                        ràdio i al treball curatorial. Els seus sets tracen
                        connexions entre el dub, els sons etnogràfics,
                        l'electrònica leftfield i els ritmes post-club, i es
                        guien més per la textura, l'atmosfera i el moviment que
                        per etiquetes de gènere. El folklore andí i les
                        tradicions afroperuanes es filtren de manera subtil en
                        la seva manera de seleccionar i seqüenciar discos, més
                        com a cadència, repetició i instint rítmic que com a
                        cita explícita.
                    </p>
                    <p>
                        La ràdio ha estat un altre espai natural per a aquesta
                        manera d'escoltar. Entre 2017 i 2023, va presentar
                        “Pargueland”, un programa mensual de format lliure a
                        Dublab Barcelona, construït a partir de seleccions
                        personals i entrevistes amb artistes locals i
                        internacionals. També ha estat convidat a realitzar
                        sessions per a
                        <a
                            href="https://www.dublab.com/archive/jorge-paez-guest-dj-set-04-24-19"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Dublab L.A.</a>
                        i
                        <a
                            href="https://freeformportland.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Freeform Portland Ràdio</a>.
                        Des de fa gairebé tres anys manté a més una residència
                        mensual a
                        <a
                            href="https://gate.sc/?url=https%3A%2F%2Fwww.paranoiseradio.com%2Fresidents%2Ftaki-onqoy&token=5d6706-1-1788960584942"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Paranoise Ràdio</a>,
                        emissora amb base en Tessalònica, on presenta i
                        produeix “Tower Of Echo” com una extensió del seu
                        treball com a selector.
                    </p>
                    <p>
                        El 2022, Taki Onqoy va cofundar
                        <a
                            href="https://foggyhexbcn.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Foggy Hex</a>
                        juntament amb l'Alec Curtis (NTS Radio) i des de
                        llavors dirigeix el procés curatorial del col·lectiu:
                        programa, selecciona artistes i desenvolupa
                        esdeveniments en diàleg directe amb músics, agents,
                        sales i espais locals. El projecte ha estès també la
                        seva activitat més enllà de Barcelona: el 2025,
                        <a
                            href="https://gate.sc/?url=https%3A%2F%2Fkioskradio.com%2Flabel%2Ffoggy-hex&token=4982fd-1-1788960584942"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Kiosk Ràdio</a>
                        de Brussel·les va convidar a Foggy Hex a formar part
                        del seu cicle “<em>Outsiders</em>”, amb una residència
                        mensual amb la curaduría i producció a càrrec de Páez.
                    </p>
                    <p>
                        A Barcelona, s'ha encarregat del warm-up per a artistes
                        com Ana Roxanne, Colleen, Céline Gillain, Jeremiah Chiu
                        i Passepartout Duo, movent-se per la xarxa d'espais
                        independents de la ciutat, entre ells
                        <a
                            href="https://www.casamontjuic.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Casa Montjuïc</a>
                        i
                        <a
                            href="https://elpumarejo.org/en/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >El Pumarejo</a>.
                        A Portland, les seves seleccions s'han escoltat en
                        petits bars i espais underground que orbiten l'escena
                        club de la ciutat.
                    </p>
                    <p>
                        A l'edició més recent de
                        <a
                            href="https://www.meakusma-festival.be/artists-2026/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Meakusma Festival</a>,
                        celebrada en Eupen, Bèlgica, el setembre de 2026, Taki
                        Onqoy va tancar l'escenari Heuboden, dins d'una
                        programació per la qual durant el cap de setmana també
                        van passar Big Hands, Gilb’R, Nosedrip, Lloma Doom, Mr.
                        Clarinet i altres selectors i artistes situats en els
                        marges més oberts del festival. Ja sigui a la ràdio, en
                        un warm-up set o en una sessió més llarga, Taki Onqoy
                        s'acosta a la sala sempre amb el mateix instint: atent
                        al ritme i a la seva dimensió física, però deixant
                        sempre el marge suficient perquè un disc estrany pugui
                        alterar per complet la direcció del que ve després.
                    </p>

                    <section class="selected-sets" aria-labelledby="selected-sets-heading">
                        <h2 id="selected-sets-heading">Sets seleccionats</h2>
                        <ol>
                            <li>
                                <a
                                    href="https://www.kioskradio.com/episode/2026-09-01/foggy-hex-w-taki-onqoy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Taki Onqoy : Foggy Hex @ Kiosk Radio (Staff Pick, setembre 2026)</a>
                            </li>
                            <li>
                                <a
                                    href="https://soundcloud.com/takiononqoy/warm-up-for-pasepartout-duo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Taki Onqoy : Warm-Up per a Passepartout Duo @ Casa Montjuïc (20 juny 2026)</a>
                            </li>
                            <li>
                                <a
                                    href="https://soundcloud.com/takiononqoy/warm-up-set-for-colleens"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Taki Onqoy : Warm-Up per a Colleen @ Casa Montjuïc (26 abril 2026)</a>
                            </li>
                            <li>
                                <a
                                    href="https://www.mixcloud.com/dublabes/pargueland-120118-tupper_4-w-lowtrux-dont-dj/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Taki Onqoy : B2B amb Don’t DJ @ Tupper Festival (12 gener 2018)</a>
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
