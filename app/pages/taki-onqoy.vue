<script setup lang="ts">
const { siteUrl } = useRuntimeConfig().public

const metadata = getTakiOnqoyProfileMetadata(siteUrl, 'en', {
    "seo": {
        "title": "Taki Onqoy | Barcelona DJ, selector and Foggy Hex curator",
        "description": "Taki Onqoy is the alias of Lima-born, Barcelona-based selector, radio host and Foggy Hex curator Jorge Paez Minaya, moving through dub, ethnographic and outernational sounds.",
        "ogTitle": "Taki Onqoy | Barcelona DJ, selector and Foggy Hex curator",
        "ogDescription": "Profile of Taki Onqoy, the alias of Jorge Paez Minaya: Barcelona-based DJ, selector, radio host and founder-curator of Foggy Hex.",
        "ogLocale": "en_US",
        "twitterTitle": "Taki Onqoy | Barcelona DJ, selector and curator",
        "twitterDescription": "Barcelona-based DJ profile for Taki Onqoy, selector Jorge Paez Minaya and host of Foggy Hex Outsider on Kiosk Radio."
    },
    "keywords": "Taki Onqoy, Jorge Paez Minaya, Barcelona DJ, Lima selector, Foggy Hex, Kiosk Radio, Paranoise Radio, Tower Of Echo, Dublab Barcelona, dub, leftfield electronica, outernational music, future folk, post-club",
    "includeGeoMetadata": false,
    "headline": "Taki Onqoy, Barcelona DJ, selector, radio host and Foggy Hex curator",
    "description": "Taki Onqoy is the alias of Lima-born, Barcelona-based selector, radio host and curator Jorge Paez Minaya.",
    "datePublished": "2026-09-09",
    "dateModified": "2026-09-10",
    "imageCaption": "Black and white portrait of Taki Onqoy, the Barcelona-based DJ and Foggy Hex curator Jorge Paez Minaya.",
    "personName": "Jorge Paez Minaya",
    "birthPlace": "Lima, Peru",
    "jobTitles": [
        "DJ",
        "Selector",
        "Radio host",
        "Curator"
    ],
    "sonicMarkers": [
        "dub",
        "ethnographic sounds",
        "outernational music",
        "leftfield electronica",
        "future folk",
        "post-club forms"
    ],
    "performances": [
        {
            "@type": "RadioSeries",
            "name": "Foggy Hex Outsider",
            "url": "https://www.kioskradio.com/episode/2026-09-01/foggy-hex-w-taki-onqoy"
        },
        {
            "@type": "RadioSeries",
            "name": "Pargueland"
        },
        {
            "@type": "RadioSeries",
            "name": "Tower Of Echo"
        },
        {
            "@type": "RadioSeries",
            "name": "Freeform Portland Radio",
            "url": "https://freeformportland.org/"
        }
    ]
})

useSeoMeta(metadata.seo)
useHead(metadata.head)
</script>

<template>
    <TakiOnqoyProfile
        language="en"
        portrait-alt="Black and white portrait of Taki Onqoy, the Barcelona-based DJ and Foggy Hex curator Jorge Páez Minaya"
        biography-label="Taki Onqoy biography"
        links-label="Taki Onqoy links"
        language-label="Taki Onqoy profile language"
    >
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
                href="https://www.paranoiseradio.com/residents/taki-onqoy"
                target="_blank"
                rel="noopener noreferrer"
            >Paranoise Radio</a>, where he
            hosts and produces "Tower Of Echo" as an extension of his
            work as a selector.
        </p>
        <p>
            In 2022, Taki Onqoy co-founded
            <a
                :href="siteUrl + '/'"
                target="_blank"
                rel="noopener noreferrer"
            >Foggy Hex</a>
            alongside Alec Curtis (NTS Radio), and has since led the
            collective's curatorial process: programming, selecting
            artists and developing events in close dialogue with
            musicians, agents and local venues. The project has also
            extended its reach beyond Barcelona. In 2025,
            <a
                href="https://www.kioskradio.com/label/foggy-hex"
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
                        href="https://www.dublab.com/archive/taki-onqoy-guest-session-10-21-26"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Guest Session @ Dublab L.A. (21 October 2026)</a>
                </li>
                <li>
                    <a
                        href="https://soundcloud.com/studioneau/taki-onqoy-meakusma-festival?in=studioneau/sets/meakusma-festival-2026"
                        target="_blank"
                        rel="noopener noreferrer"
                    >DJ Set @ Meakusma Festival (September 2026)</a>
                </li>
                <li>
                    <a
                        href="https://www.kioskradio.com/episode/2026-09-01/foggy-hex-w-taki-onqoy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Foggy Hex @ Kiosk Radio (Staff Pick, September 2026)</a>
                </li>
                <li>
                    <a
                        href="https://soundcloud.com/takiononqoy/warm-up-for-pasepartout-duo"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Warm-Up for Passepartout Duo @ Casa Montjuïc (20 June 2026)</a>
                </li>
                <li>
                    <a
                        href="https://soundcloud.com/takiononqoy/warm-up-set-for-colleens"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Colleen Warm-Up @ Casa Montjuïc (26 April 2026)</a>
                </li>
                <li>
                    <a
                        href="https://www.mixcloud.com/dublabes/pargueland-120118-tupper_4-w-lowtrux-dont-dj/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >B2B with Don’t DJ @ Tupper Festival (12 January 2018)</a>
                </li>
            </ol>
        </section>
    </TakiOnqoyProfile>
</template>
