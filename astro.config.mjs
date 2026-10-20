import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import alpine from "@astrojs/alpinejs";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import emdash from "emdash/astro";
import { d1, r2 } from "@emdash-cms/cloudflare";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://guidooffermans.com",
    output: "server",
    vite: {
        plugins: [tailwindcss()],
    },
    adapter: cloudflare(),
    integrations: [
        sitemap(),
        alpine(),
        // Required for the EmDash admin UI
        react(),
        emdash({
            database: d1({ binding: "DB" }),
            storage: r2({ binding: "MEDIA" }),
        }),
    ],
});
