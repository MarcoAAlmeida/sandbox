import { _ as __nuxt_component_0 } from '../server.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-7d178035.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'defu';
import '../../nitro/netlify.mjs';
import 'node-fetch-native/polyfill';
import 'radix3';
import 'destr';
import 'scule';
import 'klona';
import 'unenv/runtime/fetch/index';
import 'ohash';
import 'unstorage';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useFetch("https://jsonplaceholder.typicode.com/posts", "$pqtWcjQkdb")), __temp = await __temp, __restore(), __temp);
    const truncate = (original) => original.substring(0, 50);
    const getPostUrl = (id) => "/posts/" + id;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>Blog posts</h1><!--[-->`);
      ssrRenderList(unref(posts), (post) => {
        _push(`<article><h3>${ssrInterpolate(post.title)}</h3><p>${ssrInterpolate(truncate(post.body))}...</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: getPostUrl(post.id)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Read more`);
            } else {
              return [
                createTextVNode("Read more")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</article>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-bfe83c4c.mjs.map
