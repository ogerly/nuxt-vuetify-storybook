# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.



## install prozess

pnpm dlx nuxi@latest init <project-name>
# Make sure you have `shamefully-hoist=true` in `.npmrc` before running pnpm install
cd <project-name>
pnpm install

pnpm i -D vuetify vite-plugin-vuetify
pnpm i @mdi/font


 <!-- nuxt.config.ts -->

 ```
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})

 ```


 <!-- ~/plugins/vuetify.ts -->
 ```
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

interface App {
  vueApp: any; // Replace 'any' with the appropriate type for 'vueApp'
}

export default defineNuxtPlugin((app: App) => {
  const vuetify = createVuetify({
    // ... your configuration
  })
  app.vueApp.use(vuetify)
})
 ```

<!-- app.vue -->
 ```
<template>
  <NuxtLayout>
    <v-app>
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template> 
```

pnpm run dev



Storybook "@nuxtjs/storybook" !! 

https://storybook.nuxtjs.org/

https://medium.com/@chakas3/unleash-your-creativity-with-the-new-storybook-nuxt-module-b7beb1441bed




# Vuetify in Storybook 

- Install Vuetify and Nuxt Vuetify Plugin: To add Vuetify to your Nuxt.js project, run the following command:

pnpm add @invictus.codes/nuxt-vuetify vuetify
Familiarity with Vuetify: A basic understanding of Vuetify, a popular Vue framework for building UIs. This includes knowing how to use Vuetify components and work with its theming system.

### make sure before starting that you have right versions
vuetify:3.3.17 , nuxt:3.6.5, storybook:7.4.4


Tutorial: Integrating Storybook with Vuetify in Your Nuxt Application
https://medium.com/@chakas3/tutorial-integrating-storybook-with-vuetify-in-your-nuxt-application-ac8af5a0a946 