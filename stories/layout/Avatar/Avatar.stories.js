import Avatar from "@/components/layout/Avatar.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: "Layout/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "info", "warning", "error"],
    },
    size: {
      control: "select",
      options: ["x-small", "small", "medium", "large", "x-large"],
    },
    variant: {
      control: "select",
      options: ["flat", "elevated", "tonal", "outlined", "plain"],
    },
    icon: {
      control: "select",
      options: ["$vuetify", "mdiPlus", "mdi-account"],
    },
    image: {
      control: "select",
      options: ["/ocelot-150px.png"],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args

export const Image = {
  args: {
    size: "x-large",
    variant: "outlined",
    image: "/ocelot-150px.png",
  },
};
export const Icon = {
  args: {
    color: "primary",
    size: "x-large",
    icon: "$vuetify",
  },
};

export const Text = {
  args: {
    text: "AA",
    color: "primary",
    size: "x-large",
  },
};
