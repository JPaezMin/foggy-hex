import { defineComponent, withAsyncContext, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import _sfc_main$1 from './EventLayout-CkJ0PQ02.mjs';
import { a as useRoute, c as createError } from './server.mjs';
import { u as useAsyncData } from './asyncData-JXPjvw1e.mjs';
import { q as queryCollection } from './app-C2FoJXli.mjs';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: event } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `show-${route.params.slug}`,
      () => queryCollection("shows").where("slug", "=", route.params.slug).first()
    )), __temp = await __temp, __restore(), __temp);
    if (!event.value) {
      throw createError({
        statusCode: 404,
        statusMessage: "Evento no encontrado"
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(event)) {
        _push(ssrRenderComponent(_sfc_main$1, mergeProps({ event: unref(event) }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/events/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-DdkLJiWT.mjs.map
