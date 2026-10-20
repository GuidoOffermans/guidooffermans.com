import eslintPluginAstro from "eslint-plugin-astro";
import tailwind from "eslint-plugin-tailwindcss";
import eslintConfigPrettier from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";
import tsParser from "@typescript-eslint/parser";

export default [
  // Add recommended configurations
  ...eslintPluginAstro.configs.recommended,
  tailwind.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  eslintConfigPrettier,
  {
    files: ["**/*.ts"],
    languageOptions: { parser: tsParser },
  },
  {
    plugins: { tailwindcss: tailwind },
    settings: {
      tailwindcss: {
        cssConfigPath: "./src/styles/main.css",
      },
    },
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
