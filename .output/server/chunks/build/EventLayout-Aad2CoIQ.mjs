import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:path';
import 'better-sqlite3';
import 'ipx';
import 'vue-router';
import '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EventLayout",
  __ssrInlineRender: true,
  props: {
    event: {}
  },
  setup(__props) {
    const props = __props;
    const show = props.event;
    const isSplitVenueEvent = computed(() => show.layoutVariant === "split-venues");
    const splitVenueSlots = computed(() => [
      {
        time: show.timeCasa || show.time || "18:00",
        venue: "Casa Montjuic",
        note: "+ Taki Onqoy (Warm up DJ set)"
      },
      {
        time: show.timeLaut || show.time || "21:00",
        venue: "Laut",
        note: "+ Francisco Sosa (Live modular set)"
      }
    ]);
    const supportingBand = computed(
      () => show.bands.find(
        (band) => band.name.toLowerCase().includes("francisco sosa")
      )
    );
    const supportingBandCasa = computed(
      () => show.bands.find((band) => band.name.toLowerCase().includes("taki onqoy"))
    );
    const supportingBandLaut = supportingBand;
    const primaryBand = computed(() => show.bands?.[0] ?? null);
    const titleParts = computed(() => {
      const match = show.title.match(/^(.*?)(?:\s*\(([^)]*)\))?$/);
      return {
        main: (match?.[1] ?? show.title).trim(),
        tag: (match?.[2] ?? "").trim()
      };
    });
    const slotTicketUrl = (venue) => {
      const lower = venue.toLowerCase();
      if (lower.includes("casa")) return show.ticketUrlCasa;
      if (lower.includes("laut")) return show.ticketUrl;
      return show.ticketUrl;
    };
    const formattedDate = computed(() => {
      if (!show.date) return "";
      const parts = show.date.split("/").map(Number);
      if (parts.length !== 3) return show.date;
      const [day, month, year] = parts;
      if (!day || !month || !year) return show.date;
      const fullYear = year < 100 ? 2e3 + year : year;
      const date = new Date(fullYear, month - 1, day);
      return new Intl.DateTimeFormat("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
      }).format(date).replace(/^\w/, (c) => c.toUpperCase());
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: [
          "container mx-auto px-6 py-16 event-article",
          unref(isSplitVenueEvent) ? "space-y-10" : "space-y-24"
        ]
      }, _attrs))} data-v-e50e7d11><header class="text-center" id="event-header" data-v-e50e7d11><h1 class="font-heading text-[40px] leading-tight text-accent" data-v-e50e7d11>${ssrInterpolate(unref(titleParts).main)}</h1>`);
      if (unref(titleParts).tag) {
        _push(`<p class="mt-1 text-lg font-heading text-text/80" data-v-e50e7d11>${ssrInterpolate(`(${unref(titleParts).tag})`)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isSplitVenueEvent)) {
        _push(`<div class="mt-5 space-y-2" id="split-venue-slots" data-v-e50e7d11><p class="font-heading text-xl font-bold text-accent" data-v-e50e7d11>${ssrInterpolate(unref(formattedDate))}</p><!--[-->`);
        ssrRenderList(unref(splitVenueSlots), (slot) => {
          _push(`<div class="flex flex-wrap items-center justify-center gap-2 font-sans text-lg text-center" data-v-e50e7d11><span data-v-e50e7d11>${ssrInterpolate(slot.time)}</span><span data-v-e50e7d11>-</span><span data-v-e50e7d11>${ssrInterpolate(slot.venue)}</span>`);
          if (slot.note) {
            _push(`<span class="text-sm text-text/70" data-v-e50e7d11>${ssrInterpolate(slot.note)}</span>`);
          } else {
            _push(`<!---->`);
          }
          if (slotTicketUrl(slot.venue)) {
            _push(`<!--[--><span data-v-e50e7d11>-</span><a${ssrRenderAttr("href", slotTicketUrl(slot.venue))} target="_blank" rel="noopener noreferrer" class="underline decoration-inherit underline-offset-4 hover:text-accent transition" data-v-e50e7d11> Entradas </a><!--]-->`);
          } else {
            _push(`<span data-v-e50e7d11>- Entradas Próximamente</span>`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!--[--><p class="font-sans text-lg mt-5" id="event-meta" data-v-e50e7d11><span class="font-heading text-xl font-bold text-accent" data-v-e50e7d11>${ssrInterpolate(unref(formattedDate))}</span> - ${ssrInterpolate(_ctx.event.time)} - ${ssrInterpolate(_ctx.event.venue)}</p>`);
        if (_ctx.event.ticketUrl) {
          _push(`<a${ssrRenderAttr("href", _ctx.event.ticketUrl)} target="_blank" rel="noopener noreferrer" class="inline-block mt-6 px-6 py-2 border-2 border-text text-text font-sans hover:bg-text hover:text-background transition" data-v-e50e7d11> Entradas </a>`);
        } else {
          _push(`<p class="mt-6 font-sans text-base text-text" data-v-e50e7d11> Entradas Próximamente </p>`);
        }
        _push(`<!--]-->`);
      }
      if (_ctx.event.schedule?.length) {
        _push(`<div class="mt-10" id="event-schedule" data-v-e50e7d11><div class="max-w-2xl mx-auto border border-text/10 bg-white/80 shadow-sm" data-v-e50e7d11><ul class="divide-y divide-text/10" data-v-e50e7d11><!--[-->`);
        ssrRenderList(_ctx.event.schedule, (item) => {
          _push(`<li class="flex flex-col gap-2 px-6 py-4 text-left sm:flex-row sm:items-center sm:justify-between" data-v-e50e7d11><div data-v-e50e7d11><p class="font-heading text-xl text-accent" data-v-e50e7d11>${ssrInterpolate(item.title)}</p>`);
          if (item.subtitle) {
            _push(`<p class="mt-1 font-sans text-xs uppercase tracking-[0.25em] text-text/60" data-v-e50e7d11>${ssrInterpolate(item.subtitle)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><p class="font-sans text-sm uppercase tracking-[0.2em] text-text/80 sm:text-right" data-v-e50e7d11>${ssrInterpolate(item.time)}</p></li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
      if (unref(isSplitVenueEvent) && unref(primaryBand)) {
        _push(`<section class="grid gap-20" data-v-e50e7d11><div class="relative grid grid-cols-1 lg:grid-cols-12 gap-4 items-start feature-row" data-v-e50e7d11><div class="lg:col-span-5 flex justify-center feature-image-col" data-v-e50e7d11><div class="overflow-hidden feature-image-frame" data-v-e50e7d11><img${ssrRenderAttr("src", unref(primaryBand).image)}${ssrRenderAttr("alt", unref(primaryBand).name)} class="w-full object-cover feature-image" data-v-e50e7d11></div></div><div class="lg:col-span-7 feature-text-col" data-v-e50e7d11><div data-v-e50e7d11><h2 class="font-heading text-3xl relative inline-block" data-v-e50e7d11>`);
        if (unref(primaryBand).bandcamp) {
          _push(`<a${ssrRenderAttr("href", unref(primaryBand).bandcamp)} target="_blank" rel="noopener noreferrer" class="border-text pb-1 hover:border-accent transition-colors underline decoration-inherit decoration-1 underline-offset-4" data-v-e50e7d11>${ssrInterpolate(unref(primaryBand).name)}</a>`);
        } else {
          _push(`<span class="border-text pb-1 decoration-1 underline-offset-4" data-v-e50e7d11>${ssrInterpolate(unref(primaryBand).name)}</span>`);
        }
        _push(`</h2>`);
        if (unref(primaryBand).label || unref(primaryBand).country) {
          _push(`<p class="mt-1 font-sans text-base text-text/60" data-v-e50e7d11> ( `);
          if (unref(primaryBand).label) {
            _push(`<span data-v-e50e7d11>${ssrInterpolate(unref(primaryBand).label)}</span>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(primaryBand).label && unref(primaryBand).country) {
            _push(`<span data-v-e50e7d11> / </span>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(primaryBand).country) {
            _push(`<span data-v-e50e7d11>${ssrInterpolate(unref(primaryBand).country)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(` ) </p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="font-sans text-base leading-relaxed max-w-prose mt-8 description-html" data-v-e50e7d11>${unref(primaryBand).description ?? ""}</div></div><div class="absolute top-0 h-full w-1 bg-accent feature-accent" data-v-e50e7d11></div></div></section>`);
      } else {
        _push(`<section class="grid gap-20" data-v-e50e7d11><!--[-->`);
        ssrRenderList(_ctx.event.bands, (band, i) => {
          _push(`<div class="relative grid grid-cols-1 lg:grid-cols-12 gap-4 items-start" data-v-e50e7d11><div class="${ssrRenderClass([i % 2 === 1 ? "lg:order-2" : "", "lg:col-span-5 flex justify-center"])}" data-v-e50e7d11><div class="w-2/3 aspect-square overflow-hidden" data-v-e50e7d11><img${ssrRenderAttr("src", band.image)}${ssrRenderAttr("alt", band.name)} class="w-full h-full object-cover transition duration-500" data-v-e50e7d11></div></div><div class="${ssrRenderClass([i % 2 === 1 ? "lg:order-1 text-right" : "text-left", "lg:col-span-7"])}" data-v-e50e7d11><div data-v-e50e7d11><h2 class="font-heading text-3xl relative inline-block" data-v-e50e7d11>`);
          if (band.bandcamp) {
            _push(`<a${ssrRenderAttr("href", band.bandcamp)} target="_blank" rel="noopener noreferrer" class="border-text pb-1 hover:border-accent transition-colors underline decoration-inherit decoration-1 underline-offset-4" data-v-e50e7d11>${ssrInterpolate(band.name)}</a>`);
          } else {
            _push(`<span class="border-text pb-1 decoration-1 underline-offset-4" data-v-e50e7d11>${ssrInterpolate(band.name)}</span>`);
          }
          _push(`</h2>`);
          if (band.label || band.country) {
            _push(`<p class="mt-1 font-sans text-base text-text/60" data-v-e50e7d11> ( `);
            if (band.label) {
              _push(`<span data-v-e50e7d11>${ssrInterpolate(band.label)}</span>`);
            } else {
              _push(`<!---->`);
            }
            if (band.label && band.country) {
              _push(`<span data-v-e50e7d11> / </span>`);
            } else {
              _push(`<!---->`);
            }
            if (band.country) {
              _push(`<span data-v-e50e7d11>${ssrInterpolate(band.country)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(` ) </p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="${ssrRenderClass([i % 2 === 1 ? "ml-auto" : "", "font-sans text-base leading-relaxed max-w-prose mt-8 description-html"])}" data-v-e50e7d11>${band.description ?? ""}</div></div><div class="${ssrRenderClass([i % 2 === 1 ? "right-0" : "left-0", "absolute top-0 h-full w-1 bg-accent"])}" data-v-e50e7d11></div></div>`);
        });
        _push(`<!--]--></section>`);
      }
      if (unref(isSplitVenueEvent) && unref(supportingBandCasa) && unref(supportingBandLaut)) {
        _push(`<section class="grid gap-12 md:gap-16 md:grid-cols-2 w-full max-w-5xl mx-auto" id="split-venue-support" data-v-e50e7d11><div class="space-y-4 w-full" data-v-e50e7d11><div class="flex flex-col items-start gap-1.5" data-v-e50e7d11><h3 class="font-heading text-[26px] leading-tight text-accent m-0 underline decoration-1 underline-offset-4 decoration-current" data-v-e50e7d11> Casa Montjuic </h3><span class="inline-flex items-baseline text-sm font-semibold tracking-[0.03em] text-text/80 support-subtitle" data-v-e50e7d11> Taki Onqoy (Foggy Hex / Kiosk Radio) </span><span class="text-sm font-sans text-text/60" data-v-e50e7d11> Warm up DJ Set </span></div><div class="w-full aspect-[4/3] overflow-hidden rounded-sm" data-v-e50e7d11><img${ssrRenderAttr("src", unref(supportingBandCasa).image)}${ssrRenderAttr("alt", unref(supportingBandCasa).name)} class="w-full h-full object-cover" data-v-e50e7d11></div><div class="font-sans text-base leading-relaxed description-html text-left w-full" data-v-e50e7d11>${unref(supportingBandCasa).description ?? ""}</div></div><div class="space-y-4 w-full" data-v-e50e7d11><div class="flex flex-col items-start gap-1.5" data-v-e50e7d11><h3 class="font-heading text-[26px] leading-tight text-accent m-0 underline decoration-1 underline-offset-4 decoration-current" data-v-e50e7d11> Laut </h3><span class="inline-flex items-baseline text-sm font-semibold tracking-[0.03em] text-text/80 support-subtitle" data-v-e50e7d11> Francisco Sosa (Barcelona Modular Society / Restless Music) </span><span class="text-sm font-sans text-text/60" data-v-e50e7d11> Live modular set </span></div><div class="w-full aspect-[4/3] overflow-hidden rounded-sm" data-v-e50e7d11><img${ssrRenderAttr("src", unref(supportingBandLaut).image)}${ssrRenderAttr("alt", unref(supportingBandLaut).name)} class="w-full h-full object-cover" data-v-e50e7d11></div><div class="font-sans text-base leading-relaxed description-html text-left w-full" data-v-e50e7d11>${unref(supportingBandLaut).description ?? ""}</div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/EventLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EventLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e50e7d11"]]);

export { EventLayout as default };
//# sourceMappingURL=EventLayout-Aad2CoIQ.mjs.map
