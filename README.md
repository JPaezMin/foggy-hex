# Foggy Hex

A Barcelona music collective's website, built with Nuxt 4, Vue 3 and Nuxt Content. It publishes concerts, artist profiles and an archive of past events as a static site.

## Local development

Use Node.js 24.22.3 and npm. Supported Node ranges are recorded in package.json. The committed package-lock.json records the dependency tree.

~~~sh
npm ci
npm run dev
~~~

## Verification

~~~sh
npm run lint
npm run typecheck
npm run generate
~~~

The generated website is written to .output/public.

## Project structure

- app/pages defines public routes.
- app/components contains reusable presentation components, including EventDetail.
- app/layouts/default.vue provides the shared header, footer and page shell.
- app/composables contains reusable Vue composition functions.
- app/types contains reusable application data contracts.
- app/plugins contains client integrations.
- app/assets contains bundled styles and assets.
- content contains concert listings, show details and archive records.
- content.config.ts defines Nuxt Content collections and schemas.
- public contains directly served files, including images, robots.txt and the web manifest.
- scripts contains the static publishing workflow.

Nuxt generates the TypeScript project configurations referenced by tsconfig.json and the ESLint configuration extended by eslint.config.mjs.

## Type placement

Reusable Vue application contracts live in app/types/events.ts and use explicit type-only imports. ArchivedEvent describes archive entries and UpcomingEvent describes processed upcoming listings.

Nuxt Content generates collection types from content.config.ts. Components and utilities import those generated types from @nuxt/content. Component-only prop shapes stay with the component that owns them.

If Nitro API routes later share a contract with the Vue application, place that contract in shared/types. Server-only types belong in server/types. Vue server-side rendering remains part of the application context.

This follows Nuxt's documented type contexts:
https://nuxt.com/docs/4.x/directory-structure/shared#type-only-imports

## Event publishing

Future listings live in content/future and detailed pages in content/shows. The homepage uses the Europe/Madrid date to feature the nearest upcoming event and display expired listings in the archive. Adding content requires a new static build.

## Multi-venue events

Shows using layoutVariant: split-venues define a sessions list in their content file. Each session owns its id, venue, time, optional ticketUrl and note. Session order controls the displayed order.

A session can reference a supporting artist through supportingArtistId, matching that artist's id in bands. supportingArtistAffiliation and supportingArtistRole provide the session-specific caption. Artist images and biographies remain in bands. The first band is the featured artist; shared layout components contain no event-specific venue or artist names. See content/shows/colleen.md for an example.

## Event calendar date

The homepage and event details use useEventCalendarDate() to read a shared, read-only date in YYYY-MM-DD format. Europe/Madrid defines the event calendar regardless of the visitor's timezone.

Nuxt serializes the initial date into its page payload. The browser keeps that value during hydration, then refreshes it on mount, every minute and when the window regains focus. Each caller removes its timer and focus listener when unmounted. Server rendering starts no timers.

The composable supplies the date. Its callers decide whether a show belongs in the upcoming list or archive. A show remains upcoming throughout its calendar day and becomes past the following day. Static HTML can retain the build date until the browser mounts.

Documentation follow-up: promote this SSR and hydration lifecycle into a dedicated architecture document when we expand the event-date refactor.

## Dependency security

The November 2026 security update uses Node 24.22.3, Nuxt 4.6.4, Vue 3.5.46, Nuxt Content 3.17.0 and Nuxt Image 2.2.1. Router, Unhead and Nuxt Scripts were aligned with the updated framework.

The post-update npm audit reports 18 affected packages: 16 moderate and 2 high, with no critical entries. The high entries are Zod and its dependent Nuxt Content package. Content currently requires Zod 3, while the advisory lists its fix in Zod 4.6.6. Other remaining chains involve glob and minimatch in build and lint tooling.

Reassess these advisories as upstream packages update. Forced dependency-major overrides require compatibility verification. The deployed website consists of generated static files; audit severity alone does not establish a reachable production attack path.

Artist images use a centered crop. When stacked, their frames use 4:3 on small screens and 3:2 from 640px. From 1024px, the image column stretches alongside the biography instead of enforcing a landscape ratio; the image fills the space above its optional imageCredit. All artists follow the same layout rules.

## Biography HTML

ArtistBiography is the rendering boundary for artist biography HTML. It filters content through sanitizeArtistBiography on both server and client, allowing paragraphs, emphasis, lists and links. Scripts, event handlers, embedded content and unsafe URL schemes are removed. Biography links open in another tab with noopener and noreferrer.

The component contains the single, narrowly scoped vue/no-v-html exception. Pass raw biography content through this component so the sanitizer runs before insertion.

## Production

Source code lives on main. The deploy branch contains the generated static website.

After committing and pushing approved source changes, run:

~~~sh
npm run deploy:static -- -Message "Deploy approved changes"
~~~

The publishing script builds the site, updates and pushes deploy, then returns to main. cPanel must pull that branch and deploy its HEAD commit to update the public website.
