export interface TakiOnqoyProfileCopy {
    seo: {
        title: string
        description: string
        ogTitle: string
        ogDescription: string
        ogLocale: string
        twitterTitle: string
        twitterDescription: string
    }
    keywords: string
    includeGeoMetadata: boolean
    headline: string
    description: string
    datePublished: string
    dateModified: string
    imageCaption: string
    personName: string
    birthPlace: string
    jobTitles: string[]
    sonicMarkers: string[]
    performances: {
        '@type': string
        name: string
        url?: string
        location?: { '@type': string; name: string }
    }[]
}
