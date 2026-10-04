// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: process.env.GITHUB_PAGES === "true" ? "/KORA-Table/" : "/",
  tanstackStart: {
    // GitHub Pages is static hosting, so prerender every linked route.
    prerender: {
      enabled: true,
      autoSubfolderIndex: true,
      autoStaticPathsDiscovery: true,
      crawlLinks: true,
      failOnError: true,
    },
    // Keep the existing server entry for normal local/Vercel builds.
    server: { entry: "server" },
  },
  // Nitro's GitHub Pages preset outputs only the static public directory.
  nitro: {
    preset: process.env.GITHUB_PAGES === "true" ? "github_pages" : undefined,
  },
});
