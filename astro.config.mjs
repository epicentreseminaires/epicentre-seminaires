import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Site déployé via GitHub Pages avec custom domain epicentre-seminaires.fr.
// Le CNAME dans /public/ assure le bon domaine ; le site Astro est servi à la racine.
export default defineConfig({
  site: 'https://epicentre-seminaires.fr',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR' },
      },
      serialize(item) {
        // Priorités SEO sur-mesure : la home et les hubs de zones tirent le plus
        const url = item.url;
        if (url === 'https://epicentre-seminaires.fr/') item.priority = 1.0;
        else if (url.endsWith('/epinac/') || url.endsWith('/plaine-de-lain/')) item.priority = 0.9;
        else if (url.includes('/contact/')) item.priority = 0.6;
        else item.priority = 0.7;
        return item;
      },
    }),
  ],
  build: {
    format: 'directory',
  },
  trailingSlash: 'always',
});
