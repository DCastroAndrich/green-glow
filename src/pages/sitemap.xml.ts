// src/pages/sitemap.xml.ts

import type { APIRoute } from 'astro';

// Definimos una interfaz para representar un sitemap individual
// Esto nos ayuda a mantener consistencia si agregamos más sitemaps en el futuro
interface SitemapEntry {
  loc: string;
  lastmod?: string;
  changefreq?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
  priority?: number;
}

// Definimos una interfaz para el índice completo de sitemaps
interface SitemapIndex {
  sitemaps: SitemapEntry[];
}

export const GET: APIRoute = async ({ params, request }) => {
  // Creamos nuestros datos del sitemap usando las interfaces definidas
  // Esto nos proporciona verificación de tipos y mejor documentación del código
  const sitemapData: SitemapIndex = {
    sitemaps: [
      {
        loc: 'https://www.greenglow.com.ar/sitemap-0.xml',
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 1.0,
      },
    ],
  };

  // Generamos el XML usando nuestros datos tipados
  const sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapData.sitemaps
    .map(
      (sitemap) => `
  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`
    )
    .join('')}
</sitemapindex>`;

  return new Response(sitemapIndexContent, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'X-Robots-Tag': 'noindex',
    },
  });
};
