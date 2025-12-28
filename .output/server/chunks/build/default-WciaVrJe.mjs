import { _ as __nuxt_component_0$2 } from './nuxt-link-ChJ2nXPB.mjs';
import { mergeProps, withCtx, createVNode, ref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { b as useNuxtApp, _ as _export_sfc } from './server.mjs';
import __nuxt_component_2 from './index-zJYp_dp3.mjs';
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
import '@iconify/utils/lib/css/icon';
import './composables-DFdc4R-K.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './asyncData-JXPjvw1e.mjs';

const _sfc_main$3 = {
  __name: "MainNavigation",
  __ssrInlineRender: true,
  setup(__props) {
    const menuOpen = ref(false);
    const navItems = [
      { name: "Nosotros", to: "/about" },
      { name: "Espacios", to: "/spaces" },
      {
        name: "Kiosk Radio",
        href: "https://kioskradio.com/label/foggy-hex",
        external: true
      },
      { name: "Agenda Local", to: "/agenda" }
      // { name: 'Foggy Hex DJs', to: '/dj' },
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "relative px-4 py-6 font-sans text-text" }, _attrs))} data-v-42660827><div class="flex justify-between items-center" data-v-42660827>`);
      ssrRenderSlot(_ctx.$slots, "logo", {}, null, _push, _parent);
      _push(`<ul class="hidden 2xl:flex gap-8 items-end flex-nowrap" data-v-42660827><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(`<li data-v-42660827>`);
        if (!item.external) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: item.to,
            class: "text-[22px] leading-normal border-b-2 border-current pb-2 whitespace-nowrap"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<a${ssrRenderAttr("href", item.href)} target="_blank" rel="noopener noreferrer" class="text-[22px] leading-normal border-b-2 border-current pb-2 whitespace-nowrap" data-v-42660827>${ssrInterpolate(item.name)}</a>`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul><button class="2xl:hidden z-50" aria-label="Toggle menu" data-v-42660827><svg class="w-8 h-8 text-text" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-42660827><path stroke-linecap="round" stroke-linejoin="round"${ssrRenderAttr(
        "d",
        menuOpen.value ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
      )} data-v-42660827></path></svg></button></div>`);
      if (menuOpen.value) {
        _push(`<ul class="absolute py-6 px-6 bg-stone-950 flex flex-col gap-6 mt-4 2xl:hidden text-[24px] leading-normal font-sans" data-v-42660827><!--[-->`);
        ssrRenderList(navItems, (item) => {
          _push(`<li class="text-white" data-v-42660827>`);
          if (!item.external) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: item.to,
              class: "block border-b-2 border-current pb-4 whitespace-nowrap",
              onClick: ($event) => menuOpen.value = false
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(item.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<a${ssrRenderAttr("href", item.href)} target="_blank" rel="noopener noreferrer" class="block border-b-2 border-current pb-4 whitespace-nowrap" data-v-42660827>${ssrInterpolate(item.name)}</a>`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainNavigation.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-42660827"]]);
const _imports_0 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_2'%20data-name='Layer%202'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20217.25%20196.62'%3e%3cg%20id='Layer_1-2'%20data-name='Layer%201'%3e%3cg%3e%3cpath%20d='M53.12,61.96V0h40.46v6.85h-32.91v19.31h29.67v6.85h-29.67v28.96h-7.55Z'%20style='fill:%20%23343438;'/%3e%3cpath%20d='M92.44,40.02c0-13.87,7.81-22.56,20.71-22.56,12.2,0,19.48,8.78,19.48,23.08s-7.72,22.47-20.01,22.47c-13.17,0-20.19-8.95-20.19-23ZM112.89,23.35c-8.07,0-13.25,6.32-13.25,16.15,0,10.97,5.09,17.64,12.9,17.64s12.9-6.23,12.9-16.59-4.74-17.2-12.55-17.2Z'%20style='fill:%20%23343438;'/%3e%3cpath%20d='M166.61,55.12c-3.16,4.74-7.55,6.93-13.52,6.93-10.62,0-17.11-8.34-17.11-21.94s7.37-22.21,17.9-22.21c5.79,0,10.09,1.93,12.9,6.23v-5.53h6.93v42.04c0,8.34-1.76,13.25-6.06,16.5-3.16,2.37-8.25,3.6-12.99,3.6-9.83,0-15.71-4.92-17.64-13.17l7.29-1.84c.88,5.88,4.92,9.13,10.8,9.13,4.48,0,7.37-1.23,9.13-3.42,1.93-2.46,2.37-6.23,2.37-11.59v-4.74ZM155.29,23.87c-7.46,0-12.2,6.06-12.2,15.89,0,10.44,4.65,16.76,11.94,16.76s11.59-5.79,11.59-15.45c0-10.44-3.6-17.2-11.32-17.2Z'%20style='fill:%20%23343438;'/%3e%3cpath%20d='M167.4,121.92c-3.16,4.74-7.55,6.93-13.52,6.93-10.62,0-17.11-8.34-17.11-21.94s7.37-22.21,17.9-22.21c5.79,0,10.09,1.93,12.9,6.23v-5.53h6.93v42.04c0,8.34-1.76,13.25-6.06,16.5-3.16,2.37-8.25,3.6-12.99,3.6-9.83,0-15.71-4.92-17.64-13.17l7.29-1.84c.88,5.88,4.92,9.13,10.8,9.13,4.48,0,7.37-1.23,9.13-3.42,1.93-2.46,2.37-6.23,2.37-11.59v-4.74ZM156.07,90.67c-7.46,0-12.2,6.06-12.2,15.89,0,10.44,4.65,16.76,11.94,16.76s11.59-5.79,11.59-15.45c0-10.44-3.6-17.2-11.32-17.2Z'%20style='fill:%20%23343438;'/%3e%3cpath%20d='M177.05,85.41h7.72c5.44,15.53,9.65,28.7,12.55,37.48,2.72-8.6,7.72-23.96,12.46-37.48h7.46l-17.99,49.06c-3.69,10.09-7.2,13.08-15.1,13.08-1.67,0-3.16-.18-4.56-.53v-6.06c1.23.44,3.16.7,4.04.7,3.95,0,5.79-.18,8.25-6.85l1.58-4.39-16.41-45.02Z'%20style='fill:%20%23343438;'/%3e%3cpath%20d='M91.61,195.57v-28.88h-33v28.88h-7.37v-61.96h7.37v26.42h33v-26.42h7.46v61.96h-7.46Z'%20style='fill:%20%23343438;'/%3e%3cpath%20d='M140.09,184.33c-2.55,7.9-9.65,12.29-17.99,12.29-13.52,0-20.54-9.22-20.54-23.26s8.16-22.29,20.1-22.29,18.43,8.25,18.52,23.87h-31.6c0,9.48,4.83,15.8,13.69,15.8,5.27,0,9.92-1.93,11.67-8.43l6.14,2.02ZM121.49,156.78c-6.58,0-11.85,3.95-12.81,12.73h24.4c-.61-9.22-5.18-12.73-11.59-12.73Z'%20style='fill:%20%23343438;'/%3e%3cpath%20d='M168.97,195.57c-3.77-6.06-7.64-12.38-11.23-18.43-2.98,4.92-6.14,10.27-11.23,18.43h-7.64l14.48-22.47-13.34-20.89h7.99c3.34,5.53,6.58,11.06,9.83,16.59,3.25-5.27,5.88-9.83,10.01-16.59h7.64l-13.25,20.63,14.57,22.73h-7.81Z'%20style='fill:%20%23343438;'/%3e%3c/g%3e%3cpath%20d='M114.52,99.72s-29.37,14.59-55.22,1.82c-24.78-12.24-44.65-5.47-57.57,3.65'%20style='fill:%20none;%20stroke:%20%23343438;%20stroke-miterlimit:%2010;%20stroke-width:%206px;'/%3e%3c/g%3e%3c/svg%3e";
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_MainNavigation = __nuxt_component_0$1;
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_Icon = __nuxt_component_2;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "w-full bg-zinc-100 px-6 py-8" }, _attrs))}><div class="container mx-auto grid grid-cols-3 items-center"><div class="flex justify-start">`);
  _push(ssrRenderComponent(_component_MainNavigation, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "flex justify-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Foggy Hex BCN" class="w-[175px] h-auto object-contain sm:w-[140px]"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "Foggy Hex BCN",
            class: "w-[175px] h-auto object-contain sm:w-[140px]"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex justify-end"><a href="https://instagram.com/foggyhexbcn" target="_blank" rel="noopener noreferrer" class="flex items-center text-text hover:text-link-hover transition-colors">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "mdi:instagram",
    size: "32"
  }, null, _parent));
  _push(`</a></div></div></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]), { __name: "SiteHeader" });
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "w-full bg-zinc-100 py-6 flex items-center justify-center border-t border-current" }, _attrs))}><a href="mailto:hola@foggyhexbcn.com" class="font-heading text-[32px] text-text hover:text-accent transition-colors"> hola@foggyhexbcn.com </a></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "SiteFooter" });
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { $grained } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteHeader = __nuxt_component_0;
      const _component_SiteFooter = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "sections",
        class: "min-h-screen flex flex-col"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SiteHeader, null, null, _parent));
      _push(`<main id="main-content" class="flex-grow">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_SiteFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-WciaVrJe.mjs.map
