import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import vm from 'node:vm'
import ts from 'typescript'
import { computed, ref } from 'vue'

const page = readFileSync(new URL('../app/pages/index.vue', import.meta.url), 'utf8')
const script = page.match(/<script setup lang="ts">([\s\S]*?)<\/script>/)[1]
const source = ts.transpileModule(script, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ES2022 },
}).outputText.replace(/export \{\};?/, '')

async function homepage(renderedDay, instant) {
    const mounted = []
    const intervals = []
    const future = [
        { slug: 'ben-bertrand', title: 'Ben Bertrand', date: '2026-10-31', image: '/ben.jpg', featuredPoster: '/ben-poster.jpg' },
        { slug: 'les-halles', title: 'Les Halles', date: '2026-12-04', image: '/les-halles.jpg' },
    ]
    let now = instant
    const context = vm.createContext({
        computed, ref,
        Date: class extends Date {
            constructor(...args) { super(...(args.length ? args : [now])) }
        },
        Intl,
        useState: () => ref(renderedDay),
        useSeoMeta: () => {},
        onMounted: (fn) => mounted.push(fn),
        onUnmounted: () => {},
        setInterval: (fn) => intervals.push(fn),
        clearInterval: () => {},
        useAsyncData: async (_key, fn) => ({ data: ref(await fn()) }),
        queryCollection: (collection) => ({ order: () => ({ all: async () => collection === 'future' ? future : [] }) }),
    })
    const state = await vm.runInContext(`(async () => { ${source}
        return { futureGridEvents, archivedEvents, upcomingEventPath, upcomingFeaturedPoster };
    })()`, context)
    return {
        ...state,
        mount: () => mounted.forEach((fn) => fn()),
        advance: (instant) => { now = instant; intervals.forEach((fn) => fn()) },
    }
}

test('old static HTML hydrates with its original day, then switches matching event and image', async () => {
    const page = await homepage('2026-10-30', '2026-11-01T12:00:00Z')
    assert.equal(page.futureGridEvents.value.length, 2)
    assert.equal(page.upcomingEventPath.value, '/events/ben-bertrand')
    assert.equal(page.upcomingFeaturedPoster.value, '/ben-poster.jpg')
    page.mount()
    assert.equal(page.futureGridEvents.value.length, 1)
    assert.equal(page.futureGridEvents.value[0].image, '/les-halles.jpg')
    assert.equal(page.upcomingEventPath.value, '/events/les-halles')
    assert.equal(page.upcomingFeaturedPoster.value, '')
    assert.equal(page.archivedEvents.value[0].slug, 'ben-bertrand')
})

test('open pages roll over at Madrid midnight and keep expired events in the archive', async () => {
    const page = await homepage('2026-10-31', '2026-10-31T22:59:00Z')
    page.mount()
    assert.equal(page.futureGridEvents.value.length, 2)
    page.advance('2026-10-31T23:01:00Z')
    assert.equal(page.futureGridEvents.value.length, 1)
    assert.equal(page.archivedEvents.value[0].slug, 'ben-bertrand')
    page.advance('2026-12-04T23:01:00Z')
    assert.equal(page.futureGridEvents.value.length, 0)
    assert.equal(page.upcomingEventPath.value, '')
    assert.equal(page.archivedEvents.value.length, 2)
})
