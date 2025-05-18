export interface NuxtUserConfig {
 appConfig?: {
  /**
   * Prose configuration from Nuxt Typography
   * 
   * 
   * @studio-icon material-symbols:short-text-rounded
  */
  prose?: {
   /**
    * Copy button (used in code blocks)
    * 
    * 
    * @studio-icon material-symbols:content-copy
   */
   copyButton?: {
    /**
     * Icon displayed to copy
     * 
     * @default "ph:copy"
    */
    iconCopy?: string,

    /**
     * Icon displayed when copied
     * 
     * @default "ph:check"
    */
    iconCopied?: string,
   },

   /**
    * Default configuration for all headings (h1, h2, h3, h4, h5 and h6)
    * 
    * 
    * @studio-icon material-symbols:title
   */
   headings?: {
    /**
     * Default icon for anchor link on hover
     * 
     * @default "ph:link"
    */
    icon?: string|false,
   },

   /**
    * First heading configuration
    * 
    * 
    * @studio-icon material-symbols:format-h1
   */
   h1?: {
    /**
     * Icon displayed for anchor link on hover
     * 
     * @default ""
    */
    icon?: string|false,
   },

   /**
    * Second heading configuration
    * 
    * 
    * @studio-icon material-symbols:format-h2
   */
   h2?: {
    /**
     * Icon displayed for anchor link on hover
     * 
     * @default ""
    */
    icon?: string|false,
   },

   /**
    * Third heading configuration
    * 
    * 
    * @studio-icon material-symbols:format-h3
   */
   h3?: {
    /**
     * Icon displayed for anchor link on hover
     * 
     * @default ""
    */
    icon?: string|false,
   },

   /**
    * Fourth heading configuration
    * 
    * 
    * @studio-icon material-symbols:format-h4
   */
   h4?: {
    /**
     * Icon displayed for anchor link on hover
     * 
     * @default ""
    */
    icon?: string|false,
   },

   /**
    * Fifth heading configuration
    * 
    * 
    * @studio-icon material-symbols:format-h5
   */
   h5?: {
    /**
     * Icon displayed for anchor link on hover
     * 
     * @default ""
    */
    icon?: string|false,
   },

   /**
    * Sixth heading configuration
    * 
    * 
    * @studio-icon material-symbols:format-h6
   */
   h6?: {
    /**
     * Icon displayed for anchor link on hover
     * 
     * @default ""
    */
    icon?: string|false,
   },
  },

  /** @default "/cover.jpg" */
  cover?: string,

  socials?: {
   /** @default "" */
   github?: string,
  },
 },
}
export type UserAppConfig = Exclude<NuxtUserConfig['appConfig'], undefined>

declare module '@nuxt/schema' {
  interface NuxtConfig extends NuxtUserConfig {}
  interface NuxtOptions extends NuxtUserConfig {}
  interface AppConfigInput extends UserAppConfig {}
  interface AppConfig extends UserAppConfig {}
}