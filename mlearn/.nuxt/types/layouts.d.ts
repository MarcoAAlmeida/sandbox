import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "blog-index" | "blog" | "default" | "full-width"
declare module "C:/Users/marco/pub/sandbox/mlearn/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}