module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "@nuxtjs",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
  ],
  plugins: ["nuxt"],
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/require-default-prop": "off",
    "vue/script-setup-uses-vars": "off",
    "no-unused-vars": "off",
    "no-undef": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
};
