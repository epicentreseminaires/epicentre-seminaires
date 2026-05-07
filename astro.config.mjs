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
      filter: (page) => !page.includes('/merci/'),
      serialize(item) {
        // Priorités SEO sur-mesure : la home et les hubs de zones tirent le plus
        const url = item.url;
        if (url === 'https://epicentre-seminaires.fr/') item.priority = 1.0;
        else if (url.endsWith('/plaine-de-lain/')) item.priority = 0.95;
        else if (url.endsWith('/epinac/')) item.priority = 0.9;
        // Pages lieux SEO porteuses (cocons géo) : plus haut que les pages services
        else if (url.includes('/plaine-de-lain/seminaire-')) item.priority = 0.85;
        else if (url.includes('/epinac/seminaire-depuis-lyon/') || url.includes('/epinac/seminaire-depuis-paris/') || url.includes('/epinac/seminaire-depuis-geneve/') || url.includes('/epinac/seminaire-depuis-dijon/')) item.priority = 0.85;
        else if (url.includes('/epinac/seminaire-')) item.priority = 0.8;
        // Articles journal : porteurs de longue traîne
        else if (url.includes('/journal/') && !url.endsWith('/journal/')) item.priority = 0.75;
        // Pages services et structurantes
        else if (url.endsWith('/journal/') || url.endsWith('/a-propos/')) item.priority = 0.7;
        // Pages contact : moins prioritaires (transactionnelles)
        else if (url.includes('/contact/')) item.priority = 0.5;
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
