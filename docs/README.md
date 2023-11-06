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

# Dokumentation

We use **Docsify** in this project. This is available at http://localhost:8080.
We ask you to read this in detail and go through all the steps before you start setting up Ocelot.
Pay attention to the dependencies and the interaction of the individual tools and plugins.
This project is also intended to be used for teaching and training purposes. We cover a large area of professional front-end development with this project.

---

# Front development

Nuxt, Vuetify, Storybook, Figma, Cromatic

**Interaction between Storybook, Figma and Chromatic**

The interaction between Storybook, Figma and Chromatic plays a decisive role in the professional development process and promotes collaboration between designers, developers and customers.

## Storybook

- **Purpose**: Storybook is a tool for developing components and user interfaces. It enables developers to create and test UI components in isolation.
- **Use**: Developers use Storybook to create and present user interface components. They can define and test different states and scenarios for these components. This facilitates iteration and debugging.

## Figma

- **Purpose**: Figma is a design and collaboration tool that allows designers to create, edit and share user interfaces.
- **Use**: Designers use Figma to create and prototype the visual design of the user interface. They can create mockups, wireframes and interactive prototypes. Figma also enables collaboration as multiple users can work on a design simultaneously.

## Chromatic

- **Purpose**: Chromatic is a tool for visual regression and UI testing. It enables the continuous monitoring of UI changes and the early detection of visual problems.
- **Use**: Chromatic is used to ensure the visual consistency of UI components, especially in relation to design changes and updates. It captures screenshots of storybook components and compares them to detect visual regressions.

  - The Ocelot Storybook of this repository can be found here: [https://65440b50eff8b11b8e1d0939-lpcuymgxzi.chromatic.com/](https://65440b50eff8b11b8e1d0939-lpcuymgxzi.chromatic.com/)

  - The Ocelot Storybook Build at Cromatic of this repository can be found here: [https://www.chromatic.com/build?appId=65440b50eff8b11b8e1d0939](https://www.chromatic.com/build?appId=65440b50eff8b11b8e1d0939)

# Interaction

1. ## Figma & Designer

   - Designers use Figma to create the visual design and create prototypes.
   - They share their design work with the development team and the customer via Figma.

2. ## Storybook & Developers

   - Developers use Storybook to implement and test the created components based on the Figma designs.
   - They create Storybook stories to showcase the functionality and appearance of the components.

3. ## Chromatic & testing

   - Chromatic can be integrated into the development process to ensure that visual regressions are avoided.
   - Every time a change is made in Storybook, screenshots are automatically taken and compared to previous versions. Any visual deviation is recognised and logged.

4. **Customer and approval**:
   - The customer can check the current status of the design and prototypes via Figma.
   - With Chromatic, the customer can ensure that the implementation of the UI components meets the design specifications by monitoring visual regressions.

The interaction of Storybook, Figma and Chromatic promotes seamless collaboration between designers and developers, enables efficient iteration and ensures that the UI components created meet the design specifications. This contributes to the quality and consistency of the end product and facilitates communication and approval with the customer.

# Storybook

## Port 6006

After starting the application, you can call up the storybook at [http://localhost:6006/](http://localhost:6006/).

## Publish Storybook

```bash
  pnpm run build-storybook
  pnpm dlx http-server ./path/to/build
  npm install chromatic --save-dev
  npx chromatic --project-token=<your-project-token>
```

## Storybook to Chromatic

You can connect your Storybook to Chromatic. To do this, you need an account with [Chromatic](https://www.chromatic.com/).

You can publish your storybook to Chromatic with the following command:

```bash
  npx chromatic --project-token=chpt_YOUR_TOKEN
```

You can find the Ocelot Storybook of this repository here: [https://65440b50eff8b11b8e1d0939-lpcuymgxzi.chromatic.com/](https://65440b50eff8b11b8e1d0939-lpcuymgxzi.chromatic.com/)

## Storybook Static

** If a Storybook build has been made, the Storybook can be accessed via this command at localhost:8080**

```bash
  pnpm dlx http-server ./storybook-static
```
