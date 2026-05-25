import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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
  __name: "spaces",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Espacios | Foggy Hex",
      description: "Espacios con los que hemos colaborado.",
      ogTitle: "Espacios con los que colaborámos | Foggy Hex",
      ogDescription: "Foggy Hex — Un colectivo con base de operaciones en Barcelona que organiza conciertos y otros eventos relacionados a cosas que nos apasionan",
      ogImage: "https://www.foggyhexbcn.com/about-og.jpg",
      ogUrl: "https://www.foggyhexbcn.com/about"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-6 py-16 space-y-8 text-left" }, _attrs))}><section class="max-w-4xl"><h1 class="font-heading text-[40px] leading-tight text-accent mb-8 border-l-4 border-text pl-4"> Espacios </h1><p class="font-sans text-lg leading-relaxed text-text"> Foggy Hex sólo colabora con espacios auto-gestionados de nuestra ciudad. Espacios cuya existencia creemos imprescindible para el desarrollo cultural de la misma. Aquí una lista de los espacios con los que hemos tenido la suerte de trabajar y sin cuyo apoyo nuestra tarea sería imposible: </p></section><section class="max-w-3xl"><ul class="space-y-4 font-sans text-base leading-snug text-text"><li><a href="https://www.casamontjuic.com/" target="_blank" rel="noopener noreferrer" class="block hover:text-accent transition-colors"> Casa Montjuic </a></li><li><a href="https://www.instagram.com/dublab.cat/" target="_blank" rel="noopener noreferrer" class="block hover:text-accent transition-colors"> El Teatro de La Rubia <span class="text-gray-500">(vía Dublab Barcelona)</span></a></li><li><a href="https://www.instagram.com/elpumarejo" target="_blank" rel="noopener noreferrer" class="block hover:text-accent transition-colors"> El Pumarejo Refugio Cultural </a></li><li><a href="https://hangar.org/en/" target="_blank" rel="noopener noreferrer" class="block hover:text-accent transition-colors"> Hangar </a></li><li><a href="https://www.instagram.com/if.publications/" target="_blank" rel="noopener noreferrer" class="block hover:text-accent transition-colors"> IF Publications Studio </a></li><li><a href="https://www.instagram.com/lanegrafactory" target="_blank" rel="noopener noreferrer" class="block hover:text-accent transition-colors"> La Negra Factory </a></li><li><a href="https://www.instagram.com/niu_espai/" target="_blank" rel="noopener noreferrer" class="block hover:text-accent transition-colors"> NIU Espacio Artístico </a></li></ul></section></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/spaces.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=spaces-VeCT6BpP.mjs.map
