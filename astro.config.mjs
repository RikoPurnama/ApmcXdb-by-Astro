import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import dotenv from "dotenv"

dotenv.config();

import react from "@astrojs/react";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  vite: {
    define: {
      'process.env': process.env
    }
  },
  adapter: vercel()
});