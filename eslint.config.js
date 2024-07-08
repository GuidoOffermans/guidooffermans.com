import eslintPluginAstro from "eslint-plugin-astro";
import tailwind from "eslint-plugin-tailwindcss";
import eslintConfigPrettier from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  // Add recommended configurations
  ...eslintPluginAstro.configs.recommended,
  ...tailwind.configs["flat/recommended"],
  jsxA11y.flatConfigs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      "tailwindcss/no-custom-classname": [
        "warn",
        {
          whitelist: ["^fa\\-.*"],
        },
      ],
    },
  },
];
