import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Site déployé via GitHub Pages avec custom domain epicentre-seminaires.fr.
// Le CNAME dans /public/ assure le bon domaine ; le site Astro est servi à la racine.
//
// Architecture : le site racine = agence Plaine de l'Ain. Le mini-site Épinac
// vit dans /epinac/* avec son propre SEO. Les anciennes URLs /plaine-de-lain/*
// sont redirigées vers la nouvelle structure plate pour préserver le SEO acquis.
export default defineConfig({
  site: 'https://epicentre-seminaires.fr',
  redirects: {
    '/plaine-de-lain/': '/',
    '/plaine-de-lain/agence/': '/agence/',
    '/plaine-de-lain/productions/': '/productions/',
    '/plaine-de-lain/realisations/': '/realisations/',
    '/plaine-de-lain/contact/': '/contact/',
    '/plaine-de-lain/seminaire-amberieu-en-bugey/': '/seminaire-amberieu-en-bugey/',
    '/plaine-de-lain/seminaire-lagnieu/': '/seminaire-lagnieu/',
    '/plaine-de-lain/seminaire-meximieux/': '/seminaire-meximieux/',
    '/plaine-de-lain/seminaire-saint-vulbas/': '/seminaire-saint-vulbas/',
    '/plaine-de-lain/seminaire-perouges/': '/seminaire-perouges/',
  },
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
      filter: (page) => !page.includes('/merci/') && !page.includes('/plaine-de-lain/'),
      serialize(item) {
        // Priorités SEO sur-mesure : la home et le hub Épinac tirent le plus
        const url = item.url;
        if (url === 'https://epicentre-seminaires.fr/') item.priority = 1.0;
        else if (url.endsWith('/epinac/')) item.priority = 0.9;
        // Pages lieux Plaine SEO porteuses (cocon géo)
        else if (/\/seminaire-(amberieu|lagnieu|meximieux|saint-vulbas|perouges)/.test(url)) item.priority = 0.85;
        // Pages lieux Épinac depuis grandes villes
        else if (/\/epinac\/seminaire-depuis-(lyon|paris|geneve|dijon)/.test(url)) item.priority = 0.85;
        else if (url.includes('/epinac/seminaire-')) item.priority = 0.8;
        // Articles journal : porteurs de longue traîne
        else if (url.includes('/journal/') && !url.endsWith('/journal/')) item.priority = 0.75;
        // Pages structurantes (process, equipement, agence, productions, realisations)
        else if (/\/(agence|productions|realisations|process|equipement|a-propos|journal)\/$/.test(url)) item.priority = 0.7;
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
