# Nuxt 3 Minimal Starter with Storybook and Vuetify

The interplay of Nuxtjs, Vuetify, and Storybook now works quite well. However, it's not entirely straightforward, and the documentation on Nuxtjs is not always up to date. It took some time to achieve a clean integration, but with the modules provided by Nuxtjs, it is now possible to use Vuetify and Storybook together in a single project.

Demo: [https://stackblitz.com/~/github.com/ogerly/nuxt-vuetify-storybook](https://stackblitz.com/~/github.com/ogerly/nuxt-vuetify-storybook)

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

---

---

# Frontententwicklung

Nuxt, Vuetify, Storybook, Figma, Cromatic

Z# Zusammenspiel von Storybook, Figma und Chromatic

Das Zusammenspiel von Storybook, Figma und Chromatic spielt eine entscheidende Rolle im professionellen Entwicklungsprozess und fördert die Zusammenarbeit zwischen Designern, Entwicklern und Kunden.

## Storybook

- **Zweck**: Storybook ist ein Werkzeug zur Entwicklung von Komponenten und Benutzeroberflächen. Es ermöglicht Entwicklern, UI-Komponenten isoliert zu erstellen und zu testen.
- **Verwendung**: Entwickler verwenden Storybook, um Benutzeroberflächenkomponenten zu erstellen und zu präsentieren. Sie können verschiedene Zustände und Szenarien für diese Komponenten definieren und testen. Dies erleichtert die Iteration und das Debugging.

## Figma

- **Zweck**: Figma ist ein Design- und Kollaborationstool, das es Designern ermöglicht, Benutzeroberflächen zu erstellen, zu bearbeiten und mit anderen zu teilen.
- **Verwendung**: Designer verwenden Figma, um das visuelle Design der Benutzeroberfläche zu erstellen und zu prototypisieren. Sie können Mockups, Wireframes und interaktive Prototypen erstellen. Figma ermöglicht auch die Zusammenarbeit, da mehrere Benutzer gleichzeitig an einem Design arbeiten können.

## Chromatic

- **Zweck**: Chromatic ist ein Tool für das visuelle Regressions- und UI-Testing. Es ermöglicht die kontinuierliche Überwachung von UI-Änderungen und die frühzeitige Erkennung von visuellen Problemen.
- **Verwendung**: Chromatic wird verwendet, um die visuelle Konsistenz von UI-Komponenten sicherzustellen, insbesondere in Bezug auf Designänderungen und -aktualisierungen. Es erfasst Screenshots von Storybook-Komponenten und vergleicht sie, um visuelle Regressionen zu erkennen.

  - Das Ocelot Storybook dieses Repositories findest du hier: [https://65440b50eff8b11b8e1d0939-lpcuymgxzi.chromatic.com/](https://65440b50eff8b11b8e1d0939-lpcuymgxzi.chromatic.com/)

  - Das Ocelot Storybook Build bei Cromatic dieses Repositories findest du hier: [https://www.chromatic.com/build?appId=65440b50eff8b11b8e1d0939](https://www.chromatic.com/build?appId=65440b50eff8b11b8e1d0939)

## Zusammenspiel

1. **Designer und Figma**:

   - Designer verwenden Figma, um das visuelle Design zu erstellen und Prototypen zu erstellen.
   - Sie teilen ihre Designarbeiten mit dem Entwicklungsteam und dem Kunden über Figma.

2. **Entwickler und Storybook**:

   - Entwickler verwenden Storybook, um die erstellten Komponenten basierend auf den Figma-Designs zu implementieren und zu testen.
   - Sie erstellen Storybook-Geschichten (Stories), um die Funktionalität und das Aussehen der Komponenten zu präsentieren.

3. **Chromatic und Tests**:
   - Chromatic kann in den Entwicklungsprozess integriert werden, um sicherzustellen, dass visuelle Regressionen vermieden werden.
   - Bei jeder Änderung in Storybook werden automatisch Screenshots erstellt und mit den vorherigen Versionen verglichen. Jede visuelle Abweichung wird erkannt und protokolliert.
4. **Kunde und Freigabe**:
   - Der Kunde kann über Figma den aktuellen Stand des Designs und Prototypen überprüfen.
   - Mit Chromatic kann der Kunde sicherstellen, dass die Implementierung der UI-Komponenten den Designvorgaben entspricht, indem er visuelle Regressionen überwacht.

Das Zusammenspiel von Storybook, Figma und Chromatic fördert eine nahtlose Zusammenarbeit zwischen Designern und Entwicklern, ermöglicht eine effiziente Iteration und sorgt dafür, dass die erstellten UI-Komponenten den Designspezifikationen entsprechen. Dies trägt zur Qualität und Konsistenz des Endprodukts bei und erleichtert die Kommunikation und Freigabe mit dem Kunden.

### Storybook

Nach dem Start der Anwendung kannst du unter [http://localhost:6006/](http://localhost:6006/) das Storybook aufrufen.

### Storybook to Chromatic

Du kannst dein Storybook mit Chromatic verbinden. Dazu benötigst du einen Account bei [Chromatic](https://www.chromatic.com/).

Mit folgendem Befehl kannst Du dein Storybook bei Chromatic veröffentlichen:

### Publish Storybook

```bash
  pnpm run build-storybook
  pnpm dlx http-server ./path/to/build
  npm install chromatic --save-dev
  npx chromatic --project-token=<your-project-token>
```

Das Ocelot Storybook dieses Repositories findest du hier: [https://65440b50eff8b11b8e1d0939-lpcuymgxzi.chromatic.com/](https://65440b50eff8b11b8e1d0939-lpcuymgxzi.chromatic.com/)

### If a Storybook build has been made, the Storybook can be accessed via this command at localhost:8080

```bash
  pnpm dlx http-server ./storybook-static
```

---

---

---

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
