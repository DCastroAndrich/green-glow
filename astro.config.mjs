// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  experimental: {
    responsiveImages: true,
  },
  site: 'https://www.greenglow.com.ar',
  integrations: [react(), tailwind({ applyBaseStyles: false }), sitemap()],
});
