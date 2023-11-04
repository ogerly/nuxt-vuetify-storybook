import Icon from "@/components/layout/Icon.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: "Layout/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "info", "warning", "error"],
    },
    size: {
      control: "select",
      options: ["x-small", "small", "medium", "large", "x-large"],
    },
    icon: {
      control: "select",
      options: ["$vuetify", "mdiPlus", "mdi-account"],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    color: "primary",
    size: "x-large",
    icon: "$vuetify",
  },
};

export const Seccendary = {
  args: {
    color: "warning",
    size: "x-large",
    icon: "$vuetify",
  },
};
