import MyButtonMenu from "@/components/layout/ButtonMenu.vue";

export default {
  title: "Layout/ButtonMenu",
  component: MyButtonMenu,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    items: {
      control: "array",
      options: [{ title: "Item 1" }, { title: "Item 2" }, { title: "Item 3" }],
    },
    openOnClick: {
      control: "boolean",
    },
    openOnHover: {
      control: "boolean",
    },
    openOnFocus: {
      control: "boolean",
    },
    size: {
      control: "select",
      options: ["x-small", "small", "medium", "large", "x-large"],
    },
    variant: {
      control: "select",
      options: ["flat", "elevated", "tonal", "outlined", "plain"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "info", "warning", "error"],
    },
    rounded: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
    block: {
      control: "boolean",
    },
    icon: {
      control: "select",
      options: ["$vuetify", "mdiPlus", "mdi-account"],
    },
    density: {
      control: "select",
      options: ["default", "comfortable", "compact"],
    },
    elevation: {
      control: { type: "range", min: 0, max: 24, step: 1 },
    },
    appendIcon: {
      control: "text",
    },
    prependIcon: {
      control: "text",
    },
    active: {
      control: "boolean",
    },
  },
};

export const Normal = {
  args: {
    text: "Ocelot Menu",
  },
};

export const OpenOnHOver = {
  args: {
    openOnHover: true,
  },
};
