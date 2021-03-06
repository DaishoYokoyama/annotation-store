module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  ignorePatterns: ["**/__mocks__/*"],
  parserOptions: {
    ecmaVersion: 2021,
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
  },
  plugins: [],
  rules: { "vue/require-default-prop": "off" },
};
