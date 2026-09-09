<script setup lang="ts">
const siteUrl = 'https://foggyhexbcn.com'
const pageUrl = `${siteUrl}/taki-onqoy`
const imageUrl = `${siteUrl}/images/taki-onqoy.jpg`

const links = [
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/takiononqoy/',
    },
    {
        label: 'SoundCloud',
        href: 'https://soundcloud.com/takiononqoy',
    },
    {
        label: 'Kiosk Radio',
        href: 'https://www.kioskradio.com/episode/2026-09-01/foggy-hex-w-taki-onqoy',
    },
]

const profileFacts = [
    'Lima-born, Barcelona-based selector',
    'Foggy Hex founder and curator',
    'Host of Outsider on Kiosk Radio',
    'Former host of Pargueland on dublab Barcelona',
]

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
        'Taki Onqoy is the alias of Lima-born, Barcelona-based selector, radio host and Foggy Hex curator Jorge Paez, moving through dub, ethnographic and outernational sounds.',
    ogTitle: 'Taki Onqoy | Barcelona DJ, selector and Foggy Hex curator',
    ogDescription:
        'Profile of Taki Onqoy, the alias of Jorge Paez: Barcelona-based DJ, selector, radio host and founder-curator of Foggy Hex.',
    ogImage: imageUrl,
    ogUrl: pageUrl,
    ogType: 'profile',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Taki Onqoy | Barcelona DJ, selector and curator',
    twitterDescription:
        'Barcelona-based DJ profile for Taki Onqoy, selector Jorge Paez and host of Foggy Hex Outsider on Kiosk Radio.',
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
                'Taki Onqoy, Jorge Paez, Barcelona DJ, Lima selector, Foggy Hex, Kiosk Radio, Paranoise Radio, Tower Of Echo, dublab Barcelona, dub, leftfield electronica, outernational music, future folk, post-club',
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
                        'Taki Onqoy is the alias of Lima-born, Barcelona-based selector, radio host and curator Jorge Paez.',
                    image: imageUrl,
                    inLanguage: 'en',
                    mainEntity: {
                        '@type': 'Person',
                        '@id': `${pageUrl}#taki-onqoy`,
                        name: 'Jorge Paez',
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
        <header class="profile-hero">
            <div class="container mx-auto px-6">
                <nav class="breadcrumb" aria-label="Breadcrumb">
                    <NuxtLink to="/">Foggy Hex</NuxtLink>
                    <span aria-hidden="true">/</span>
                    <span>Taki Onqoy</span>
                </nav>

                <div class="hero-grid">
                    <div class="hero-copy">
                        <p class="kicker">DJ profile</p>
                        <h1>Taki Onqoy</h1>
                        <p class="lede">
                            The alias of Lima-born, Barcelona-based selector,
                            radio host and curator Jorge Páez, moving through
                            dub, ethnographic and outernational sounds,
                            leftfield electronica, future folk and post-club
                            forms.
                        </p>

                        <ul class="fact-list" aria-label="Profile summary">
                            <li v-for="fact in profileFacts" :key="fact">
                                {{ fact }}
                            </li>
                        </ul>
                    </div>

                    <figure class="portrait-frame">
                        <img
                            src="/images/taki-onqoy.jpg"
                            width="1080"
                            height="1440"
                            alt="Black and white portrait of Taki Onqoy, the Barcelona-based DJ and Foggy Hex curator Jorge Páez"
                        />
                        <figcaption>
                            Taki Onqoy, alias of Jorge Páez
                        </figcaption>
                    </figure>
                </div>
            </div>
        </header>

        <section class="profile-section" aria-labelledby="sound-heading">
            <div class="container mx-auto px-6">
                <div class="section-grid">
                    <div class="section-label">
                        <p>Sound</p>
                    </div>
                    <div class="copy-block">
                        <h2 id="sound-heading">Rhythm, Texture, Atmosphere</h2>
                        <p>
                            <a
                                href="https://www.instagram.com/takiononqoy/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Taki Onqoy</a>
                            is the alias of Lima-born, Barcelona-based selector,
                            radio host and curator Jorge Páez. His relationship
                            with music took shape in Lima’s independent
                            underground, playing in bands and making sets in
                            small bars and off-radar spaces before radio and
                            curatorial work became part of the picture. His sets
                            move through dub, ethnographic and outernational
                            sounds, leftfield electronica, future folk and
                            post-club forms, following connections built around
                            rhythm, texture and atmosphere rather than genre.
                            Percussion often sits somewhere in the architecture,
                            alongside low-end pressure, synthetic detail,
                            displaced voices and music whose sense of place is
                            difficult to pin down.
                        </p>
                        <p>
                            Growing up in Perú remains part of that listening
                            sensibility, one influence among many in a practice
                            drawn to music that circulates between traditions,
                            geographies and contemporary electronic forms.
                        </p>

                        <ul class="tag-list" aria-label="Sonic references">
                            <li v-for="marker in sonicMarkers" :key="marker">
                                {{ marker }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="profile-section" aria-labelledby="radio-heading">
            <div class="container mx-auto px-6">
                <div class="section-grid">
                    <div class="section-label">
                        <p>Radio</p>
                    </div>
                    <div class="copy-block">
                        <h2 id="radio-heading">Free-Form Radio Practice</h2>
                        <p>
                            Radio has long been central to that practice. From
                            2017 to 2023, Páez hosted Pargueland, his monthly
                            free-form show on dublab Barcelona, built around
                            personal selections and conversations with local and
                            international artists. His
                            <a
                                href="https://soundcloud.com/takiononqoy"
                                target="_blank"
                                rel="noopener noreferrer"
                            >mixes</a>
                            have also appeared on dublab Los Angeles and
                            Freeform Portland.
                        </p>
                        <p>
                            For nearly three years, he has held an ongoing
                            monthly residency on Paranoise Radio with Tower Of
                            Echo, while since 2025 he has hosted and curated
                            Foggy Hex’s monthly Outsider show on
                            <a
                                href="https://www.kioskradio.com/episode/2026-09-01/foggy-hex-w-taki-onqoy"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Kiosk Radio</a>
                            in Brussels, using the format as another space for
                            unusual affinities, guest artists and music
                            resistant to easy classification.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="profile-section" aria-labelledby="curation-heading">
            <div class="container mx-auto px-6">
                <div class="section-grid">
                    <div class="section-label">
                        <p>Curation</p>
                    </div>
                    <div class="copy-block">
                        <h2 id="curation-heading">Context Around Records</h2>
                        <p>
                            In 2022, Páez founded
                            <NuxtLink to="/">Foggy Hex</NuxtLink>, the
                            Barcelona collective for which he leads the
                            curatorial process, shaping programmes, selecting
                            artists and developing events in close dialogue with
                            musicians, agents and local venues. That work feeds
                            directly back into Taki Onqoy: selection understood
                            not simply as playing records, but as creating
                            context around them.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="profile-section" aria-labelledby="appearances-heading">
            <div class="container mx-auto px-6">
                <div class="section-grid">
                    <div class="section-label">
                        <p>Appearances</p>
                    </div>
                    <div class="copy-block">
                        <h2 id="appearances-heading">Barcelona, Portland, Meakusma</h2>
                        <p>
                            In Barcelona, he has opened for artists including
                            Don’t DJ, Colleen, Céline Gillain, Jeremiah Chiu and
                            Passepartout Duo, with appearances at spaces such as
                            Heliogàbal, NIU and Casa Montjuïc. In Portland, his
                            selections have surfaced at Tiga, Beech Street
                            Parlor and Freeform Portland.
                        </p>
                        <p>
                            In 2026, he closed the Heuboden stage at Meakusma
                            Festival, joining a programme that over the weekend
                            also passed through the hands of Unchained, Gilb’R,
                            Nosedrip, Time Is Away and a wider cast of selectors
                            and artists operating around the festival’s outer
                            edges.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="listen-section" aria-labelledby="listen-heading">
            <div class="container mx-auto px-6">
                <div class="listen-grid">
                    <div>
                        <p class="kicker">Listen and follow</p>
                        <h2 id="listen-heading">Taki Onqoy Online</h2>
                    </div>

                    <div class="link-panel">
                        <a
                            v-for="link in links"
                            :key="link.href"
                            :href="link.href"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>{{ link.label }}</span>
                            <span aria-hidden="true">Open</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="closing-section" aria-label="Approach">
            <div class="container mx-auto px-6">
                <p>
                    Across radio, warm-up sets and longer sessions, Taki Onqoy
                    approaches the room with the same free-form instinct:
                    attentive to pacing and physicality, but always leaving
                    enough space for a strange record to change the direction of
                    everything that follows.
                </p>
            </div>
        </section>
    </article>
</template>

<style scoped>
.profile-page {
    background:
        linear-gradient(90deg, rgba(29, 29, 29, 0.06) 1px, transparent 1px),
        linear-gradient(180deg, #f4f4f1 0%, #ffffff 44%, #f7f7f4 100%);
    background-size:
        96px 100%,
        auto;
}

.profile-hero {
    padding: 36px 0 76px;
    border-bottom: 1px solid currentColor;
}

.breadcrumb {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 34px;
    font-size: 14px;
    letter-spacing: 0;
    text-transform: uppercase;
}

.hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.72fr);
    gap: 48px;
    align-items: end;
}

.hero-copy {
    max-width: 820px;
}

.kicker,
.section-label p,
.portrait-frame figcaption {
    font-family: 'Source Code Pro', monospace;
    letter-spacing: 0;
    text-transform: uppercase;
}

.kicker {
    margin-bottom: 18px;
    font-size: 14px;
}

h1,
h2,
p,
a,
li {
    letter-spacing: 0;
}

h1 {
    max-width: 760px;
    font-size: 92px;
    line-height: 0.9;
}

h2 {
    margin-bottom: 22px;
    font-size: 42px;
    line-height: 1;
}

.lede {
    max-width: 720px;
    margin-top: 28px;
    font-size: 24px;
    line-height: 1.35;
}

.fact-list,
.tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0;
    list-style: none;
}

.fact-list {
    margin-top: 36px;
}

.fact-list li,
.tag-list li {
    border: 1px solid currentColor;
    background: rgba(255, 255, 255, 0.68);
    font-size: 14px;
    line-height: 1.2;
}

.fact-list li {
    padding: 10px 12px;
}

.portrait-frame {
    margin: 0;
}

.portrait-frame img {
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    border: 1px solid currentColor;
    filter: grayscale(100%);
}

.portrait-frame figcaption {
    margin-top: 10px;
    font-size: 12px;
}

.profile-section,
.listen-section,
.closing-section {
    padding: 72px 0;
    border-bottom: 1px solid currentColor;
}

.section-grid {
    display: grid;
    grid-template-columns: 180px minmax(0, 760px);
    gap: 48px;
}

.section-label p {
    position: sticky;
    top: 24px;
    display: inline-block;
    border-top: 1px solid currentColor;
    padding-top: 12px;
    font-size: 13px;
}

.copy-block p {
    margin-bottom: 22px;
    font-size: 18px;
    line-height: 1.75;
}

.copy-block a {
    border-bottom: 1px solid currentColor;
    font-weight: 500;
}

.copy-block a:hover {
    color: #1e25bb;
}

.tag-list {
    margin-top: 30px;
}

.tag-list li {
    padding: 8px 10px;
}

.listen-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.78fr) minmax(320px, 1fr);
    gap: 44px;
    align-items: start;
}

.link-panel {
    display: grid;
    gap: 12px;
}

.link-panel a {
    display: flex;
    min-height: 64px;
    align-items: center;
    justify-content: space-between;
    border: 1px solid currentColor;
    background: #ffffff;
    padding: 16px 18px;
    font-size: 24px;
    transition:
        background 0.2s ease,
        color 0.2s ease;
}

.link-panel a:hover {
    background: #1d1d1d;
    color: #ffffff;
}

.link-panel span:first-child {
    font-family: 'Source Code Pro', monospace;
    font-size: 16px;
    letter-spacing: 0;
    text-transform: uppercase;
}

.link-panel span:last-child {
    font-size: 14px;
    letter-spacing: 0;
}

.closing-section p {
    max-width: 980px;
    font-family: 'Neuton', serif;
    font-size: 44px;
    line-height: 1.08;
    letter-spacing: 0;
}

@media (max-width: 1024px) {
    .hero-grid,
    .listen-grid {
        grid-template-columns: 1fr;
    }

    .portrait-frame {
        max-width: 520px;
    }

    h1 {
        font-size: 72px;
    }
}

@media (max-width: 768px) {
    .profile-hero {
        padding: 24px 0 52px;
    }

    .breadcrumb {
        margin-bottom: 26px;
    }

    .hero-grid {
        gap: 34px;
    }

    h1 {
        font-size: 52px;
    }

    h2 {
        font-size: 34px;
    }

    .lede {
        font-size: 20px;
    }

    .profile-section,
    .listen-section,
    .closing-section {
        padding: 50px 0;
    }

    .section-grid {
        grid-template-columns: 1fr;
        gap: 22px;
    }

    .section-label p {
        position: static;
    }

    .copy-block p {
        font-size: 17px;
    }

    .link-panel a {
        min-height: 58px;
        font-size: 22px;
    }

    .closing-section p {
        font-size: 32px;
    }
}
</style>
