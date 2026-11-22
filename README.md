# Foggy Hex

A Barcelona music collective's website, built with Nuxt 4, Vue 3 and Nuxt Content. It publishes concerts, artist profiles and an archive of past events as a static site. Nuxt renders the pages during generation; the browser then adds navigation and date-based event updates. Production does not require a running Nuxt server.

## Local development

Use Node.js 24.22.3 and npm. Supported Node ranges are recorded in package.json. The committed package-lock.json records the dependency tree.

~~~sh
npm ci
npm run dev
~~~

## Editor setup

Open this repository folder in VS Code, rather than its parent directory or an individual file. Install the recommended extensions from [.vscode/extensions.json](.vscode/extensions.json). Vue Official handles Vue and Nuxt code; disable Vetur for this workspace to avoid conflicting diagnostics. The workspace uses the TypeScript version installed with the project.

Run npm ci before investigating missing Nuxt auto-imports on a fresh checkout: its postinstall step prepares Nuxt's generated configuration. Generated files are not source files and should not be edited manually.

## Verification

~~~sh
npm run lint
npm run typecheck
npm run generate
~~~

GitHub Actions runs these checks after a push to main and for pull requests targeting main. The workflow installs locked dependencies with npm ci on Node.js 24.22.3, then runs lint, type checking and static generation. It can also be started manually from the Actions tab. It does not deploy the website. Vitest checks remain deferred. Repository branch protection must be configured separately to require a passing result before merging.

The generated website is written to .output/public. Nuxt Content also generates a local SQLite cache in .data; both directories are ignored by Git. Commit the Markdown content, not these generated files.

To review the generated static website locally:

~~~sh
npm run generate
npm run preview
~~~

Open http://127.0.0.1:4320. Preview serves .output/public directly through serve, without starting Nuxt or requiring server build files. Re-run generation to see source changes; use npm run dev for live development. The preview tool is a direct development dependency so its version is recorded in package-lock.json.

## Project structure

- app/pages defines public routes.
- app/components contains reusable presentation components, including EventDetail.
- app/layouts/default.vue provides the shared header, footer and page shell.
- app/composables contains reusable Vue composition functions.
- app/utils contains functions that prepare data without managing Vue state.
- app/data contains shared profile facts, image paths and language routes.
- app/types contains reusable application data contracts.
- app/plugins contains client integrations.
- app/assets contains bundled styles and assets.
- content contains concert listings, show details and archive records.
- content.config.ts defines Nuxt Content collections and schemas.
- public contains directly served files, including images, robots.txt and the web manifest.
- shared/schemas defines the complete-show content contract.
- scripts contains the static publishing workflow.
- .github/workflows defines automated repository verification.
- docs explains architectural decisions and the event lifecycle.

Nuxt generates the TypeScript project configurations referenced by tsconfig.json and the ESLint configuration extended by eslint.config.mjs.

## Type placement

Reusable Vue application contracts live in app/types and use explicit type-only imports. Event contracts are in events.ts; translated profile metadata uses profile.ts. EventSummary selects listing fields from the generated show type; it is a view of the same record, not a second content source. ArchivedEvent describes archive entries and UpcomingEvent describes processed upcoming listings.

Nuxt Content generates collection types from content.config.ts. Components and utilities import those generated types from @nuxt/content. Component-only prop shapes stay with the component that owns them.

If Nitro API routes later share a contract with the Vue application, place that contract in shared/types. Server-only types belong in server/types. Vue server-side rendering remains part of the application context.

This follows Nuxt's documented type contexts:
https://nuxt.com/docs/4.x/directory-structure/shared#type-only-imports

## Artist profile pages

The English, Spanish and Catalan Taki Onqoy routes own their translated biographies, accessibility labels and search-preview wording. [TakiOnqoyProfile](app/components/TakiOnqoyProfile.vue) owns the shared portrait, navigation, responsive layout and styles. It receives the translated biography through a slot, so paragraphs and inline links remain readable in each route.

[Shared profile data](app/data/takiOnqoy.ts) defines the portrait path, language routes and identity links used in structured data. [takiOnqoyProfileMetadata](app/utils/takiOnqoyProfileMetadata.ts) prepares the common metadata structure from each route's translated values. The route registers that result with Nuxt. Intentional language differences, including listed appearances and modification dates, remain explicit.

Change shared presentation in the component; change translated copy in its route. This separation avoids maintaining three copies of the same design without adding a translation framework.

## Public site address

nuxt.config.ts defines the canonical site address once and exposes it as runtimeConfig.public.siteUrl. Pages and the shared layout read it through useRuntimeConfig; eventPageMetadata receives it as an argument. Local previews continue to describe the public website in sharing metadata. Rebuild and deploy after changing this setting.

## Event publishing

Each complete concert lives once in content/shows. That record supplies the upcoming card, detail page and archive card. Adding it announces the show and makes its details available together; no second announcement file or detailsPublic switch is needed. Dates in the Europe/Madrid calendar determine whether it is upcoming or archived. Adding content requires a new static build.

Show records require a title, date, time, venue, card image and at least one artist with a name, image and biography. Optional listingTitle, archiveTitle and archiveVenue preserve intentional wording differences between presentations, while featuredPoster selects the homepage poster. Keep these fields in the same show record.

The homepage selects only listing fields from shows, keeping artist biographies out of its page payload.

The show schema remains in shared/schemas/show.ts. Vitest installation, validation tests and a required pre-publication test step are deferred. There is currently no separate complete-show validation command or build gate.

content/past holds older card-only history without detail pages. Do not add a second archive file for a complete show: it enters the archive automatically after its calendar day.

## Multi-venue events

Shows using layoutVariant: split-venues define a sessions list in their content file. Each session owns its id, venue, time, optional ticketUrl and note. Session order controls the displayed order.

A session can reference a supporting artist through supportingArtistId, matching that artist's id in bands. supportingArtistAffiliation and supportingArtistRole provide the session-specific caption. Artist images and biographies remain in bands. The first band is the featured artist; shared layout components contain no event-specific venue or artist names. See content/shows/colleen.md for an example.

## Event calendar date

The homepage and event details use useEventCalendarDate() to read a shared, read-only date in YYYY-MM-DD format. Europe/Madrid defines the event calendar regardless of the visitor's timezone.

Nuxt serializes the initial date into its page payload. The browser keeps that value during hydration, then refreshes it on mount, every minute and when the window regains focus. Each caller removes its timer and focus listener when unmounted. Server rendering starts no timers.

The composable supplies the date. Its callers decide whether a show belongs in the upcoming list or archive. A show remains upcoming throughout its calendar day and becomes past the following day. Static HTML can retain the build date until the browser mounts.

See [Event publishing and date rollover](docs/event-lifecycle.md) for the visitor journey, responsibility boundaries, hydration behavior and static deployment limits.

## Event dates for search engines

formatEventStartDate produces a validated ISO calendar date and optional local start time for event structured data. It deliberately omits a fixed UTC offset: Google interprets local times using the physical event location, allowing Barcelona's winter and summer time to apply. Unknown or invalid times produce a date only; invalid dates are omitted.

This follows Google's event date guidance: https://developers.google.com/search/docs/appearance/structured-data/event#date-time-best-practices

## Dependency security

The November 2026 security update uses Node 24.22.3, Nuxt 4.6.4, Vue 3.5.46, Nuxt Content 3.17.0 and Nuxt Image 2.2.1. Router, Unhead and Nuxt Scripts were aligned with the updated framework.

The recorded post-update npm audit snapshot contained 18 affected packages: 16 moderate and 2 high, with no critical entries. The high entries are Zod and its dependent Nuxt Content package. Content currently requires Zod 3, while the advisory lists its fix in Zod 4.6.6. Other remaining chains involve glob and minimatch in build and lint tooling.

Reassess these advisories as upstream packages update. Forced dependency-major overrides require compatibility verification. The deployed website consists of generated static files; audit severity alone does not establish a reachable production attack path.

## Artist image layouts

Standard event biographies use a centered crop. When stacked, their frames use 4:3 on small screens and 3:2 from 640px. From 1024px, the image column stretches alongside the biography; the image fills the space above its optional imageCredit. A photo credit does not choose the image shape.

Split-venue events have a separate presentation in EventDetail. The featured image uses 4:3; portrait screens from 1024px place it beside the biography, while landscape screens stack it above the biography. Supporting artists use 4:3 images. Changes to standard artist layouts do not automatically change this variant.

## Biography HTML

ArtistBiography is the rendering boundary for artist biography HTML. It filters content through sanitizeArtistBiography on both server and client, allowing paragraphs, emphasis, lists and links. Scripts, event handlers, embedded content and unsafe URL schemes are removed. Biography links open in another tab with noopener and noreferrer.

The component contains the single, narrowly scoped vue/no-v-html exception. Pass raw biography content through this component so the sanitizer runs before insertion.

## Verification limits

Lint and type checks catch certain code mistakes; static generation checks that the site can be built. They do not prove that event rollover, archive deduplication, biography sanitization or artist-session references behave correctly. Vitest coverage and a required content-publication check remain planned, not implemented.

The GitHub workflow runs only after it reaches the remote repository. A passing check does not itself prevent merging unless branch protection requires it. Responsive appearance, keyboard navigation and external links also need review when their behaviour changes.

## Production

Source code lives on main. The deploy branch contains the generated static website.

After committing and pushing approved source changes, run:

~~~sh
npm run deploy:static -- -Message "Deploy approved changes"
~~~

The publishing script requires a clean main matching origin/main and a local deploy branch containing origin/deploy. It fetches both remote branches before building, updates deploy, and pushes even when the generated files are unchanged, allowing an earlier failed push to be retried. It then returns to main; a failed return is reported as an error. If copying or committing fails, inspect git status before retrying; the script does not discard unfinished changes. cPanel must pull that branch and deploy its HEAD commit to update the public website.
