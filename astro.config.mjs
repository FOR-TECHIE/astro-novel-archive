// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://for-techie.github.io',
  base: 'astro-novel-archive',

  vite: {
    plugins: [tailwindcss()],
  },
});