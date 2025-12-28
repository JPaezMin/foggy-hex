import { _ as __nuxt_component_0 } from './nuxt-link-ChJ2nXPB.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { u as useAsyncData } from './asyncData-JXPjvw1e.mjs';
import { q as queryCollection } from './app-C2FoJXli.mjs';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "EventCard",
  __ssrInlineRender: true,
  props: {
    event: {},
    isExpired: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const formattedDate = computed(() => {
      if (!props.event?.date) return "";
      const parts = props.event.date.split("-").map(Number);
      if (parts.length !== 3) return props.event.date;
      const [year, month, day] = parts;
      if (!day || !month || !year) return props.event.date;
      const dd = String(day).padStart(2, "0");
      const mm = String(month).padStart(2, "0");
      const yyyy = String(year);
      return `${dd}/${mm}/${yyyy}`;
    });
    const isExpired = computed(() => Boolean(props.isExpired));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: ["bg-white title-box p-4 flex flex-col transition relative", unref(isExpired) ? "opacity-60" : ""],
        "aria-disabled": unref(isExpired) ? "true" : "false"
      }, _attrs))}><div class="w-full aspect-[16/9] overflow-hidden mb-4 relative"><img${ssrRenderAttr("src", _ctx.event.image)}${ssrRenderAttr("alt", _ctx.event.title)} class="${ssrRenderClass([unref(isExpired) ? "grayscale scale-105" : "", "w-full h-full object-cover transition duration-300"])}">`);
      if (unref(isExpired)) {
        _push(`<div class="absolute inset-0 bg-black/65 text-white font-heading text-sm uppercase tracking-[0.3em] flex items-center justify-center"> Evento pasado </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex-1 flex flex-col justify-between text-center">`);
      if (!unref(isExpired)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/events/${_ctx.event.slug}`,
          class: "font-heading text-2xl mb-2 line-clamp-2 min-h-[3.5rem] underline decoration-inherit decoration-1 underline-offset-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.event.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.event.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<p class="font-heading text-2xl mb-2 line-clamp-2 min-h-[3.5rem] opacity-70" aria-disabled="true">${ssrInterpolate(_ctx.event.title)}</p>`);
      }
      _push(`<p class="font-sans text-base text-gray-600 min-h-[1.5rem]">${ssrInterpolate(unref(formattedDate))} - ${ssrInterpolate(_ctx.event.venue)}</p></div></article>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EventCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "EventCard" });
const _imports_0 = publicAssetsURL("/images/fh-deco.svg");
const _imports_1 = "" + __buildAssetsURL("current-event-poster.DQQ4iwD-.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: futureEvents } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "future-events",
      () => queryCollection("future").order("date", "ASC").all()
    )), __temp = await __temp, __restore(), __temp);
    const { data: pastEvents } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "past-events",
      () => queryCollection("past").order("date", "DESC").all()
    )), __temp = await __temp, __restore(), __temp);
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
          if (Number.isInteger(year) && Number.isInteger(month) && Number.isInteger(day) && year >= 1900 && year <= 3e3 && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
            const parsed = new Date(year, month - 1, day);
            if (!Number.isNaN(parsed.getTime())) {
              return parsed;
            }
          }
        }
      }
      if (/^\d{1,2}\/\d{1,2}\/\d{2,4}$/.test(raw)) {
        const [dd, mm, yy] = raw.split("/").map((part) => part.trim());
        const day = Number.parseInt(dd, 10);
        const month = Number.parseInt(mm, 10);
        const year = Number.parseInt(yy.length === 2 ? `20${yy}` : yy, 10);
        if (Number.isInteger(year) && Number.isInteger(month) && Number.isInteger(day) && year >= 1900 && year <= 3e3 && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
          const parsed = new Date(year, month - 1, day);
          if (!Number.isNaN(parsed.getTime())) {
            return parsed;
          }
        }
      }
      const fallback = new Date(raw);
      if (Number.isNaN(fallback.getTime())) {
        return null;
      }
      const fallbackYear = fallback.getFullYear();
      if (fallbackYear < 1900 || fallbackYear > 3e3) {
        return null;
      }
      return fallback;
    };
    const futureGridEvents = computed(() => {
      const source = futureEvents.value ?? [];
      const mapped = source.map((event) => {
        const eventDate = parseEventDate(event.date);
        const timestamp = eventDate?.getTime() ?? Number.POSITIVE_INFINITY;
        const isExpired = Boolean(eventDate && eventDate < startOfToday);
        return {
          ...event,
          isExpired,
          sortTimestamp: timestamp
        };
      });
      const upcoming = mapped.filter((event) => !event.isExpired).sort((a, b) => {
        if (a.sortTimestamp !== b.sortTimestamp) {
          return a.sortTimestamp - b.sortTimestamp;
        }
        return a.title.localeCompare(b.title);
      });
      const expired = mapped.filter((event) => event.isExpired).sort((a, b) => {
        if (a.sortTimestamp !== b.sortTimestamp) {
          return b.sortTimestamp - a.sortTimestamp;
        }
        return a.title.localeCompare(b.title);
      });
      return [...upcoming, ...expired];
    });
    const archivedEvents = computed(
      () => (pastEvents.value ?? []).filter((event) => {
        const eventDate = parseEventDate(event.date);
        return !eventDate || eventDate < startOfToday;
      })
    );
    const formatDate = (dateString) => {
      if (!dateString) return "";
      const raw = dateString.trim();
      if (/^\d{4}-\d{2}-\d{2}/.test(raw)) {
        const iso = raw.split("T")[0] ?? "";
        const parts2 = iso.split("-").map((part) => part.trim());
        if (parts2.length === 3) {
          const [y, m, d] = parts2;
          const formattedDay = d.padStart(2, "0");
          const formattedMonth = m.padStart(2, "0");
          return formattedDay + "/" + formattedMonth + "/" + y;
        }
      }
      const parts = raw.split("/").map((part) => part.trim());
      if (parts.length === 3) {
        const [dd, mm, yy] = parts;
        if (dd && mm && yy) {
          const fullYear = yy.length === 2 ? "20" + yy : yy;
          const formattedDay = dd.padStart(2, "0");
          const formattedMonth = mm.padStart(2, "0");
          return formattedDay + "/" + formattedMonth + "/" + fullYear;
        }
      }
      return raw;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_EventCard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto min-h-screen text-text space-y-6 py-10" }, _attrs))} data-v-93392c34><section id="about" class="container py-12" data-v-93392c34><div class="grid grid-cols-1 lg:grid-cols-3 gap-16 items-stretch max-w-6xl mx-auto" data-v-93392c34><div class="lg:col-span-2 flex items-center border-l border-text pl-6" data-v-93392c34><p class="font-heading text-2xl lg:text-4xl leading-snug" data-v-93392c34> Somos un colectivo con base de operaciones en Barcelona. Nacemos de la necesidad de celebrar espacios y escenas que residen en el margen de nuestra ciudad y a la vez acercar a ella proyectos internacionales que nos inspiran. </p></div><div class="relative hidden lg:flex justify-center items-center" data-v-93392c34><img${ssrRenderAttr("src", _imports_0)} alt="Foggy Hex Deco" class="h-full max-h-[360px] w-auto object-contain opacity-90" data-v-93392c34></div></div></section><section id="current-event" class="container mx-auto flex flex-col items-center justify-center px-6 py-6" data-v-93392c34><h2 class="text-[32px] bg-sky-50 font-heading mb-8 text-center title-box px-6 py-2 border-1 border-text" data-v-93392c34> Próximamente </h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/events/hekura-jordi-santanach" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="Cartel de nuestro próximo evento" class="w-[478px] h-auto object-contain mt-8" data-v-93392c34${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1,
                alt: "Cartel de nuestro próximo evento",
                class: "w-[478px] h-auto object-contain mt-8"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section id="future-events" class="container mx-auto px-6 py-6" data-v-93392c34><h2 class="text-[32px] bg-sky-50 font-heading mb-8 text-center title-box px-6 py-2 border-1 border-text" data-v-93392c34> Próximos Eventos </h2>`);
      if (unref(futureGridEvents).length) {
        _push(`<div class="${ssrRenderClass([
          "grid gap-8",
          unref(futureGridEvents).length === 1 ? "grid-cols-1" : unref(futureGridEvents).length === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        ])}" data-v-93392c34><!--[-->`);
        ssrRenderList(unref(futureGridEvents), (event) => {
          _push(ssrRenderComponent(_component_EventCard, {
            key: event.slug,
            event,
            "is-expired": event.isExpired
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<p class="text-center text-lg font-sans text-gray-600" data-v-93392c34> No hay próximos eventos por ahora. ¡Vuelve pronto! </p>`);
      }
      _push(`</section><section id="newsletter" class="container mx-auto px-6 py-6" data-v-93392c34><div class="border-t border border-text mx-auto py-8 px-8 lg:px-16 lg:py-16" data-v-93392c34><div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8" data-v-93392c34><div class="text-left" data-v-93392c34><h2 class="font-heading text-3xl mb-4" data-v-93392c34> Suscríbete a nuestra newsletter. </h2><p class="text-lg text-gray-700 max-w-md" data-v-93392c34> Únete a nuestra lista de correo para enterarte primero de los próximos conciertos, novedades y noticias de Foggy Hex. </p></div><div class="w-full" data-v-93392c34><form action="https://foggyhexbcn.us13.list-manage.com/subscribe/post?u=3bf61944f37a5e219e4fdccda&amp;id=c32ef2e9a5&amp;f_id=001b02e9f0" method="post" target="_blank" novalidate class="flex flex-col sm:flex-row w-full md:max-w-md" data-v-93392c34><input type="email" name="EMAIL" placeholder="Tu correo electrónico" required class="flex-grow px-4 py-3 border border-gray-400 sm:rounded-l sm:rounded-r-none rounded focus:outline-none focus:ring-2 focus:ring-sky-400" data-v-93392c34><button type="submit" class="bg-black text-white px-6 py-3 sm:rounded-r sm:rounded-l-none rounded font-medium hover:bg-gray-800 transition mt-2 sm:mt-0" data-v-93392c34> Suscribirse </button></form></div></div></div></section><section id="past-events" class="container mx-auto px-6 py-12" data-v-93392c34><h2 class="text-4xl bg-sky-50 font-heading mb-8 text-center title-box px-6 py-2 border-1 border-text" data-v-93392c34> Eventos Pasados </h2>`);
      if (unref(archivedEvents) && unref(archivedEvents).length) {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-v-93392c34><!--[-->`);
        ssrRenderList(unref(archivedEvents), (event) => {
          _push(`<div class="flex flex-col" data-v-93392c34><div class="w-full aspect-[16/9] overflow-hidden rounded" data-v-93392c34><img${ssrRenderAttr("src", `${event.image}`)}${ssrRenderAttr("alt", event.title)} class="w-full h-full object-cover grayscale transition" data-v-93392c34></div><h3 class="font-heading text-lg mt-2 text-center truncate" data-v-93392c34>${ssrInterpolate(event.title)}</h3><p class="font-sans text-sm text-center text-gray-600" data-v-93392c34>${ssrInterpolate(formatDate(event.date))} — ${ssrInterpolate(event.venue)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<p class="text-center text-lg font-sans text-gray-600" data-v-93392c34> No hay eventos pasados registrados. </p>`);
      }
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-93392c34"]]);

export { index as default };
//# sourceMappingURL=index-DgfzoVuM.mjs.map
