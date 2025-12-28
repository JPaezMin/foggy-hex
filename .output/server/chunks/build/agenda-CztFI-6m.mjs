import { defineComponent, withAsyncContext, ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { u as useSeoMeta } from './composables-DFdc4R-K.mjs';
import { u as useRuntimeConfig } from './server.mjs';
import { u as useAsyncData } from './asyncData-JXPjvw1e.mjs';
import { q as queryCollection } from './app-C2FoJXli.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';
import '@iconify/vue';

const CALENDAR_ID = "c_1b9e4111ecdffe96f6d9e657a6b061386b05f3e5fc93de1f9a482e5a7b1cb485@group.calendar.google.com";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "agenda",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useSeoMeta({
      title: "Nos verémos en... | Foggy Hex",
      description: "Agenda viva de conciertos y citas afines en los espacios donde Foggy Hex colabora habitualmente.",
      ogTitle: "Nos verémos en... | Foggy Hex",
      ogDescription: "Agenda viva de conciertos y citas afines en los espacios donde Foggy Hex colabora habitualmente.",
      ogImage: "https://www.foggyhexbcn.com/about-og.jpg",
      ogUrl: "https://www.foggyhexbcn.com/agenda"
    });
    const runtimeConfig = useRuntimeConfig();
    runtimeConfig.public?.googleCalendarApiKey ?? runtimeConfig.public?.GOOGLE_CALENDAR_API_KEY ?? "";
    const CALENDAR_VIEW_URL = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(
      CALENDAR_ID
    )}&mode=AGENDA`;
    const { data: agendaEvents } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "agenda-events",
      () => queryCollection("agenda").order("date", "ASC").all()
    )), __temp = await __temp, __restore(), __temp);
    const fetchedAgenda = ref([]);
    const isLoadingCalendar = ref(true);
    const calendarError = ref(null);
    const today = /* @__PURE__ */ new Date();
    const startOfToday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    const parseEventDate = (dateString) => {
      if (!dateString) return null;
      const raw = dateString.trim();
      if (!raw) return null;
      if (/^\d{4}-\d{2}-\d{2}/.test(raw)) {
        const iso = raw.split("T")[0] ?? "";
        const parts = iso.split("-").map((part) => part.trim());
        if (parts.length === 3) {
          const [y, m, d] = parts;
          const year = Number.parseInt(y, 10);
          const month = Number.parseInt(m, 10);
          const day = Number.parseInt(d, 10);
          if (Number.isInteger(year) && Number.isInteger(month) && Number.isInteger(day)) {
            const parsed = new Date(year, month - 1, day);
            if (!Number.isNaN(parsed.getTime())) {
              return parsed;
            }
          }
        }
      }
      if (/^\d{1,2}\/\d{1,2}\/\d{2,4}$/.test(raw)) {
        const parts = raw.split("/").map((part) => part.trim());
        if (parts.length === 3) {
          const [dd, mm, yy] = parts;
          if (!dd || !mm || !yy) return null;
          const day = Number.parseInt(dd, 10);
          const month = Number.parseInt(mm, 10);
          const year = Number.parseInt(yy.length === 2 ? `20${yy}` : yy, 10);
          if (Number.isInteger(year) && Number.isInteger(month) && Number.isInteger(day)) {
            const parsed = new Date(year, month - 1, day);
            if (!Number.isNaN(parsed.getTime())) {
              return parsed;
            }
          }
        }
      }
      const fallback = new Date(raw);
      if (!Number.isNaN(fallback.getTime())) {
        return fallback;
      }
      return null;
    };
    const formatDate = (value) => {
      if (!value) return "";
      const parsed = value instanceof Date ? value : parseEventDate(value);
      if (!parsed) return typeof value === "string" ? value : "";
      const day = String(parsed.getDate()).padStart(2, "0");
      const month = String(parsed.getMonth() + 1).padStart(2, "0");
      const year = String(parsed.getFullYear());
      return `${day}/${month}/${year}`;
    };
    const formatTime = (date, allDay, fallback) => {
      if (fallback) return fallback;
      if (!date) return "Por confirmar";
      if (allDay) return "Todo el diaa";
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      return `${hours}:${minutes}`;
    };
    const cleanText = (value) => {
      if (!value) return "";
      return value.replace(/\\n/g, " ").replace(/\\\\/g, "\\").replace(/\\,/g, ", ").replace(/\s+/g, " ").trim();
    };
    const formatTitleText = (value) => {
      const cleaned = cleanText(value);
      if (!cleaned) return "";
      return cleaned.split(" ").map(
        (word) => word ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : ""
      ).join(" ");
    };
    const extractTicketUrl = (value) => {
      if (!value) return null;
      const match = value.match(/https?:\/\/[^\s<>"']+/);
      if (!match?.[0]) return null;
      return match[0].replace(/[),.;]+$/, "");
    };
    const ticketLink = (event) => extractTicketUrl(event.description) ?? (event.url || null);
    const displayTitle = (event) => formatTitleText(event.title);
    const fallbackAgenda = computed(
      () => (agendaEvents.value ?? []).map((event) => ({
        id: event.slug,
        title: formatTitleText(event.title),
        date: parseEventDate(event.date),
        location: cleanText(event.venue),
        description: cleanText(event.space),
        url: event.ticketUrl ?? event.infoUrl ?? event.source ?? CALENDAR_VIEW_URL,
        allDay: !event.time,
        time: event.time
      })).filter((event) => !!event.date)
    );
    const resolvedAgenda = computed(
      () => fetchedAgenda.value.length ? fetchedAgenda.value : fallbackAgenda.value
    );
    const upcomingAgenda = computed(
      () => [...resolvedAgenda.value].filter((event) => {
        if (!event.date) return false;
        return event.date >= startOfToday && event.date.getFullYear() === 2026;
      }).sort((a, b) => {
        if (!a.date && !b.date) {
          return a.title.localeCompare(b.title);
        }
        if (!a.date) return -1;
        if (!b.date) return 1;
        return a.date.getTime() - b.date.getTime();
      })
    );
    const archivedAgenda = computed(
      () => [...resolvedAgenda.value].filter((event) => {
        if (!event.date) return false;
        return event.date < startOfToday && event.date.getFullYear() === 2026;
      }).sort((a, b) => {
        if (!a.date || !b.date) return 0;
        return b.date.getTime() - a.date.getTime();
      })
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "relative container mx-auto px-6 py-16 space-y-16 text-left" }, _attrs))}><header class="max-w-4xl space-y-6"><h1 class="font-heading text-[40px] leading-tight text-accent mb-4 border-l-4 border-text pl-4"> Nos veremos en... </h1><div class="font-sans text-lg leading-relaxed text-text space-y-4"><p> Esta agenda reúne solo los eventos a los cuales nos encantaría ir. No hay pagos ni promos de por medio. Compartimos eventos a los que iríamos como público, por simple afinidad con la música y con lo que hacen les artistes, con especial atención -aunque no exclusiva- al tejido de salas y espacios autogestionados de nuestra ciudad. </p><p> Si tienes un evento que crees que encaja, puedes escribirnos. Leemos todo, pero esto no es un tablón abierto: lo que aparece aquí responde únicamente a nuestros gustos y a la curiosidad del colectivo. </p><p> Sabemos, por experiencia, que muchos eventos pequeños organizados por otros colectivos como el nuestro muchas veces se pierden en el eter del algoritmo, sin ninguna promoción de medios locales y esta agenda es solo nuestra forma de intentar amplificar un poco esas fechas dentro de nuestra propia comunidad. </p></div></header><section class="space-y-8 w-full" aria-labelledby="agenda-upcoming"><div class="flex items-center gap-4"><h2 id="agenda-upcoming" class="font-heading text-3xl border-b-2 border-text pb-2"> Agenda Local </h2></div>`);
      if (calendarError.value) {
        _push(`<p class="font-sans text-center text-base text-text/70 border border-dashed border-text/40 py-4">${ssrInterpolate(calendarError.value)}</p>`);
      } else if (isLoadingCalendar.value) {
        _push(`<p class="font-sans text-center text-base text-text/70 border border-dashed border-text/40 py-4"> Cargando agenda 2026... </p>`);
      } else if (upcomingAgenda.value.length) {
        _push(`<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full"><!--[-->`);
        ssrRenderList(upcomingAgenda.value, (event) => {
          _push(`<article class="border border-text/30 bg-white p-6 flex flex-col gap-4 shadow-sm"><div class="space-y-2"><p class="font-mono text-xs uppercase tracking-[0.6em] text-text/60">${ssrInterpolate(formatDate(event.date) || "Fecha por definir")}</p><h3 class="font-heading text-2xl leading-snug">${ssrInterpolate(displayTitle(event))}</h3><p class="font-sans text-sm text-text/80">${ssrInterpolate(event.location || "Lugar por definir")}</p></div><dl class="space-y-3 font-sans text-sm"><div class="flex items-center gap-2"><dt class="font-semibold whitespace-nowrap">Hora:</dt><dd class="flex-1">${ssrInterpolate(formatTime(event.date, event.allDay, event.time))}</dd></div><div class="text-text/80">`);
          if (ticketLink(event)) {
            _push(`<a${ssrRenderAttr("href", ticketLink(event))} target="_blank" rel="noopener noreferrer" class="text-accent underline decoration-inherit underline-offset-2"> Entradas </a>`);
          } else {
            _push(`<!--[-->${ssrInterpolate(event.description || "Mas detalles pronto")}<!--]-->`);
          }
          _push(`</div></dl></article>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<p class="font-sans text-center text-base text-text/70 border border-dashed border-text/40 py-8"> Aún no hay eventos confirmados para 2026. Vuelve pronto: el calendario se actualiza en cuanto añadimos nuevas fechas. </p>`);
      }
      _push(`</section>`);
      if (!isLoadingCalendar.value && archivedAgenda.value.length) {
        _push(`<section class="space-y-6" aria-labelledby="agenda-archived"><div class="flex items-center gap-4"><h2 id="agenda-archived" class="font-heading text-3xl border-b-2 border-text pb-2"> Registro reciente </h2><span class="font-mono text-xs uppercase tracking-[0.4em] text-text/60">Archivo</span></div><ul class="grid gap-4 md:grid-cols-2"><!--[-->`);
        ssrRenderList(archivedAgenda.value, (event) => {
          _push(`<li class="border border-text/20 bg-white/70 px-5 py-4"><p class="font-mono text-[11px] uppercase tracking-[0.5em] text-text/60">${ssrInterpolate(formatDate(event.date))}</p><p class="font-heading text-lg text-text">${ssrInterpolate(displayTitle(event))}</p><p class="font-sans text-sm text-text/70">${ssrInterpolate(event.location || "Lugar por definir")}</p></li>`);
        });
        _push(`<!--]--></ul></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/agenda.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=agenda-CztFI-6m.mjs.map
