import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useSeoMeta } from './composables-DFdc4R-K.mjs';
import './server.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = {
  __name: "dj",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Foggy Hex DJs | Foggy Hex",
      description: "Conoce a Foggy Hex, nuestro colectivo con base en Barcelona.",
      ogTitle: "Foggy Hex DJs | Foggy Hex",
      ogDescription: "Colectivo en Barcelona que celebra escenas en los márgenes.",
      ogImage: "https://www.foggyhexbcn.com/about-og.jpg",
      ogUrl: "https://www.foggyhexbcn.com/about"
    });
    const djs = [
      {
        name: "Alec Curtis",
        image: "/images/alec.jpeg",
        description: "Founding member of the Barcelona collective Foggy Hex and music nerd, Jorge Páez began DJing the dark basements of his native city Líma, where he found a space of joy and universal connection in sound. After a long journey playing for free-form radio outlets and selecting music for curious crowds between Portland, Brussels, and Barcelona (where he's based at the moment), Páez now uses the moniker Taki Onqoy to navigate, with a naive sense of wonder, the intersection between dub, leftfield pop, and 'other music' influenced by all sorts of mysterious and global sounds."
      },
      {
        name: "Taki Onqoy",
        image: "/images/taki-onqoy.jpg",
        description: "Founding member of the Barcelona collective Foggy Hex and music nerd, Jorge Páez began DJing the dark basements of his native city Líma, where he found a space of joy and universal connection in sound. After a long journey playing for free-form radio outlets and selecting music for curious crowds between Portland, Brussels, and Barcelona (where he's based at the moment), Páez now uses the moniker Taki Onqoy to navigate, with a naive sense of wonder, the intersection between dub, leftfield pop, and 'other music' influenced by all sorts of mysterious and global sounds."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-6 py-16 space-y-24" }, _attrs))}><header class="text-center space-y-4"><h1 class="font-heading text-[40px] leading-tight text-accent border-b border-text inline-block pb-2"> Foggy Hex DJs </h1></header><section class="grid gap-20"><!--[-->`);
      ssrRenderList(djs, (dj, i) => {
        _push(`<div class="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"><div class="${ssrRenderClass([i % 2 === 1 ? "lg:order-2" : "", "lg:col-span-5 flex justify-center"])}"><div class="w-2/3 aspect-square overflow-hidden"><img${ssrRenderAttr("src", dj.image)}${ssrRenderAttr("alt", dj.name)} class="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"></div></div><div class="${ssrRenderClass([i % 2 === 1 ? "lg:order-1 text-right" : "text-left", "lg:col-span-7 space-y-6"])}"><h2 class="font-heading text-3xl border-b border-text inline-block pb-2">${ssrInterpolate(dj.name)}</h2><p class="${ssrRenderClass([i % 2 === 1 ? "ml-auto" : "", "font-sans text-base leading-relaxed max-w-prose mt-4"])}">${ssrInterpolate(dj.description)}</p></div><div class="${ssrRenderClass([i % 2 === 1 ? "right-0" : "left-0", "absolute top-0 h-full w-1 bg-accent"])}"></div></div>`);
      });
      _push(`<!--]--></section></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dj.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dj-jj71ov_l.mjs.map
