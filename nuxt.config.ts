export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',

  modules: [// https://github.com/nuxt-modules/plausible
    // https://github.com/nuxt/devtools
    '@nuxtjs/plausible', // https://tailwindcss.nuxtjs.org/
    '@nuxt/devtools', '@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxtjs/google-fonts'],

  i18n: {
    vueI18n: './i18n.config.ts'
  },

  googleFonts: {
    families: {
      Inter: [400, 700],
      Georgia: [400, 700]
    }
  },
})