<script setup lang="ts">
const siteUrl = 'https://foggyhexbcn.com'
const pageUrl = `${siteUrl}/taki-onqoy`
const spanishPageUrl = `${siteUrl}/es/taki-onqoy`
const catalanPageUrl = `${siteUrl}/cat/taki-onqoy`
const imageUrl = `${siteUrl}/images/taki-onqoy.jpg`

const sonicMarkers = [
    'dub',
    'ethnographic sounds',
    'outernational music',
    'leftfield electronica',
    'future folk',
    'post-club forms',
]

useSeoMeta({
    title: 'Taki Onqoy | Barcelona DJ, selector and Foggy Hex curator',
    description:
        'Taki Onqoy is the alias of Lima-born, Barcelona-based selector, radio host and Foggy Hex curator Jorge Paez Minaya, moving through dub, ethnographic and outernational sounds.',
    ogTitle: 'Taki Onqoy | Barcelona DJ, selector and Foggy Hex curator',
    ogDescription:
        'Profile of Taki Onqoy, the alias of Jorge Paez Minaya: Barcelona-based DJ, selector, radio host and founder-curator of Foggy Hex.',
    ogImage: imageUrl,
    ogUrl: pageUrl,
    ogType: 'profile',
    ogLocale: 'en_US',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Taki Onqoy | Barcelona DJ, selector and curator',
    twitterDescription:
        'Barcelona-based DJ profile for Taki Onqoy, selector Jorge Paez Minaya and host of Foggy Hex Outsider on Kiosk Radio.',
    twitterImage: imageUrl,
})

useHead({
    htmlAttrs: {
        lang: 'en',
    },
    link: [
        {
            rel: 'canonical',
            href: pageUrl,
        },
        {
            rel: 'alternate',
            hreflang: 'en',
            href: pageUrl,
        },
        {
            rel: 'alternate',
            hreflang: 'es',
            href: spanishPageUrl,
        },
        {
            rel: 'alternate',
            hreflang: 'ca',
            href: catalanPageUrl,
        },
        {
            rel: 'alternate',
            hreflang: 'x-default',
            href: pageUrl,
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
                'Taki Onqoy, Jorge Paez Minaya, Barcelona DJ, Lima selector, Foggy Hex, Kiosk Radio, Paranoise Radio, Tower Of Echo, Dublab Barcelona, dub, leftfield electronica, outernational music, future folk, post-club',
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
                        'Taki Onqoy, Barcelona DJ, selector, radio host and Foggy Hex curator',
                    description:
                        'Taki Onqoy is the alias of Lima-born, Barcelona-based selector, radio host and curator Jorge Paez Minaya.',
                    image: imageUrl,
                    inLanguage: 'en',
                    datePublished: '2026-09-09',
                    dateModified: '2026-09-10',
                    primaryImageOfPage: {
                        '@type': 'ImageObject',
                        url: imageUrl,
                        contentUrl: imageUrl,
                        width: 1080,
                        height: 1440,
                        caption:
                            'Black and white portrait of Taki Onqoy, the Barcelona-based DJ and Foggy Hex curator Jorge Paez Minaya.',
                        representativeOfPage: true,
                    },
                    mainEntity: {
                        '@type': 'Person',
                        '@id': `${pageUrl}#taki-onqoy`,
                        name: 'Jorge Paez Minaya',
                        alternateName: 'Taki Onqoy',
                        birthPlace: {
                            '@type': 'Place',
                            name: 'Lima, Peru',
                        },
                        homeLocation: {
                            '@type': 'City',
                            name: 'Barcelona',
                        },
                        jobTitle: [
                            'DJ',
                            'Selector',
                            'Radio host',
                            'Curator',
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
                                name: 'Foggy Hex Outsider',
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
                                '@type': 'RadioSeries',
                                name: 'Freeform Portland Radio',
                                url: 'https://freeformportland.org/',
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
                        alt="Black and white portrait of Taki Onqoy, the Barcelona-based DJ and Foggy Hex curator Jorge Páez Minaya"
                    />
                </figure>

                <section class="bio-copy" aria-label="Taki Onqoy biography">
                    <h1 class="sr-only">Taki Onqoy</h1>
                    <nav class="bio-links" aria-label="Taki Onqoy links">
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
                        aria-label="Taki Onqoy profile language"
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
                        >CAT</NuxtLink>
                        <NuxtLink
                            to="/taki-onqoy"
                            hreflang="en"
                            lang="en"
                            aria-current="page"
                        >EN</NuxtLink>
                    </nav>
                    <p>
                        <a
                            href="https://www.instagram.com/takiononqoy/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Taki Onqoy</a>
                        is the alias of Lima-born, Barcelona-based selector,
                        radio host and curator Jorge Páez Minaya. His relationship
                        with music took shape in Lima’s independent underground,
                        playing in bands and playing sets in small bars and
                        off-radar spaces before radio and curatorial work became
                        part of the picture. His DJ sets connect dub, ethnographic
                        and outernational sounds with leftfield electronica and
                        post-club rhythms, following connections built around
                        texture, atmosphere and movement rather than genre.
                        Andean folk and Afro-Peruvian traditions quietly inform
                        the way Páez selects and sequences tracks, surfacing
                        through cadence, repetition and rhythmic instinct rather
                        than direct reference.
                    </p>
                    <p>
                        Radio has long been central to that practice. From 2017
                        to 2023, Páez hosted "Pargueland", a monthly free-form
                        show on Dublab Barcelona, built around personal
                        selections and interviews with local and
                        international artists. His mixes have also appeared on
                        <a
                            href="https://www.dublab.com/archive/jorge-paez-guest-dj-set-04-24-19"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Dublab L.A</a>
                        and
                        <a
                            href="https://freeformportland.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Freeform Portland</a>.
                        For nearly three years, he has held an ongoing monthly
                        residency on Thessaloniki's
                        <a
                            href="https://gate.sc/?url=https%3A%2F%2Fwww.paranoiseradio.com%2Fresidents%2Ftaki-onqoy&token=5d6706-1-1788960584942"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Paranoise Radio</a>, where he
                        hosts and produces "Tower Of Echo" as an extension of his
                        work as a selector.
                    </p>
                    <p>
                        In 2022, Taki Onqoy co-founded
                        <a
                            href="https://foggyhexbcn.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Foggy Hex</a>
                        alongside Alec Curtis (NTS Radio), and has since led the
                        collective's curatorial process: programming, selecting
                        artists and developing events in close dialogue with
                        musicians, agents and local venues. The project has also
                        extended its reach beyond Barcelona. In 2025,
                        <a
                            href="https://gate.sc/?url=https%3A%2F%2Fkioskradio.com%2Flabel%2Ffoggy-hex&token=4982fd-1-1788960584942"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Kiosk Radio</a>
                        invited Foggy Hex to join its Outsiders programme with
                        a monthly residency on the Brussels station, curated and produced by Taki
                        Onqoy. That work feeds naturally back into his own
                        practice, with selection understood not simply as playing
                        records, but as creating the right context for them.
                    </p>
                    <p>
                        In Barcelona, he has opened for artists including Ana
                        Roxanne, Colleen, Céline Gillain, Jeremiah Chiu and
                        Passepartout Duo, moving through the city's network of
                        independent and leftfield music spaces, including
                        <a
                            href="https://www.casamontjuic.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Casa Montjuïc</a>
                        and
                        <a
                            href="https://elpumarejo.org/en/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >El Pumarejo</a>.
                        In Portland, his selections have found their way into
                        the small bars and underground spaces orbiting the
                        city's club-adjacent scene.
                        At the most recent edition of
                        <a
                            href="https://www.meakusma-festival.be/artists-2026/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Meakusma Festival</a>,
                        held in Eupen, Belgium in September 2026, Taki Onqoy
                        closed the Heuboden stage, as part of a weekend
                        programme that also featured Big Hands, Gilb'R,
                        Nosedrip, Loma Doom, Mr. Clarinet and other selectors
                        and artists working around the festival's outer edges.
                    </p>
                    <p>
                        Across radio, warm-up sets and longer sessions, Taki
                        Onqoy approaches the room with the same free-form
                        instinct: attentive to pacing and physicality, but
                        always leaving enough space for a strange record to
                        change the direction of everything that follows.
                    </p>

                    <section class="selected-sets" aria-labelledby="selected-sets-heading">
                        <h2 id="selected-sets-heading">Selected sets</h2>
                        <ol>
                            <li>
                                <a
                                    href="https://www.kioskradio.com/episode/2026-09-01/foggy-hex-w-taki-onqoy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Taki Onqoy : Foggy Hex @ Kiosk Radio (Staff Pick, September 2026)</a>
                            </li>
                            <li>
                                <a
                                    href="https://soundcloud.com/takiononqoy/warm-up-for-pasepartout-duo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Taki Onqoy : Warm-Up for Passepartout Duo @ Casa Montjuïc (20 June 2026)</a>
                            </li>
                            <li>
                                <a
                                    href="https://soundcloud.com/takiononqoy/warm-up-set-for-colleens"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Taki Onqoy : Colleen Warm-Up @ Casa Montjuïc (26 April 2026)</a>
                            </li>
                            <li>
                                <a
                                    href="https://www.mixcloud.com/dublabes/pargueland-120118-tupper_4-w-lowtrux-dont-dj/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Taki Onqoy : B2B with Don’t DJ @ Tupper Festival (12 January 2018)</a>
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
