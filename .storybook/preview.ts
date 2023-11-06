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
      dark: { ...themes.dark, brandImage: "blue-logo.svg" },
      // Override the default light theme
      light: {
        ...themes.normal,
        brandImage: "black-logo.svg",
      },
    },
  },
};

export default preview;
