import type { Preview } from "@storybook/vue3";
import { themes } from '@storybook/theming';


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
      dark: { ...themes.dark, brandImage: "/public/storybook-logo-ocelot-150px.png" },
      // Override the default light theme
      light: {
        ...themes.normal,
        brandImage: "/public/storybook-logo-ocelot-150px.png",
      },
    },
  },
};

export default preview;
