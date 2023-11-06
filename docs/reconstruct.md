## Reconstructing the Starter:

We have built the starter as follows.

### The most crucial point is to use precise versions at the moment.

- Nuxt: 3.6.5
- Vuetify: 3.3.17
- Storybook: 7.4.4

## Installation Process

1. Create a new Nuxt 3 project using the following command:

```bash
pnpm dlx nuxt@3.6.5 init <project-name>
# Make sure you have 'shamefully-hoist=true' in your .npmrc before running pnpm install
cd <project-name>
pnpm install
```

2. Install Storybook and Vuetify:

```bash
npx storybook-nuxt init
pnpm add @invictus.codes/nuxt-vuetify vuetify
```

3. Update your `nuxt.config.ts` with the following configuration:

```typescript
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@invictus.codes/nuxt-vuetify",
    "@nuxtjs/storybook",
    "@nuxtjs/eslint-module",
  ],
  vuetify: {
    vuetifyOptions: {},
    moduleOptions: {
      treeshaking: false,
      useIconCDN: true,
      styles: "none",
      autoImport: false,
      useVuetifyLabs: true,
    },
  },
  storybook: {
    url: "http://localhost:6006",
    storybookRoute: "/__storybook__",
    port: 6006,
  },
});
```

4. Start the development server with Vuetify:

```bash
  pnpm run dev
```

## Storybook Integration

To integrate Storybook with Nuxt 3, please refer to the [Storybook Nuxt module documentation](https://storybook.nuxtjs.org/).

```
Make sure you have the following versions for a smooth experience:
- Nuxt: 3.6.5
- Vuetify: 3.3.17
- Storybook: 7.4.4
```

We are monitoring the development of the following modules:

- @invictus.codes/nuxt-vuetify

  - The module at Nuxtjs is: [https://nuxt.com/modules/nuxt-vuetify](https://nuxt.com/modules/nuxt-vuetify)

- @nuxtjs/storybook

  - [https://storybook.nuxtjs.org/getting-started/setup!!!](https://storybook.nuxtjs.org/getting-started/setup!!!)
  - The module at Nuxtjs is: [https://nuxt.com/modules/storybook](https://nuxt.com/modules/storybook)

  ```
  /* ! Important Note !
  - Use the installation instructions from [https://storybook.nuxtjs.org/getting-started/setup](https://storybook.nuxtjs.org/getting-started/setup). The instructions from the module page did not lead to the desired outcome.
  - Vite-plugin-vuetify can cause errors when building Storybook if exact versions are not followed. Remove vite-plugin-vuetify and follow the instructions.
  ```

  To integrate Storybook with Nuxt 3, please refer to the [Storybook Nuxt module documentation](https://storybook.nuxtjs.org/).

  For a detailed tutorial on integrating Storybook with Vuetify in your Nuxt application, you can read this [Medium article](https://medium.com/@chakas3/tutorial-integrating-storybook-with-vuetify-in-your-nuxt-application-ac8af5a0a946).
