

# Nuxt 3 Minimal Starter with Storybook and Vuetify

The interplay of Nuxtjs, Vuetify, and Storybook now works quite well. However, it's not entirely straightforward, and the documentation on Nuxtjs is not always up to date. It took some time to achieve a clean integration, but with the modules provided by Nuxtjs, it is now possible to use Vuetify and Storybook together in a single project. 


Demo: https://stackblitz.com/~/github.com/ogerly/nuxt-vuetify-storybook

To get started:

## Setup

Make sure to install the required dependencies by running one of the following commands:

```bash
# Using npm
npm install

# Using pnpm
pnpm install

# Using yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000` with one of the following commands:

```bash
# Using npm
npm run dev

# Using pnpm
pnpm run dev

# Using yarn
yarn dev
```

## Production

Build the application for production with the following commands:

```bash
# Using npm
npm run build

# Using pnpm
pnpm run build

# Using yarn
yarn build
```

To preview the production build locally:

```bash
# Using npm
npm run preview

# Using pnpm
pnpm run preview

# Using yarn
yarn preview
```

For more information on deployment, please refer to the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment).



# Reconstructing the Starter:

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
      modules: ['@invictus.codes/nuxt-vuetify', '@nuxtjs/storybook', '@nuxtjs/eslint-module'],
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
  - The module at Nuxtjs is: https://nuxt.com/modules/nuxt-vuetify

- @nuxtjs/storybook
  - https://storybook.nuxtjs.org/getting-started/setup!!!
  - The module at Nuxtjs is: https://nuxt.com/modules/storybook
  ```javascript
  /* ! Important Note !
  - Use the installation instructions from https://storybook.nuxtjs.org/getting-started/setup. The instructions from the module page did not lead to the desired outcome.
  - Vite-plugin-vuetify can cause errors when building Storybook if exact versions are not followed. Remove vite-plugin-vuetify and follow the instructions.
  ```
  To integrate Storybook with Nuxt 3, please refer to the [Storybook Nuxt module documentation](https://storybook.nuxtjs.org/).

  For a detailed tutorial on integrating Storybook with Vuetify in your Nuxt application, you can read this [Medium article](https://medium.com/@chakas3/tutorial-integrating-storybook-with-vuetify-in-your-nuxt-application-ac8af5a0a946).
