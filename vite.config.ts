import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";
import { componentTagger } from "lovable-tagger";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => ({
    server: {},
    plugins: [
        tailwindcss(),
        react(),
        VitePWA({
            registerType: "autoUpdate",
            manifest: {
                name: "Portfolio of Tsvetan Tsaryanski - JS FullStack Developer",
                short_name: "Portfolio",
                start_url: "/",
                display: "standalone",
                background_color: "#ffffff",
                theme_color: "#2c3e50",
            },
        }),
        mode === "development" && componentTagger(),
    ].filter(Boolean),
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    base: mode === "production" ? "/Portfolio/" : "/",
}));
