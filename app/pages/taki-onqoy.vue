<script setup lang="ts">
const siteUrl = 'https://foggyhexbcn.com'
const pageUrl = `${siteUrl}/taki-onqoy`
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
            rel: 'preload',
            as: 'image',
            href: '/images/taki-onqoy.jpg',
        },
    ],
    meta: [
        {
            name: 'keywords',
            content:
                'Taki Onqoy, Jorge Paez Minaya, Barcelona DJ, Lima selector, Foggy Hex, Kiosk Radio, Paranoise Radio, Tower Of Echo, dublab Barcelona, dub, leftfield electronica, outernational music, future folk, post-club',
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
                            'https://gate.sc/?url=https%3A%2F%2Fkioskradio.com%2Flabel%2Ffoggy-hex&token=4982fd-1-1788960584942',
                            'https://gate.sc/?url=https%3A%2F%2Fwww.paranoiseradio.com%2Fresidents%2Ftaki-onqoy&token=5d6706-1-1788960584942',
                            'https://gate.sc/?url=https%3A%2F%2Fwww.dublab.cat%2Farxiu%2Fpargueland&token=200ac0-1-1788960584942',
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
                            href="https://gate.sc/?url=https%3A%2F%2Fwww.dublab.cat%2Farxiu%2Fpargueland&token=200ac0-1-1788960584942"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Dublab BCN</a>
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
                        playing in bands and making sets in small bars and
                        off-radar spaces before radio and curatorial work became
                        part of the picture. His sets move through dub,
                        ethnographic and outernational sounds, leftfield
                        electronica, future folk and post-club forms, following
                        connections built around rhythm, texture and atmosphere
                        rather than genre. Percussion often sits somewhere in
                        the architecture, alongside low-end pressure, synthetic
                        detail, displaced voices and music whose sense of place
                        is difficult to pin down. Growing up in Perú remains
                        part of that listening sensibility, one influence among
                        many in a practice drawn to music that circulates
                        between traditions, geographies and contemporary
                        electronic forms.
                    </p>
                    <p>
                        Radio has long been central to that practice. From 2017
                        to 2023, Páez hosted Pargueland, his monthly free-form
                        show on dublab Barcelona, built around personal
                        selections and conversations with local and
                        international artists. His
                        <a
                            href="https://soundcloud.com/takiononqoy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >mixes</a>
                        have also appeared on
                        <a
                            href="https://www.dublab.com/archive/jorge-paez-guest-dj-set-04-24-19"
                            target="_blank"
                            rel="noopener noreferrer"
                        >dublab Los Angeles</a>
                        and
                        <a
                            href="https://freeformportland.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Freeform Portland</a>.
                        For nearly three years, he has held an ongoing monthly
                        residency on Thessaloniki’s Paranoise Radio with Tower
                        Of Echo, while since 2025 he has hosted and curated
                        Foggy Hex’s monthly Outsider show on
                        <a
                            href="https://www.kioskradio.com/episode/2026-09-01/foggy-hex-w-taki-onqoy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Kiosk Radio</a>
                        in Brussels, using the format as another space for
                        unusual affinities, guest artists and music resistant to
                        easy classification.
                    </p>
                    <p>
                        In 2022, Páez co-founded Foggy Hex alongside Alec Curtis
                        (NTS Radio), and leads the collective’s curatorial
                        process, shaping programmes, selecting artists and
                        developing events in close dialogue with musicians,
                        agents and local venues. That work feeds directly back
                        into Taki Onqoy: selection understood not simply as
                        playing records, but as creating context around them.
                    </p>
                    <p>
                        In Barcelona, he has opened for artists including Don’t
                        DJ, Colleen, Céline Gillain, Jeremiah Chiu and
                        Passepartout Duo, with appearances at spaces such as
                        Heliogàbal, NIU and Casa Montjuïc. In Portland, his
                        selections have surfaced at Tiga, Beech Street Parlor
                        and
                        <a
                            href="https://freeformportland.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Freeform Portland</a>.
                        At the most recent edition of Meakusma Festival in
                        September 2026, he closed the Heuboden stage, joining a
                        programme that over the weekend also passed through the
                        hands of Unchained, Gilb’R, Nosedrip, Time Is Away and a
                        wider cast of selectors and artists operating around the
                        festival’s outer edges.
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
                                >Taki Onqoy : Warm-Up for Colleen’s <em>Libres Antes del Final</em> Release Show @ Casa Montjuïc</a>
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
    overflow-wrap: anywhere;
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
