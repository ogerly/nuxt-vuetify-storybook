// import { Style } from "./.nuxt/components.d";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-mdi",
    "@nuxtjs/storybook",
    "@nuxtjs/eslint-module",
    "vuetify-nuxt-module",
  ],
  vuetify: {
    vuetifyOptions: {},
    moduleOptions: {
      // treeShake: true,
      // treeshaking: true,
      //   useIconCDN: true,
      //   styles: "none",
      //   autoImport: false,
      //   useVuetifyLabs: true,
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  typescript: {
    shim: false,
  },
  css: ["vuetify/styles"],
  storybook: {
    url: "http://localhost:6006",
    storybookRoute: "/__storybook__",
    port: 6006,
  },
});
