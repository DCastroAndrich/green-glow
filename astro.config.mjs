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
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      // Configurar la frecuencia de cambio
      changefreq: 'weekly',

      // Configurar prioridad
      priority: 0.7,

      // Fecha de última modificación
      lastmod: new Date(),
    }),
  ],
});
