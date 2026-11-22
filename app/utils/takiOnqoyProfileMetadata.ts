import { takiOnqoyImage, takiOnqoyLinks, takiOnqoyRoutes } from '~/data/takiOnqoy'
import type { TakiOnqoyProfileCopy } from '~/types/profile'

export function getTakiOnqoyProfileMetadata(
    siteUrl: string,
    language: keyof typeof takiOnqoyRoutes,
    copy: TakiOnqoyProfileCopy,
) {
    const pageUrl = `${siteUrl}${takiOnqoyRoutes[language]}`
    const imageUrl = `${siteUrl}${takiOnqoyImage}`
    const languageOrder = language === 'es' ? ['es', 'en', 'ca'] as const
        : language === 'ca' ? ['ca', 'es', 'en'] as const : ['en', 'es', 'ca'] as const
    const structuredData = [{
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        '@id': `${pageUrl}#profile`,
        url: pageUrl,
        name: 'Taki Onqoy',
        headline: copy.headline,
        description: copy.description,
        image: imageUrl,
        inLanguage: language,
        datePublished: copy.datePublished,
        dateModified: copy.dateModified,
        primaryImageOfPage: {
            '@type': 'ImageObject', url: imageUrl, contentUrl: imageUrl,
            width: 1080, height: 1440, caption: copy.imageCaption, representativeOfPage: true,
        },
        mainEntity: {
            '@type': 'Person',
            '@id': `${siteUrl}${takiOnqoyRoutes.en}#taki-onqoy`,
            name: copy.personName,
            alternateName: 'Taki Onqoy',
            birthPlace: { '@type': 'Place', name: copy.birthPlace },
            homeLocation: { '@type': 'City', name: 'Barcelona' },
            jobTitle: copy.jobTitles,
            image: imageUrl,
            url: pageUrl,
            sameAs: takiOnqoyLinks,
            memberOf: { '@type': 'Organization', name: 'Foggy Hex', url: siteUrl },
            knowsAbout: copy.sonicMarkers,
            performerIn: copy.performances,
        },
    }, {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Foggy Hex', item: siteUrl },
            { '@type': 'ListItem', position: 2, name: 'Taki Onqoy', item: pageUrl },
        ],
    }]

    return {
        seo: {
            ...copy.seo, ogImage: imageUrl, ogUrl: pageUrl, ogType: 'profile' as const,
            twitterCard: 'summary_large_image' as const, twitterImage: imageUrl,
        },
        head: {
            htmlAttrs: { lang: language },
            link: [
                { rel: 'canonical' as const, href: pageUrl },
                ...languageOrder.map(hreflang => ({ rel: 'alternate' as const, hreflang, href: `${siteUrl}${takiOnqoyRoutes[hreflang]}` })),
                { rel: 'alternate' as const, hreflang: 'x-default', href: `${siteUrl}${takiOnqoyRoutes.en}` },
                { rel: 'preload' as const, as: 'image' as const, href: takiOnqoyImage },
            ],
            meta: [
                { name: 'keywords', content: copy.keywords },
                ...(copy.includeGeoMetadata ? [
                    { name: 'geo.region', content: 'ES-CT' },
                    { name: 'geo.placename', content: 'Barcelona' },
                ] : []),
            ],
            script: [{ type: 'application/ld+json' as const, innerHTML: JSON.stringify(structuredData) }],
        },
    }
}
