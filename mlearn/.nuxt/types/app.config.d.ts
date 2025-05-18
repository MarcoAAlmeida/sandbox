
import type { CustomAppConfig } from 'nuxt/schema'
import type { Defu } from 'defu'
import cfg0 from "C:/Users/marco/pub/sandbox/mlearn/node_modules/@nuxt-themes/elements/app.config"

declare const inlineConfig = {
  "cover": "/cover.jpg",
  "socials": {
    "github": ""
  },
  "prose": {
    "copyButton": {
      "iconCopy": "ph:copy",
      "iconCopied": "ph:check"
    },
    "headings": {
      "icon": "ph:link"
    },
    "h1": {
      "icon": ""
    },
    "h2": {
      "icon": ""
    },
    "h3": {
      "icon": ""
    },
    "h4": {
      "icon": ""
    },
    "h5": {
      "icon": ""
    },
    "h6": {
      "icon": ""
    }
  }
}
type ResolvedAppConfig = Defu<typeof inlineConfig, [typeof cfg0]>
type IsAny<T> = 0 extends 1 & T ? true : false

type MergedAppConfig<Resolved extends Record<string, any>, Custom extends Record<string, any>> = {
  [K in keyof Resolved]: K extends keyof Custom
    ? IsAny<Custom[K]> extends true
      ? Resolved[K]
      : Custom[K] extends Record<string, any>
        ? Resolved[K] extends Record<string, any>
          ? MergedAppConfig<Resolved[K], Custom[K]>
          : Exclude<Custom[K], undefined>
        : Exclude<Custom[K], undefined>
    : Resolved[K]
}

declare module 'nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}
declare module '@nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}
