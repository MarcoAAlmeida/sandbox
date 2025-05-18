import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["studio"]?: typeof import("@nuxthq/studio").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pinceau"]?: typeof import("pinceau/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["tokens"]?: typeof import("@nuxt-themes/tokens").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxthq/studio", Exclude<NuxtConfig["studio"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["pinceau/nuxt", Exclude<NuxtConfig["pinceau"], boolean>] | ["@nuxt-themes/tokens", Exclude<NuxtConfig["tokens"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   content: {
      cacheVersion: number,

      cacheIntegrity: string,

      transformers: Array<any>,

      base: string,

      api: {
         baseURL: string,
      },

      watch: {
         ws: {
            port: {
               port: number,

               portRange: Array<number>,
            },

            hostname: string,

            showURL: boolean,
         },
      },

      sources: any,

      ignores: Array<string>,

      locales: Array<any>,

      defaultLocale: any,

      highlight: {
         theme: {
            default: string,

            dark: string,

            sepia: string,
         },

         preload: Array<string>,
      },

      markdown: {
         tags: {
            p: string,

            a: string,

            blockquote: string,

            "code-inline": string,

            code: string,

            em: string,

            h1: string,

            h2: string,

            h3: string,

            h4: string,

            h5: string,

            h6: string,

            hr: string,

            img: string,

            ul: string,

            ol: string,

            li: string,

            strong: string,

            table: string,

            thead: string,

            tbody: string,

            td: string,

            th: string,

            tr: string,
         },

         anchorLinks: {
            depth: number,

            exclude: Array<number>,
         },

         remarkPlugins: any,

         rehypePlugins: any,
      },

      yaml: any,

      csv: {
         delimeter: string,

         json: boolean,
      },

      navigation: {
         fields: Array<string>,
      },

      documentDriven: boolean,

      experimental: {
         clientDB: boolean,

         stripQueryParameters: boolean,
      },
   },

   pinceau: {
      studio: boolean,

      outputDir: string,
   },

   appConfigSchema: {
      properties: {
         id: string,

         properties: {
            prose: {
               title: string,

               description: string,

               tags: Array<string>,

               id: string,

               properties: {
                  copyButton: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        iconCopy: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           id: string,

                           default: string,

                           type: string,
                        },

                        iconCopied: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     default: {
                        iconCopy: string,

                        iconCopied: string,
                     },

                     type: string,
                  },

                  headings: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        icon: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           tsType: string,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     default: {
                        icon: string,
                     },

                     type: string,
                  },

                  h1: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        icon: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           tsType: string,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     default: {
                        icon: string,
                     },

                     type: string,
                  },

                  h2: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        icon: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           tsType: string,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     default: {
                        icon: string,
                     },

                     type: string,
                  },

                  h3: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        icon: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           tsType: string,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     default: {
                        icon: string,
                     },

                     type: string,
                  },

                  h4: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        icon: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           tsType: string,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     default: {
                        icon: string,
                     },

                     type: string,
                  },

                  h5: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        icon: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           tsType: string,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     default: {
                        icon: string,
                     },

                     type: string,
                  },

                  h6: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        icon: {
                           title: string,

                           description: string,

                           tags: Array<any>,

                           tsType: string,

                           id: string,

                           default: string,

                           type: string,
                        },
                     },

                     default: {
                        icon: string,
                     },

                     type: string,
                  },
               },

               default: {
                  copyButton: {
                     iconCopy: string,

                     iconCopied: string,
                  },

                  headings: {
                     icon: string,
                  },

                  h1: {
                     icon: string,
                  },

                  h2: {
                     icon: string,
                  },

                  h3: {
                     icon: string,
                  },

                  h4: {
                     icon: string,
                  },

                  h5: {
                     icon: string,
                  },

                  h6: {
                     icon: string,
                  },
               },

               type: string,
            },

            cover: {
               type: string,

               id: string,

               default: string,
            },

            socials: {
               id: string,

               properties: {
                  github: {
                     type: string,

                     id: string,

                     default: string,
                  },
               },

               default: {
                  github: string,
               },

               type: string,
            },
         },

         default: {
            cover: string,

            socials: {
               github: string,
            },

            prose: {
               copyButton: {
                  iconCopy: string,

                  iconCopied: string,
               },

               headings: {
                  icon: string,
               },

               h1: {
                  icon: string,
               },

               h2: {
                  icon: string,
               },

               h3: {
                  icon: string,
               },

               h4: {
                  icon: string,
               },

               h5: {
                  icon: string,
               },

               h6: {
                  icon: string,
               },
            },
         },

         type: string,
      },

      default: {
         cover: string,

         socials: {
            github: string,
         },

         prose: {
            copyButton: {
               iconCopy: string,

               iconCopied: string,
            },

            headings: {
               icon: string,
            },

            h1: {
               icon: string,
            },

            h2: {
               icon: string,
            },

            h3: {
               icon: string,
            },

            h4: {
               icon: string,
            },

            h5: {
               icon: string,
            },

            h6: {
               icon: string,
            },
         },
      },
   },
  }
  interface PublicRuntimeConfig {
   content: {
      locales: Array<any>,

      defaultLocale: any,

      integrity: any,

      experimental: {
         stripQueryParameters: boolean,

         clientDB: boolean,
      },

      api: {
         baseURL: string,
      },

      navigation: {
         fields: Array<string>,
      },

      tags: {
         p: string,

         a: string,

         blockquote: string,

         "code-inline": string,

         code: string,

         em: string,

         h1: string,

         h2: string,

         h3: string,

         h4: string,

         h5: string,

         h6: string,

         hr: string,

         img: string,

         ul: string,

         ol: string,

         li: string,

         strong: string,

         table: string,

         thead: string,

         tbody: string,

         td: string,

         th: string,

         tr: string,
      },

      highlight: {
         theme: {
            default: string,

            dark: string,

            sepia: string,
         },

         preload: Array<string>,
      },

      wsUrl: string,

      documentDriven: {
         page: boolean,

         navigation: boolean,

         surround: boolean,

         globals: any,

         layoutFallbacks: Array<string>,

         injectPage: boolean,
      },

      host: string,

      trailingSlash: boolean,

      anchorLinks: {
         depth: number,

         exclude: Array<number>,
      },
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }
declare module '@vue/runtime-dom' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }