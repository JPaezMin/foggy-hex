<script setup lang="ts">
const { siteUrl } = useRuntimeConfig().public

const metadata = getTakiOnqoyProfileMetadata(siteUrl, 'ca', {
    "seo": {
        "title": "Taki Onqoy | Selector i programador de Foggy Hex a Barcelona",
        "description": "Taki Onqoy és l’àlies de Jorge Páez Minaya, selector, radio host i programador musical nascut a Lima i establert a Barcelona.",
        "ogTitle": "Taki Onqoy | Selector i programador de Foggy Hex",
        "ogDescription": "Perfil en català de Taki Onqoy, àlies de Jorge Páez Minaya: selector, radio host i programador musical establert a Barcelona.",
        "ogLocale": "ca_ES",
        "twitterTitle": "Taki Onqoy | Selector i programador",
        "twitterDescription": "Perfil de Taki Onqoy, selector nascut a Lima i establert a Barcelona, cofundador de Foggy Hex."
    },
    "keywords": "Taki Onqoy, Jorge Páez Minaya, selector Barcelona, selector Lima, Foggy Hex, Kiosk Radio, Paranoise Radio, Tower Of Echo, Dublab Barcelona, dub, electrònica leftfield, sons etnogràfics, post-club, folklore andí, tradicions afroperuanes",
    "includeGeoMetadata": true,
    "headline": "Taki Onqoy, selector, radio host i programador musical establert a Barcelona",
    "description": "Taki Onqoy és l’àlies de Jorge Páez Minaya, selector, radio host i programador musical nascut a Lima i establert a Barcelona.",
    "datePublished": "2026-09-09",
    "dateModified": "2026-09-12",
    "imageCaption": "Retrat en blanc i negre de Taki Onqoy, selector i programador musical establert a Barcelona.",
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
        "sons etnogràfics",
        "electrònica leftfield",
        "ritmes post-club",
        "folklore andí",
        "tradicions afroperuanes"
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
        language="ca"
        portrait-alt="Retrat en blanc i negre de Taki Onqoy, selector i programador musical establert a Barcelona"
        biography-label="Biografia de Taki Onqoy"
        links-label="Enllaços de Taki Onqoy"
        language-label="Idioma del perfil de Taki Onqoy"
    >
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
                href="https://www.paranoiseradio.com/residents/taki-onqoy"
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
                :href="siteUrl + '/'"
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
                href="https://www.kioskradio.com/label/foggy-hex"
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
                        href="https://www.dublab.com/archive/taki-onqoy-guest-session-10-21-26"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Sessió convidada @ Dublab L.A. (21 octubre 2026)</a>
                </li>
                <li>
                    <a
                        href="https://soundcloud.com/studioneau/taki-onqoy-meakusma-festival?in=studioneau/sets/meakusma-festival-2026"
                        target="_blank"
                        rel="noopener noreferrer"
                    >DJ Set @ Meakusma Festival (setembre 2026)</a>
                </li>
                <li>
                    <a
                        href="https://www.kioskradio.com/episode/2026-09-01/foggy-hex-w-taki-onqoy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Foggy Hex @ Kiosk Radio (Staff Pick, setembre 2026)</a>
                </li>
                <li>
                    <a
                        href="https://soundcloud.com/takiononqoy/warm-up-for-pasepartout-duo"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Warm-Up per a Passepartout Duo @ Casa Montjuïc (20 juny 2026)</a>
                </li>
                <li>
                    <a
                        href="https://soundcloud.com/takiononqoy/warm-up-set-for-colleens"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Warm-Up per a Colleen @ Casa Montjuïc (26 abril 2026)</a>
                </li>
                <li>
                    <a
                        href="https://www.mixcloud.com/dublabes/pargueland-120118-tupper_4-w-lowtrux-dont-dj/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >B2B amb Don’t DJ @ Tupper Festival (12 gener 2018)</a>
                </li>
            </ol>
        </section>
    </TakiOnqoyProfile>
</template>
