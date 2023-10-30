export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@invictus.codes/nuxt-vuetify', 'nuxt-mdi', '@nuxtjs/storybook', '@nuxtjs/eslint-module'],
  vuetify: {
    vuetifyOptions: {
    },
    moduleOptions: {
      treeshaking: false,
      useIconCDN: true,
      styles: 'none',
      autoImport: false,
      useVuetifyLabs: true
    }
  },
  storybook: {
    url: 'http://localhost:6006',
    storybookRoute: '/__storybook__',
    port: 6006
  }
})
