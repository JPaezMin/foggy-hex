# Event publishing and date rollover

Foggy Hex publishes complete concerts. One show record supplies its upcoming presentation, detail page and eventual archive card. Dates change where the show appears; they do not require a second copy of its content.

## The visitor journey

1. A published future show appears on the homepage, with a link to its complete details.
2. The nearest show is featured; up to two additional shows appear as upcoming cards. The homepage currently selects this limit explicitly.
3. The show remains upcoming throughout its concert day in Barcelona.
4. On the following calendar day, it appears in the archive and retains its detail page.
5. When no future shows remain, the upcoming section is hidden.

The rollover boundary is midnight in Europe/Madrid, rather than the concert's doors or start time. For example, a concert on 30 January 2027 remains upcoming that day and becomes archived on 31 January.

## Content ownership

[content/shows](../content/shows) contains complete concerts. A record owns its date, venue, ticket information, card image, artist biographies and any venue sessions. Adding or editing that record requires generation and deployment before visitors receive the new content.

Optional listingTitle, archiveTitle and archiveVenue express intentional differences in presentation. They belong in the same record as the event facts. They are not separate publication states.

[content/past](../content/past) preserves older historical cards without full detail pages. These cards do not receive a details link. A complete show does not need a duplicate historical file.

Multi-venue shows define their sessions in content and reference supporting artists by identifier. Components render these values without knowing specific venue or artist names.

## Responsibility boundaries

| Owner | Responsibility |
| --- | --- |
| [show schema](../shared/schemas/show.ts) | Defines the structure and required fields of complete shows. |
| [eventDates](../app/utils/eventDates.ts) | Parses and formats calendar dates without tracking changing application state. |
| [useEventCalendarDate](../app/composables/useEventCalendarDate.ts) | Supplies the current Madrid calendar date and manages browser refresh listeners. |
| [eventListings](../app/utils/eventListings.ts) | Derives ordered upcoming and archived lists from content and a supplied calendar date. |
| [homepage](../app/pages/index.vue) | Loads summary fields and historical cards, then renders those derived lists. |
| [FeaturedEvent](../app/components/FeaturedEvent.vue) | Presents the selected nearest concert in its own labelled section, with its poster, timing and ticket/detail links. |
| [UpcomingEvents](../app/components/UpcomingEvents.vue) | Displays the remaining selected concerts as cards in a separate labelled section and hides itself when empty. |
| [EventArchive](../app/components/EventArchive.vue) | Groups archived events by year and renders archive cards and their year anchors. |
| [eventPageMetadata](../app/utils/eventPageMetadata.ts) | Formats one show's search metadata, social previews and structured event data without loading content or using Vue state. |
| [detail route](../app/pages/events/[slug].vue) | Loads one complete show, handles loading errors and missing records, and registers its metadata and detail view. |

The homepage renders FeaturedEvent only when a nearest concert exists. UpcomingEvents independently renders when its list is nonempty. Their section titles use h2; individual concert names use h3. The homepage controls spacing between the sections without a shared conditional wrapper.

The homepage selects summary fields so artist biographies are not included in its page payload. EventSummary is a TypeScript selection of show fields, not another content record.

The utilities accept a date supplied by their caller. They do not read a hidden clock or start timers. This makes the classification rules usable independently of Vue and suitable for later Vitest coverage.

## Rendering and browser updates

During static generation, Nuxt renders pages using the current Madrid date. That initial date is included in the page data.

When the browser takes control of the rendered page, it initially uses the same date. This keeps the first browser render consistent with the generated HTML. Once the caller is mounted, useEventCalendarDate refreshes the date, checks it every minute and refreshes when the window regains focus.

The caller removes its timer and focus listener when unmounted. Server rendering starts neither. A background browser tab may delay timers; the focus refresh catches up when the visitor returns.

Calendar dates use UTC internally for comparison and display stability. This is a representation of a calendar day, not a claim that the concert starts at midnight UTC.

## Static deployment limits

Browser rollover changes the displayed lists using content already shipped with the site. It does not move Markdown files, discover unpublished content or rewrite deployed HTML.

A visitor with JavaScript disabled continues to see the generated snapshot. The deployed HTML can also retain a previous build's classification after midnight. Rebuild and deploy to refresh that snapshot; browser rollover alone does not keep it current for every reader or crawler.

There is currently no scheduled rebuild or dedicated content-validation gate. Vitest installation and its publication checks are deferred. The shared schema remains the definition of the content contract.

## Local review

Run npm run dev for live source changes. To inspect the generated website, run npm run generate and npm run preview, then open http://127.0.0.1:4320. Generate again after source edits to update that preview.
