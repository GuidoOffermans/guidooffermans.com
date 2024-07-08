import {defineConfig} from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import alpine from '@astrojs/alpinejs';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: "https://guidooffermans.com",
    integrations: [mdx(), sitemap(), alpine(), tailwind({applyBaseStyles: false,})],
});
