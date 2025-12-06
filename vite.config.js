import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/my-portfolio/",   // 👈 REQUIRED FOR GITHUB PAGES
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
