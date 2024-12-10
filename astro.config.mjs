import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import dotenv from "dotenv"

dotenv.config();

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  vite: {
    define: {
      'process.env.NODE_ENV': JSON.stringify('production'),
    },
  },
  integrations: [tailwind(), react()],
});