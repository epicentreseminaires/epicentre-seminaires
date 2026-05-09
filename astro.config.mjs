import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Site déployé via GitHub Pages avec custom domain epicentre-seminaires.fr.
// Le CNAME dans /public/ assure le bon domaine ; le site Astro est servi à la racine.
//
// Architecture : le domaine racine = agence Plaine de l'Ain. Le Domaine d'Épinac
// est déployé séparément sur le sous-domaine epinac.epicentre-seminaires.fr
// (repo distinct). Les anciennes URLs /plaine-de-lain/* (structure historique)
// et /epinac/* (avant migration sous-domaine) sont redirigées pour préserver le SEO.
export default defineConfig({
  site: 'https://epicentre-seminaires.fr',
  redirects: {
    // Anciennes URLs /plaine-de-lain/* → racine
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
    // Anciennes URLs /epinac/* → sous-domaine dédié
    '/epinac/': 'https://epinac.epicentre-seminaires.fr/',
    '/epinac/le-domaine/': 'https://epinac.epicentre-seminaires.fr/le-domaine/',
    '/epinac/productions/': 'https://epinac.epicentre-seminaires.fr/productions/',
    '/epinac/contact/': 'https://epinac.epicentre-seminaires.fr/contact/',
    '/epinac/seminaire-autun/': 'https://epinac.epicentre-seminaires.fr/seminaire-autun/',
    '/epinac/seminaire-beaune/': 'https://epinac.epicentre-seminaires.fr/seminaire-beaune/',
    '/epinac/seminaire-le-creusot/': 'https://epinac.epicentre-seminaires.fr/seminaire-le-creusot/',
    '/epinac/seminaire-depuis-dijon/': 'https://epinac.epicentre-seminaires.fr/seminaire-depuis-dijon/',
    '/epinac/seminaire-depuis-geneve/': 'https://epinac.epicentre-seminaires.fr/seminaire-depuis-geneve/',
    '/epinac/seminaire-depuis-lyon/': 'https://epinac.epicentre-seminaires.fr/seminaire-depuis-lyon/',
    '/epinac/seminaire-depuis-macon/': 'https://epinac.epicentre-seminaires.fr/seminaire-depuis-macon/',
    '/epinac/seminaire-depuis-paris/': 'https://epinac.epicentre-seminaires.fr/seminaire-depuis-paris/',
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
      filter: (page) => !page.includes('/merci/') && !page.includes('/plaine-de-lain/') && !page.includes('/epinac/'),
      serialize(item) {
        // Priorités SEO sur-mesure : la home et le hub Épinac tirent le plus
        const url = item.url;
        if (url === 'https://epicentre-seminaires.fr/') item.priority = 1.0;
        else if (url.endsWith('/epinac/')) item.priority = 0.9;
        // Pages lieux Plaine SEO porteuses (cocon géo)
        else if (/\/seminaire-(amberieu|lagnieu|meximieux|saint-vulbas|perouges)/.test(url)) item.priority = 0.85;
        // Pages géo étendues (Lyon, Bourg, Genève, Mâcon)
        else if (/\/agence-evenementielle-(lyon|bourg|geneve|macon)/.test(url)) item.priority = 0.85;
        // Pages catégorie lexique (15 pages SEO porteuses pour glossaire)
        else if (url.match(/\/lexique\/[a-z]+\/$/)) item.priority = 0.8;
        // Pages catégorie carnet d'adresses
        else if (url.match(/\/conseiller\/[a-z-]+\/$/)) item.priority = 0.8;
        // Pages production formats
        else if (url.match(/\/productions\/[a-z-]+\/$/)) item.priority = 0.8;
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
