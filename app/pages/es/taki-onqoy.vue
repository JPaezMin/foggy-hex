<script setup lang="ts">
const { siteUrl } = useRuntimeConfig().public

const metadata = getTakiOnqoyProfileMetadata(siteUrl, 'es', {
    "seo": {
        "title": "Taki Onqoy | DJ, selector y programador de Foggy Hex en Barcelona",
        "description": "Taki Onqoy es el alias de Jorge Páez Minaya, selector, radio host y programador musical nacido en Lima y afincado en Barcelona.",
        "ogTitle": "Taki Onqoy | DJ, selector y programador de Foggy Hex",
        "ogDescription": "Perfil en español de Taki Onqoy, alias de Jorge Páez Minaya: selector, radio host y programador musical afincado en Barcelona.",
        "ogLocale": "es_ES",
        "twitterTitle": "Taki Onqoy | DJ, selector y programador",
        "twitterDescription": "Perfil de Taki Onqoy, selector nacido en Lima y afincado en Barcelona, cofundador de Foggy Hex."
    },
    "keywords": "Taki Onqoy, Jorge Páez Minaya, DJ Barcelona, selector Lima, Foggy Hex, Kiosk Radio, Paranoise Radio, Tower Of Echo, Dublab Barcelona, dub, electrónica leftfield, sonidos etnográficos, post-club, folclore andino, tradiciones afroperuanas",
    "includeGeoMetadata": true,
    "headline": "Taki Onqoy, DJ, selector, radio host y programador musical afincado en Barcelona",
    "description": "Taki Onqoy es el alias de Jorge Páez Minaya, selector, radio host y programador musical nacido en Lima y afincado en Barcelona.",
    "datePublished": "2026-09-09",
    "dateModified": "2026-09-10",
    "imageCaption": "Retrato en blanco y negro de Taki Onqoy, DJ y programador musical afincado en Barcelona.",
    "personName": "Jorge Páez Minaya",
    "birthPlace": "Lima, Perú",
    "jobTitles": [
        "DJ",
        "Selector",
        "Radio host",
        "Programador musical"
    ],
    "sonicMarkers": [
        "dub",
        "sonidos etnográficos",
        "electrónica leftfield",
        "ritmos post-club",
        "folclore andino",
        "tradiciones afroperuanas"
    ],
    "performances": [
        {
            "@type": "RadioSeries",
            "name": "Foggy Hex Outsiders",
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
            "@type": "MusicEvent",
            "name": "Meakusma Festival 2026",
            "location": {
                "@type": "Place",
                "name": "Eupen, Belgium"
            }
        }
    ]
})

useSeoMeta(metadata.seo)
useHead(metadata.head)
</script>

<template>
    <TakiOnqoyProfile
        language="es"
        portrait-alt="Retrato en blanco y negro de Taki Onqoy, DJ y programador musical afincado en Barcelona"
        biography-label="Biografía de Taki Onqoy"
        links-label="Enlaces de Taki Onqoy"
        language-label="Idioma del perfil de Taki Onqoy"
    >
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
                href="https://www.paranoiseradio.com/residents/taki-onqoy"
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
                :href="siteUrl + '/'"
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
                href="https://www.kioskradio.com/label/foggy-hex"
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
                        href="https://www.dublab.com/archive/taki-onqoy-guest-session-10-21-26"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Sesión invitada @ Dublab L.A. (21 octubre 2026)</a>
                </li>
                <li>
                    <a
                        href="https://soundcloud.com/studioneau/taki-onqoy-meakusma-festival?in=studioneau/sets/meakusma-festival-2026"
                        target="_blank"
                        rel="noopener noreferrer"
                    >DJ Set @ Meakusma Festival (septiembre 2026)</a>
                </li>
                <li>
                    <a
                        href="https://www.kioskradio.com/episode/2026-09-01/foggy-hex-w-taki-onqoy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Foggy Hex @ Kiosk Radio (Staff Pick, septiembre 2026)</a>
                </li>
                <li>
                    <a
                        href="https://soundcloud.com/takiononqoy/warm-up-for-pasepartout-duo"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Warm-Up para Passepartout Duo @ Casa Montjuïc (20 junio 2026)</a>
                </li>
                <li>
                    <a
                        href="https://soundcloud.com/takiononqoy/warm-up-set-for-colleens"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Warm-Up para Colleen @ Casa Montjuïc (26 abril 2026)</a>
                </li>
                <li>
                    <a
                        href="https://www.mixcloud.com/dublabes/pargueland-120118-tupper_4-w-lowtrux-dont-dj/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >B2B con Don’t DJ @ Tupper Festival (12 enero 2018)</a>
                </li>
            </ol>
        </section>
    </TakiOnqoyProfile>
</template>
