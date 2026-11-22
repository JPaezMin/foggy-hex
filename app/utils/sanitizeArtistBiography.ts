import sanitizeHtml from 'sanitize-html'

// Preserves biography formatting while removing executable markup and unsafe links.
export function sanitizeArtistBiography(html: string): string {
    return sanitizeHtml(html, {
        allowedTags: ['p', 'br', 'em', 'i', 'strong', 'b', 'a', 'ul', 'ol', 'li', 'blockquote'],
        allowedAttributes: {
            a: ['href', 'target', 'rel'],
        },
        allowedSchemes: ['http', 'https', 'mailto'],
        allowProtocolRelative: false,
        transformTags: {
            a: (_tagName, attributes) => ({
                tagName: 'a',
                attribs: {
                    href: attributes.href ?? '',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                },
            }),
        },
    })
}
