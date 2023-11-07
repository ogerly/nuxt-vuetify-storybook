import type { Preview } from "@storybook/vue3";
import { themes } from '@storybook/theming';
import 'vuetify/lib/styles/main.css'
import '@mdi/font/scss/materialdesignicons.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      // Override the default dark theme
      dark: { ...themes.dark, brandImage: "/storybook-logo-ocelot-150px.png" },
      // Override the default light theme
      light: {
        ...themes.normal,
        brandImage: "/storybook-logo-ocelot-150px.png",
      },
    },
  },
};

export default preview;
