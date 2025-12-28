import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EventLayout",
  __ssrInlineRender: true,
  props: {
    event: {}
  },
  setup(__props) {
    const props = __props;
    const show = props.event;
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
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-6 py-16 space-y-24" }, _attrs))}><header class="text-center"><h1 class="font-heading text-[40px] leading-tight text-accent">${ssrInterpolate(_ctx.event.title)}</h1><p class="font-sans text-lg mt-5">${ssrInterpolate(unref(formattedDate))} - ${ssrInterpolate(_ctx.event.time)} - ${ssrInterpolate(_ctx.event.venue)}</p>`);
      if (_ctx.event.ticketUrl) {
        _push(`<a${ssrRenderAttr("href", _ctx.event.ticketUrl)} target="_blank" rel="noopener noreferrer" class="inline-block mt-6 px-6 py-2 border-2 border-text text-text font-sans hover:bg-text hover:text-background transition"> Entradas </a>`);
      } else {
        _push(`<p class="mt-6 font-sans text-base text-text"> Entradas Próximamente </p>`);
      }
      if (_ctx.event.schedule?.length) {
        _push(`<div class="mt-10"><div class="max-w-2xl mx-auto border border-text/10 bg-white/80 shadow-sm"><ul class="divide-y divide-text/10"><!--[-->`);
        ssrRenderList(_ctx.event.schedule, (item) => {
          _push(`<li class="flex flex-col gap-2 px-6 py-4 text-left sm:flex-row sm:items-center sm:justify-between"><div><p class="font-heading text-xl text-accent">${ssrInterpolate(item.title)}</p>`);
          if (item.subtitle) {
            _push(`<p class="mt-1 font-sans text-xs uppercase tracking-[0.25em] text-text/60">${ssrInterpolate(item.subtitle)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><p class="font-sans text-sm uppercase tracking-[0.2em] text-text/80 sm:text-right">${ssrInterpolate(item.time)}</p></li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><section class="grid gap-20"><!--[-->`);
      ssrRenderList(_ctx.event.bands, (band, i) => {
        _push(`<div class="relative grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"><div class="${ssrRenderClass([i % 2 === 1 ? "lg:order-2" : "", "lg:col-span-5 flex justify-center"])}"><div class="w-2/3 aspect-square overflow-hidden"><img${ssrRenderAttr("src", band.image)}${ssrRenderAttr("alt", band.name)} class="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"></div></div><div class="${ssrRenderClass([i % 2 === 1 ? "lg:order-1 text-right" : "text-left", "lg:col-span-7"])}"><h2 class="font-heading text-3xl relative inline-block"><a${ssrRenderAttr("href", band.bandcamp)} target="_blank" rel="noopener noreferrer" class="border-text pb-1 hover:border-accent transition-colors underline decoration-inherit decoration-1 underline-offset-4">${ssrInterpolate(band.name)}</a></h2><p class="${ssrRenderClass([i % 2 === 1 ? "ml-auto" : "", "font-sans text-base leading-relaxed max-w-prose mt-8"])}">${ssrInterpolate(band.description)}</p></div><div class="${ssrRenderClass([i % 2 === 1 ? "right-0" : "left-0", "absolute top-0 h-full w-1 bg-accent"])}"></div></div>`);
      });
      _push(`<!--]--></section></article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/EventLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=EventLayout-CkJ0PQ02.mjs.map
